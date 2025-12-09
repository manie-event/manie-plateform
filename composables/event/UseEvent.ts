import type { AxiosError } from 'axios';
import type { eventModel } from '~/models/events/eventModel';
import { useEventService } from '~/services/UseEventService';
import { useApi } from '../UseApi';

export const UseEvent = () => {
  const { createEventService, updateEventFormuleService } = useEventService();

  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const { addSuccess, addError } = useToaster();
  const api = useApi();

  const submitEvent = async (payload: any) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await createEventService(payload);

      if (response.data) {
        addSuccess('Événement créé avec succès.');
        return response.data;
      }
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    } finally {
      isLoading.value = false;
    }
  };

  const updateEvent = async (eventUuid: string, payload: eventModel) => {
    console.log(eventUuid, 'eventUuid dans updateEvent');
    console.log(payload, 'payload dans updateEvent');

    try {
      if (!api) return;
      const { data } = await api.patch(`/event/update/${eventUuid}`, payload);

      return data;
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    error,
    submitEvent,
    changeEventFormule,
    updateEvent,
  };
};
