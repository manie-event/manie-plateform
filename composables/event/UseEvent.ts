import { useEventService } from '~/services/UseEventService';

export const UseEvent = () => {
  const { createEventService, updateEventFormuleService } = useEventService();

  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const { addSuccess, addError } = useToaster();

  const submitEvent = async (payload: any) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await createEventService(payload);

      if (response.data) {
        addSuccess('Événement créé avec succès.');
        return response.data;
      }
    } catch (err: any) {
      addError({ message: "Une erreur est survenue lors de la création de l'événement." });
      const message = err?.message ?? 'Une erreur est survenue.';
      error.value = message;
    } finally {
      isLoading.value = false;
    }
  };

  const changeEventFormule = async (formule: string, uuid: string) => {
    isLoading.value = true;
    error.value = null;

    try {
      const formuleEvent = await updateEventFormuleService(formule, uuid);
      if (formuleEvent) {
        addSuccess("Formule d'accompagnement de l'événement mise à jour avec succès.");
        return formuleEvent;
      }
    } catch (error: any) {
      addError({
        message: "Une erreur est survenue lors de la mise à jour de la formule d'accompagnement.",
      });
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    error,
    submitEvent,
    changeEventFormule,
  };
};
