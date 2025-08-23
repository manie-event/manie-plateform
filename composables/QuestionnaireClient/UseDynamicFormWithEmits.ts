import type {
  EventCreatePayload,
  SectionSchema,
} from '~/models/questionnaire/QuestionnaireClientModel';
import { useDynamicForm } from './UseDynamicForm';

interface UseDynamicFormWithEmitsProps {
  sections: SectionSchema[];
  modelValue?: Record<string, any>;
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
  console.log(getSectorsApi, 'getSectorsApi ?');

  const formLogic = useDynamicForm(props);

  /**
   * Handler de soumission avec émission
   */
  const handleSubmit = async (): Promise<void> => {
    console.log(getSectorsApi, 'getSectorsApi ?');

    const payload = await formLogic.submitForm(getSectorsApi);
    console.log(payload, 'payload ?');

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
