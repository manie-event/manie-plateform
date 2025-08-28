import { addTokenWithLabel, normalizeText } from '@/utils/form-utils';
import { reactive } from 'vue';
import type {
  FormState,
  SectionSchema,
  SectorData,
  ServiceSelection,
} from '~/models/questionnaire/QuestionnaireClientModel';

export const useServiceMapping = () => {
  const sectorDataCache = reactive<Record<string, SectorData>>({});
  const loadedSectors = reactive(new Set<string>());

  /**
   * Charge les données d'un secteur depuis l'API
   */
  const loadSectorData = async (sectorId: string, getSectorsApi: Function): Promise<void> => {
    if (loadedSectors.has(sectorId)) {
      return;
    }

    try {
      const data = await getSectorsApi(sectorId);

      if (data?.services && data?.keywords) {
        loadedSectors.add(sectorId);

        sectorDataCache[sectorId] = data;
      } else {
        console.warn(`⚠️ Données incomplètes pour le secteur ${sectorId}:`, data);
      }
    } catch (error) {
      loadedSectors.delete(sectorId);
      console.error(`❌ Erreur lors du chargement du secteur ${sectorId}:`, error);
      throw error;
    }
  };

  /**
   * Collecte tous les tokens sélectionnés dans une section
   */
  const collectSelectedTokens = (section: SectionSchema, formAnswers: FormState): Set<string> => {
    const tokens = new Set<string>();

    for (const field of section.fields) {
      if (field.visibleSection) continue; // Skip les champs de contrôle de section

      const value = formAnswers[field.id];
      if (!value) continue;

      if (field.type === 'checkbox' && field.multiple && Array.isArray(value)) {
        value.forEach((v) => addTokenWithLabel(tokens, v, field.options));
      } else if ((field.type === 'radio' || field.type === 'select') && value) {
        addTokenWithLabel(tokens, value, field.options);
      }
    }

    return tokens;
  };

  /**
   * Mappe les tokens aux UUIDs des services et keywords
   */
  const mapTokensToUuids = (
    tokens: Set<string>,
    sectorData: SectorData
  ): { serviceUuids: string[]; keywordUuids: string[] } => {
    // Créer des maps de recherche
    const serviceMap = new Map<string, string>();
    const keywordMap = new Map<string, string>();

    sectorData.services.forEach((service) => {
      const normalizedName = normalizeText(service.name);

      const testService = serviceMap.set(normalizedName, service.uuid);
    });

    // je ne passe pas dans ce code
    sectorData.keywords.forEach((keyword) => {
      const normalizedName = normalizeText(keyword.value);

      const testKeywords = keywordMap.set(normalizedName, keyword.uuid);
    });

    // Mapper les tokens
    const serviceUuids: string[] = [];
    const keywordUuids: string[] = [];

    tokens.forEach((token) => {
      const serviceUuid = serviceMap.get(token);
      const keywordUuid = keywordMap.get(token);

      if (serviceUuid) {
        serviceUuids.push(serviceUuid);
      }

      if (keywordUuid) {
        keywordUuids.push(keywordUuid);
      }
    });

    // Dédoublonner
    const uniqueServiceUuids = Array.from(new Set(serviceUuids));
    const uniqueKeywordUuids = Array.from(new Set(keywordUuids));

    // Si aucun service trouvé mais un seul service disponible, l'utiliser
    if (uniqueServiceUuids.length === 0 && sectorData.services.length === 1) {
      uniqueServiceUuids.push(sectorData.services[0].uuid);
    }

    return {
      serviceUuids: uniqueServiceUuids,
      keywordUuids: uniqueKeywordUuids,
    };
  };

  /**
   * Construit les sélections de services à partir du formulaire
   */
  const buildServiceSelections = (
    sections: SectionSchema[],
    formAnswers: FormState
  ): ServiceSelection[] => {
    const selections: ServiceSelection[] = [];

    for (const section of sections) {
      const sectorData = sectorDataCache[section.id];

      // Si la section n'est pas activée (toggle faux), on ignore silencieusement
      const toggleId = `__section_${section.id}_toggle`;
      const isActive = Boolean(formAnswers[toggleId]);
      if (!isActive) continue;
      // Section active mais données non chargées: ne pas spammer la console, juste ignorer
      if (!sectorData) continue;

      // Collecter tous les tokens sélectionnés dans cette section
      const selectedTokens = collectSelectedTokens(section, formAnswers);
      if (selectedTokens.size === 0) {
        continue;
      }

      // Mapper les tokens aux UUIDs
      const { serviceUuids, keywordUuids } = mapTokensToUuids(selectedTokens, sectorData);
      // Créer les sélections de services
      if (keywordUuids.length > 0 && serviceUuids.length > 0) {
        serviceUuids.forEach((serviceUuid) => {
          const selection = { serviceUuid, keywordsUuid: keywordUuids };

          selections.push(selection);
        });
      }
    }

    return selections;
  };

  return {
    sectorDataCache,
    loadedSectors,
    loadSectorData,
    buildServiceSelections,
  };
};
