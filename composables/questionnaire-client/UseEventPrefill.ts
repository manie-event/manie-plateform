import { normalizeText } from '@/utils/form-utils';
import { useKeywords } from '~/composables/professional-user/UseKeywords';
import type { eventModel } from '~/models/events/eventModel';
import type { SectionSchema } from '~/models/questionnaire/QuestionnaireClientModel';

type SectorKeywordsIndex = Record<string, string>; // keywordUuid -> keywordValue

interface SectorIndexEntry {
  sectionId: string;
  serviceUuidToName: Record<string, string>;
  keywordsUuidToValue: SectorKeywordsIndex;
}

/**
 * Reconstruit un formState initial à partir d'un évènement déjà créé
 * en utilisant les données secteurs (services/keywords) côté front uniquement.
 */
export const useEventPrefill = () => {
  const { getSectors } = useKeywords();
  const sectorCache = new Map<string, Promise<SectorIndexEntry | null>>();

  const buildSectorIndexForSection = async (
    sectionId: string
  ): Promise<SectorIndexEntry | null> => {
    try {
      if (!sectorCache.has(sectionId)) {
        sectorCache.set(
          sectionId,
          (async () => {
            const data = await getSectors(sectionId);
            if (!data) return null;
            const serviceUuidToName: Record<string, string> = {};
            const keywordsUuidToValue: SectorKeywordsIndex = {};
            (data.services || []).forEach((s: { uuid: string; name: string }) => {
              serviceUuidToName[s.uuid] = s.name;
            });
            (data.keywords || []).forEach((k: { uuid: string; value: string }) => {
              keywordsUuidToValue[k.uuid] = k.value;
            });
            return { sectionId, serviceUuidToName, keywordsUuidToValue };
          })()
        );
      }
      const entry = await sectorCache.get(sectionId)!;
      return entry;
    } catch {
      return null;
    }
  };

  const findSectionForService = async (
    sections: SectionSchema[],
    serviceUuid: string
  ): Promise<{
    sectionId: string | null;
    serviceName: string | null;
    entry: SectorIndexEntry | null;
  }> => {
    for (const section of sections) {
      const entry = await buildSectorIndexForSection(section.id);
      if (!entry) continue;
      const name = entry.serviceUuidToName[serviceUuid];
      if (name) {
        return { sectionId: section.id, serviceName: name, entry };
      }
    }
    return { sectionId: null, serviceName: null, entry: null };
  };

  /**
   * Marqueurs/contrôleurs de section: active la section et le contrôleur virtuel
   */
  const activateSectionControllers = (formState: Record<string, any>, section: SectionSchema) => {
    // Virtuel
    formState[`__section_${section.id}_toggle`] = true;

    // Champs de contrôle (ex: food_deja_trouve, boisson_deja_trouve, ...)
    section.fields.forEach((f) => {
      if (f.type === 'checkbox' && !f.multiple && f.visibleSection === false) {
        formState[f.id] = true;
      }
    });
  };

  /**
   * Pré-remplissage des champs simples (page générale)
   */
  const prefillGeneral = (formState: Record<string, any>, event: eventModel) => {
    formState.date_status = 'arretee';
    formState.date_debut = event.date?.[0] || '';
    formState.date_fin = event.date?.[1] || event.date?.[0] || '';
    formState.localisation = event.location || undefined;
    formState.theme = event.name || undefined;
    formState.nb_personnes = Number(event.people || 0) || undefined;
    formState.budget_type = 'global';
    formState.budget = Number(event.budget || 0) || undefined;
  };

  /**
   * Sélectionne la valeur de champ correspondant au nom de service (si présent)
   */
  const selectServiceTypeField = (
    formState: Record<string, any>,
    section: SectionSchema,
    serviceName: string
  ) => {
    const target = normalizeText(serviceName);
    for (const field of section.fields) {
      if (!field.options || field.options.length === 0) continue;
      const match = field.options.find(
        (opt) => normalizeText(String(opt.value)) === target || normalizeText(opt.label) === target
      );
      if (match) {
        if (field.type === 'checkbox' && field.multiple) {
          formState[field.id] = Array.isArray(formState[field.id])
            ? Array.from(new Set([...formState[field.id], match.value]))
            : [match.value];
        } else {
          formState[field.id] = match.value;
        }
        break;
      }
    }
  };

  /**
   * Coche ou sélectionne les options correspondant aux keywords de l'évènement
   */
  const selectKeywordsForSection = (
    formState: Record<string, any>,
    section: SectionSchema,
    keywordValues: string[]
  ) => {
    const targets = new Set(keywordValues.map((v) => normalizeText(v)));

    for (const field of section.fields) {
      if (!field.options || field.options.length === 0) continue;

      for (const opt of field.options) {
        const isTarget =
          targets.has(normalizeText(String(opt.value))) || targets.has(normalizeText(opt.label));
        if (!isTarget) continue;

        if (field.type === 'checkbox' && field.multiple) {
          const existing = Array.isArray(formState[field.id]) ? formState[field.id] : [];
          formState[field.id] = Array.from(new Set([...existing, opt.value]));
        } else {
          formState[field.id] = opt.value;
        }
      }
    }
  };

  const prefillFormFromEvent = async (
    event: eventModel,
    sections: SectionSchema[]
  ): Promise<{ formState: Record<string, any>; lockedSections: Set<string> }> => {
    const formState: Record<string, any> = {};
    const lockedSections = new Set<string>();

    // 1) Général
    prefillGeneral(formState, event);

    // 2) Parcourir les services de l'évènement et reconstruire par section
    for (const es of event.eventServices || []) {
      const { sectionId, serviceName, entry } = await findSectionForService(
        sections,
        es.serviceUuid
      );
      if (!sectionId) continue;

      const section = sections.find((s) => s.id === sectionId);
      if (!section) continue;

      // Activer la section et le contrôleur virtuel
      activateSectionControllers(formState, section);
      lockedSections.add(section.id);

      // Sélectionner le type/service (si on a un nom)
      if (serviceName) {
        selectServiceTypeField(formState, section, serviceName);
      }

      // Sélectionner les keywords correspondants
      const keywordValues = (es.keywordsUuid || [])
        .map((uuid) => entry.keywordsUuidToValue[uuid])
        .filter(Boolean);

      if (keywordValues.length > 0) {
        selectKeywordsForSection(formState, section, keywordValues as string[]);
      }
    }

    return { formState, lockedSections };
  };

  return { prefillFormFromEvent };
};
