import type {
  FieldErrors,
  FieldSchema,
  FormState,
  SectionSchema,
} from '@/models/questionnaire/QuestionnaireClient';
import { isValueEmpty } from '@/utils/form.utils';
import { reactive, ref } from 'vue';

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
    console.log('🔍 Validation de la page...');

    const errors: string[] = [];

    // Réinitialiser les erreurs
    Object.keys(fieldErrors).forEach((key) => {
      fieldErrors[key] = undefined;
    });

    sections.forEach((section) => {
      console.log(`Validation de la section: ${section.id}`);

      section.fields.forEach((field) => {
        // Skip les champs de contrôle de section et les champs non visibles
        if (field.visibleSection || !isFieldVisible(field, section)) {
          return;
        }

        if (field.required) {
          const value = formState[field.id];
          console.log(`Validation du champ requis ${field.id}:`, value);

          if (isValueEmpty(field, value)) {
            const errorMessage = 'Champ requis';
            fieldErrors[field.id] = errorMessage;
            errors.push(field.label);
            console.log(`❌ Erreur sur ${field.id}: ${errorMessage}`);
          } else {
            console.log(`✅ Champ ${field.id} valide`);
          }
        }
      });
    });

    pageErrors.value = errors;

    console.log('Résultat de la validation:', {
      isValid: errors.length === 0,
      errors: errors.length,
    });

    return errors.length === 0;
  };

  /**
   * Efface l'erreur d'un champ spécifique
   */
  const clearFieldError = (fieldId: string): void => {
    console.log(`Effacement de l'erreur pour le champ: ${fieldId}`);
    fieldErrors[fieldId] = undefined;
  };

  /**
   * Efface toutes les erreurs de page
   */
  const clearPageErrors = (): void => {
    console.log('Effacement de toutes les erreurs de page');
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
