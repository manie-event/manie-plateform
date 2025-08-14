import type {
  FormState,
  SectionSchema,
  SectorData,
  ServiceSelection,
} from '@/models/questionnaire/QuestionnaireClient';
import { addTokenWithLabel, normalizeText } from '@/utils/form.utils';
import { reactive } from 'vue';

export const useServiceMapping = () => {
  const sectorDataCache = reactive<Record<string, SectorData>>({});
  const loadedSectors = reactive(new Set<string>());

  /**
   * Charge les données d'un secteur depuis l'API
   */
  const loadSectorData = async (sectorId: string, getSectorsApi: Function): Promise<void> => {
    if (loadedSectors.has(sectorId)) {
      console.log(`Secteur ${sectorId} déjà chargé`);
      return;
    }

    try {
      console.log(`Chargement du secteur: ${sectorId}`);
      loadedSectors.add(sectorId);
      console.log(sectorId, 'sectorId');
      console.log(getSectorsApi, 'WTF IS THAT');

      const data = await getSectorsApi(sectorId);

      if (data?.services && data?.keywords) {
        sectorDataCache[sectorId] = data;
        console.log(`✅ Secteur ${sectorId} chargé:`, {
          services: data.services.length,
          keywords: data.keywords.length,
        });
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

    console.log(`Collecte des tokens pour la section ${section.id}:`, formAnswers);

    for (const field of section.fields) {
      if (field.visibleSection) continue; // Skip les champs de contrôle de section

      const value = formAnswers[field.id];
      if (!value) continue;

      console.log(`Traitement du champ ${field.id}:`, { type: field.type, value });

      if (field.type === 'checkbox' && field.multiple && Array.isArray(value)) {
        value.forEach((v) => addTokenWithLabel(tokens, v, field.options));
      } else if ((field.type === 'radio' || field.type === 'select') && value) {
        addTokenWithLabel(tokens, value, field.options);
      }
    }

    console.log(`Tokens collectés pour ${section.id}:`, Array.from(tokens));
    return tokens;
  };

  /**
   * Mappe les tokens aux UUIDs des services et keywords
   */
  const mapTokensToUuids = (
    tokens: Set<string>,
    sectorData: SectorData
  ): { serviceUuids: string[]; keywordUuids: string[] } => {
    console.log('Mapping des tokens:', Array.from(tokens));
    console.log('Données secteur disponibles:', sectorData);

    // Créer des maps de recherche
    const serviceMap = new Map<string, string>();
    const keywordMap = new Map<string, string>();

    sectorData.services.forEach((service) => {
      const normalizedName = normalizeText(service.name);
      serviceMap.set(normalizedName, service.uuid);
      console.log(`Service mappé: "${service.name}" -> "${normalizedName}" -> ${service.uuid}`);
    });

    sectorData.keywords.forEach((keyword) => {
      const normalizedName = normalizeText(keyword.name);
      keywordMap.set(normalizedName, keyword.uuid);
      console.log(`Keyword mappé: "${keyword.name}" -> "${normalizedName}" -> ${keyword.uuid}`);
    });

    // Mapper les tokens
    const serviceUuids: string[] = [];
    const keywordUuids: string[] = [];

    tokens.forEach((token) => {
      const serviceUuid = serviceMap.get(token);
      const keywordUuid = keywordMap.get(token);

      if (serviceUuid) {
        serviceUuids.push(serviceUuid);
        console.log(`✅ Token "${token}" -> Service UUID: ${serviceUuid}`);
      }

      if (keywordUuid) {
        keywordUuids.push(keywordUuid);
        console.log(`✅ Token "${token}" -> Keyword UUID: ${keywordUuid}`);
      }

      if (!serviceUuid && !keywordUuid) {
        console.log(`❌ Token "${token}" non mappé`);
      }
    });

    // Dédoublonner
    const uniqueServiceUuids = Array.from(new Set(serviceUuids));
    const uniqueKeywordUuids = Array.from(new Set(keywordUuids));

    // Si aucun service trouvé mais un seul service disponible, l'utiliser
    if (uniqueServiceUuids.length === 0 && sectorData.services.length === 1) {
      uniqueServiceUuids.push(sectorData.services[0].uuid);
      console.log(`🔄 Utilisation du service unique par défaut: ${sectorData.services[0].uuid}`);
    }

    console.log('Résultat du mapping:', {
      serviceUuids: uniqueServiceUuids,
      keywordUuids: uniqueKeywordUuids,
    });

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
    console.log('🏗️ Construction des sélections de services...');
    console.log(
      'Sections à traiter:',
      sections.map((s) => s.id)
    );
    console.log('Réponses du formulaire:', formAnswers);

    const selections: ServiceSelection[] = [];

    for (const section of sections) {
      console.log(`\n--- Traitement de la section: ${section.id} ---`);

      const sectorData = sectorDataCache[section.id];
      if (!sectorData) {
        console.warn(`⚠️ Données secteur manquantes pour ${section.id}`);
        console.log('Cache disponible:', Object.keys(sectorDataCache));
        continue;
      }

      // Collecter tous les tokens sélectionnés dans cette section
      const selectedTokens = collectSelectedTokens(section, formAnswers);
      if (selectedTokens.size === 0) {
        console.log(`Aucun token sélectionné pour la section ${section.id}`);
        continue;
      }

      // Mapper les tokens aux UUIDs
      const { serviceUuids, keywordUuids } = mapTokensToUuids(selectedTokens, sectorData);

      // Créer les sélections de services
      if (keywordUuids.length > 0 && serviceUuids.length > 0) {
        serviceUuids.forEach((serviceUuid) => {
          const selection = { serviceUuid, keywordsUuid: keywordUuids };
          selections.push(selection);
          console.log(`✅ Sélection créée:`, selection);
        });
      } else {
        console.warn(`❌ Impossible de créer une sélection pour ${section.id}:`, {
          serviceUuids: serviceUuids.length,
          keywordUuids: keywordUuids.length,
        });
      }
    }

    console.log('\n🎯 Sélections finales:', selections);
    return selections;
  };

  return {
    sectorDataCache,
    loadedSectors,
    loadSectorData,
    buildServiceSelections,
  };
};
