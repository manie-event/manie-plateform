import type { EventCreatePayload, SectionSchema } from '@/models/questionnaire/QuestionnaireClient';
import { useDynamicForm } from './UseDynamicForm';

interface UseDynamicFormWithEmitsProps {
  sections: SectionSchema[];
  modelValue?: Record<string, any>;
  organisatorUuid: string;
}

interface FormEmits {
  (e: 'update:modelValue', payload: Record<string, any>): void;
  (e: 'submit', payload: EventCreatePayload): void;
}

export function useDynamicFormWithEmits(
  props: UseDynamicFormWithEmitsProps,
  emit: FormEmits,
  getSectorsApi: Function
) {
  const formLogic = useDynamicForm(props);

  /**
   * Handler de soumission avec émission
   */
  const handleSubmit = async (): Promise<void> => {
    const payload = await formLogic.submitForm(getSectorsApi);

    if (payload) {
      // Émettre la mise à jour du modèle
      emit('update:modelValue', formLogic.formState);

      // Émettre la soumission
      emit('submit', payload);
    }
  };

  /**
   * Handler pour les contrôleurs de section avec l'API
   */
  const handleSectionControllerChange = async (
    section: SectionSchema,
    value: boolean
  ): Promise<void> => {
    await formLogic.setSectionControllerValue(section, value, getSectorsApi);
  };

  return {
    ...formLogic,
    handleSubmit,
    handleSectionControllerChange,
  };
}
