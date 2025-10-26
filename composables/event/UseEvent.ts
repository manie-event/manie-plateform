import { useEventService } from '~/services/UseEventService';

export const UseEvent = () => {
  const { createEventService } = useEventService();

  const isModalOpen = ref(false);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const submitEvent = async (payload: any) => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await createEventService(payload);
      if (result) {
        isModalOpen.value = true;
      }
    } catch (err: any) {
      const message = err?.message ?? 'Une erreur est survenue.';
      error.value = message;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isModalOpen,
    isLoading,
    error,
    submitEvent,
  };
};
