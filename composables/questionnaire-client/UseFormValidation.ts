import { isValueEmpty } from '@/utils/form-utils';
import { reactive, ref } from 'vue';
import type {
  FieldErrors,
  FieldSchema,
  FormState,
  SectionSchema,
} from '~/models/questionnaire/QuestionnaireClientModel';

export function useFormValidation() {
  const fieldErrors = reactive<FieldErrors>({});
  const pageErrors = ref<string[]>([]);

  /**
   * Valide une page du formulaire
   */
  const validatePage = (
    sections: SectionSchema[],
    formState: FormState,
    isFieldVisible: (field: FieldSchema, section: SectionSchema) => boolean
  ): boolean => {
    const errors: string[] = [];

    // Réinitialiser les erreurs
    Object.keys(fieldErrors).forEach((key) => {
      fieldErrors[key] = undefined;
    });

    const test = sections.forEach((section) => {
      section.fields.forEach((field) => {
        // Skip les champs de contrôle de section et les champs non visibles
        if (field.visibleSection || !isFieldVisible(field, section)) {
          return;
        }

        if (field.required) {
          const value = formState[field.id];

          if (isValueEmpty(field, value)) {
            const errorMessage = 'Champ requis';
            fieldErrors[field.id] = errorMessage;
            errors.push(field.label);
          } else {
            console.log(`✅ Champ ${field.id} valide`);
          }
        }
      });
    });

    console.log(test, 'SU PUTA MADRE ?');

    pageErrors.value = errors;

    return errors.length === 0;
  };

  /**
   * Efface l'erreur d'un champ spécifique
   */
  const clearFieldError = (fieldId: string): void => {
    fieldErrors[fieldId] = undefined;
  };

  /**
   * Efface toutes les erreurs de page
   */
  const clearPageErrors = (): void => {
    pageErrors.value = [];
  };

  return {
    fieldErrors,
    pageErrors,
    validatePage,
    clearFieldError,
    clearPageErrors,
  };
}
