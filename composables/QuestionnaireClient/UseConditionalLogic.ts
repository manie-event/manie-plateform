import type {
  FieldSchema,
  FormState,
  OptionItem,
  SectionSchema,
} from '@/models/questionnaire/QuestionnaireClient';

export function useConditionalLogic(formState: FormState) {
  /**
   * Récupère la valeur d'un champ de contrôle
   */
  const getControlValue = (controlId?: string): any => {
    if (!controlId) return undefined;
    const value = formState[controlId];
    return value;
  };

  /**
   * Vérifie si un tableau contient au moins une des valeurs spécifiées
   */
  const includesAny = (source: any[], values: any[]): boolean => {
    if (!Array.isArray(source) || !Array.isArray(values)) return false;
    return values.some((v) => source.includes(v));
  };

  /**
   * Résout l'identifiant du champ contrôleur d'une section
   */
  const resolveControllerFieldId = (section: SectionSchema): string => {
    const explicit = section.fields.find((f) => f.visibleSection)?.id;
    if (explicit) return explicit;

    // Chercher un champ checkbox non-multiple référencé par showIf
    const referencedIds = new Set<string>();
    for (const field of section.fields) {
      const cond = field.conditional;
      if (!cond?.showIf) continue;
      const controls = Array.isArray(cond.showIf) ? cond.showIf : [cond.showIf];
      controls.forEach((cid) => referencedIds.add(cid));
    }

    const referencedCheckbox = section.fields.find(
      (f) => f.type === 'checkbox' && !f.multiple && referencedIds.has(f.id)
    )?.id;
    if (referencedCheckbox) return referencedCheckbox;

    // Heuristique: *_deja_trouve
    const dejaTrouve = section.fields.find(
      (f) => f.type === 'checkbox' && !f.multiple && /deja|trouve/i.test(f.id)
    )?.id;
    if (dejaTrouve) return dejaTrouve;

    // Fallback: contrôleur virtuel
    return `__section_${section.id}_toggle`;
  };

  /**
   * Détermine si une section est ignorée (skip toggle activé)
   */
  const isSectionSkipped = (section: SectionSchema): boolean => {
    const skipField = section.fields.find((f) => f.visibleSection);
    if (!skipField) return false;
    const isSkipped = !!formState[skipField.id];
    return isSkipped;
  };

  /**
   * Détermine si un champ doit être visible selon sa logique conditionnelle
   */
  const isFieldVisible = (field: FieldSchema, section: SectionSchema): boolean => {
    // Si la section est ignorée, masquer tous les champs non-contrôleurs
    if (!field.visibleSection && isSectionSkipped(section)) {
      return false;
    }

    const cond = field.conditional;
    if (!cond) {
      return true;
    }

    // Logique hideIf - masquer si les conditions sont remplies
    if (Array.isArray(cond.hideIf) && cond.hideIf.length > 0) {
      const shouldHide = cond.hideIf.some((controlId) => {
        const val = getControlValue(controlId);
        const hide = Array.isArray(val) ? val.length > 0 : !!val;
        return hide;
      });

      if (shouldHide) {
        return false;
      }
    }

    // Logique showIf - montrer seulement si les conditions sont remplies
    if (cond.showIf) {
      const controls = Array.isArray(cond.showIf) ? cond.showIf : [cond.showIf];

      if (cond.values !== undefined) {
        const shouldShow = controls.some((controlId) => {
          const controlVal = getControlValue(controlId);
          const requiredVals = Array.isArray(cond.values) ? cond.values : [cond.values];

          let matches = false;
          if (Array.isArray(controlVal)) {
            matches = includesAny(controlVal, requiredVals);
          } else {
            matches = requiredVals.includes(controlVal);
          }

          return matches;
        });

        return shouldShow;
      }

      const shouldShow = controls.some((controlId) => {
        const hasValue = !!getControlValue(controlId);
        return hasValue;
      });

      return shouldShow;
    }

    return true;
  };

  /**
   * Récupère les options dynamiques pour un champ basé sur ses dépendances
   */
  const getDynamicOptions = (field: FieldSchema): OptionItem[] | undefined => {
    const cond = field.conditional;

    if (
      cond?.dependsOn &&
      cond?.values &&
      typeof cond.values === 'object' &&
      !Array.isArray(cond.values)
    ) {
      const depVal = getControlValue(cond.dependsOn);
      const mapping = cond.values as Record<string, OptionItem[]>;
      const options = mapping[depVal as string] || [];

      return options;
    }

    return field.options;
  };

  return {
    isFieldVisible,
    getDynamicOptions,
    isSectionSkipped,
    getControlValue,
    resolveControllerFieldId,
  };
}
