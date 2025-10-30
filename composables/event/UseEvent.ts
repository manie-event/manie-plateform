import { useEventService } from '~/services/UseEventService';

export const UseEvent = () => {
  const { createEventService, updateEventFormuleService } = useEventService();

  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const submitEvent = async (payload: any) => {
    isLoading.value = true;
    error.value = null;

    try {
      return await createEventService(payload);
    } catch (err: any) {
      const message = err?.message ?? 'Une erreur est survenue.';
      error.value = message;
    } finally {
      isLoading.value = false;
    }
  };

  const changeEventFormule = async (formule: string, uuid: string) => {
    isLoading.value = true;
    error.value = null;
    console.log(formule, 'FORM');

    try {
      const formuleEvent = await updateEventFormuleService(formule, uuid);
      if (formuleEvent) {
        return formuleEvent;
      }
    } catch (error: any) {
      const message = error?.message ?? 'Une erreur est survenue.';
      error.value = message;
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
