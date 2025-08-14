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
    console.log(`Valeur du contrôle ${controlId}:`, value);
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
   * Détermine si une section est ignorée (skip toggle activé)
   */
  const isSectionSkipped = (section: SectionSchema): boolean => {
    const skipField = section.fields.find((f) => f.visibleSection);
    const toggleFieldId = skipField ? skipField.id : `__section_${section.id}_toggle`;

    const isSkipped = !!formState[toggleFieldId];
    console.log(`Section ${section.id} ignorée:`, isSkipped);
    return isSkipped;
  };

  /**
   * Détermine si un champ doit être visible selon sa logique conditionnelle
   */
  const isFieldVisible = (field: FieldSchema, section: SectionSchema): boolean => {
    // Si la section est ignorée, masquer tous les champs non-contrôleurs
    if (!field.visibleSection && isSectionSkipped(section)) {
      console.log(`Champ ${field.id} masqué: section ignorée`);
      return false;
    }

    const cond = field.conditional;
    if (!cond) {
      console.log(`Champ ${field.id} visible: pas de condition`);
      return true;
    }

    // Si dependsOn est présent et values est un mapping (options dynamiques),
    // rendre visible si la source a une valeur (même si la valeur ne matche pas encore un mapping)
    if (cond.dependsOn && cond.values && typeof cond.values === 'object' && !Array.isArray(cond.values)) {
      const controlVal = getControlValue(cond.dependsOn);
      const visible = Array.isArray(controlVal) ? controlVal.length > 0 : !!controlVal;
      console.log(`Visibility via dependsOn pour ${field.id}: ${visible}`, { controlVal });
      if (!cond.showIf && !cond.hideIf) {
        return visible;
      }
    }

    console.log(`Évaluation des conditions pour ${field.id}:`, cond);

    // Logique hideIf - masquer si les conditions sont remplies
    if (Array.isArray(cond.hideIf) && cond.hideIf.length > 0) {
      const shouldHide = cond.hideIf.some((controlId) => {
        const val = getControlValue(controlId);
        const hide = Array.isArray(val) ? val.length > 0 : !!val;
        console.log(`HideIf ${controlId}: ${hide}`);
        return hide;
      });

      if (shouldHide) {
        console.log(`Champ ${field.id} masqué par hideIf`);
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

          console.log(`ShowIf ${controlId}: ${matches}`, { controlVal, requiredVals });
          return matches;
        });

        console.log(
          `Champ ${field.id} ${shouldShow ? 'visible' : 'masqué'} par showIf avec valeurs`
        );
        return shouldShow;
      }

      const shouldShow = controls.some((controlId) => {
        const hasValue = !!getControlValue(controlId);
        console.log(`ShowIf ${controlId}: ${hasValue}`);
        return hasValue;
      });

      console.log(`Champ ${field.id} ${shouldShow ? 'visible' : 'masqué'} par showIf`);
      return shouldShow;
    }

    console.log(`Champ ${field.id} visible par défaut`);
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

      console.log(`Options dynamiques pour ${field.id}:`, {
        dependsOn: cond.dependsOn,
        depVal,
        optionsCount: options.length,
      });

      return options;
    }

    console.log(`Options statiques pour ${field.id}:`, field.options?.length || 0);
    return field.options;
  };

  return {
    isFieldVisible,
    getDynamicOptions,
    isSectionSkipped,
    getControlValue,
  };
}
