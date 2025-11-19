import { eventsStore } from '@/stores/events';
import type { AxiosError } from 'axios';
import { eventsMapper } from '~/mappers/eventsMapper';
import type { eventModelDto } from '~/models/dto/eventDto';
import type { QuestionnaireClient } from '~/models/questionnaire/QuestionnaireClientModel';

export const useEventService = () => {
  const { addError, addSuccess } = useToaster();
  const api = useApi();
  const eventStore = eventsStore();
  const { clientProfile, clientUuid } = storeToRefs(useUserStore());
  const { setEventsByOrganisator, setQuestionnaireAnswers } = eventStore;

  const createEventService = async (payload: QuestionnaireClient) => {
    try {
      if (!api) return;

      const { data } = await api.post('/event/create', payload);

      addSuccess(
        "Votre souhait d'évènement a été envoyé avec succès, nous vous mettons en relation avec des partenaires."
      );

      if (clientProfile.value) await getEventsPerOrganisator();
      return data;
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const getEventsPerOrganisator = async () => {
    try {
      if (!api) return;

      const { mapDtoToEvent } = eventsMapper();
      const allEvents: any[] = [];
      let page = 1;
      const limit = 10;
      let hasMore = true;

      while (hasMore) {
        const { data } = await api.get(
          `/event/list-by-organisator/${clientUuid.value}?page=${page}&limit=${limit}`
        );

        // Sécurité : on vérifie la structure
        if (!data || !Array.isArray(data.data)) break;

        const events = data.data.map((e: eventModelDto) => mapDtoToEvent(e));
        allEvents.push(...events);
        setEventsByOrganisator(allEvents);

        const current = data?.meta?.current_page ?? page;
        const last = data?.meta?.last_page ?? page;

        hasMore = current < last;
        page++;
      }

      return allEvents;
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const getEventsInstance = async (eventUuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(`/event/${eventUuid}`);
      const responseInstance = { ...data, isAlreadyCreated: true };
      setQuestionnaireAnswers(responseInstance);
      return responseInstance;
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const createEventServiceItem = async (payload: {
    serviceUuid: string;
    eventUuid: string;
    keywordsUuid: string[];
  }) => {
    try {
      if (!api) return;
      const { data } = await api.post('/event-service/create', payload);
      return data;
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const getEventServiceList = async (uuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(`/event-service/list-by-event/${uuid}`);
      return data.data;
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const updateEventFormuleService = async (formule: string, uuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.patch(`/event/${uuid}/update-formule`, { formule });
      return data.data;
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  return {
    createEventService,
    getEventsPerOrganisator,
    getEventsInstance,
    getEventServiceList,
    createEventServiceItem,
    updateEventFormuleService,
  };
};
