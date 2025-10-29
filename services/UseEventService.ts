import { eventsStore } from '@/stores/events';
import { eventsMapper } from '~/mappers/eventsMapper';
import type { eventModelDto } from '~/models/dto/eventDto';
import type { QuestionnaireClient } from '~/models/questionnaire/QuestionnaireClientModel';

export const useEventService = () => {
  const { addError, addSuccess } = useToaster();
  const api = useApi(); // ✅ instance sécurisée avec refresh
  const eventStore = eventsStore();
  const { clientProfile } = storeToRefs(useUserStore());
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
    } catch (error) {
      console.error(error);
      addError({ message: "Une erreur est survenue lors de la création de l'événement." });
    }
  };

  const getEventsPerOrganisator = async () => {
    try {
      if (!api) return;

      const uuid = localStorage.getItem('client-uuid');
      const { mapDtoToEvent } = eventsMapper();

      const allEvents: any[] = [];
      let page = 1;
      const limit = 10; // même limite que ton back
      let hasMore = true;

      while (hasMore) {
        const { data } = await api.get(
          `/event/list-by-organisator/${uuid}?page=${page}&limit=${limit}`
        );

        // Vérifie que data existe et que c’est bien un tableau
        if (!data || !Array.isArray(data.data)) break;

        const events = data.data.map((e: eventModelDto) => mapDtoToEvent(e));
        allEvents.push(...events);
        setEventsByOrganisator(allEvents);

        // Récupération sécurisée de la pagination
        const current = data?.meta?.current_page ?? page;
        const last = data?.meta?.last_page ?? page;

        if (current >= last) {
          hasMore = false; // 🚫 Stop la boucle
        } else {
          page++;
        }
      }

      return allEvents;
    } catch (error) {
      console.error('❌ Erreur dans getEventsPerOrganisator:', error);
      addError({ message: 'Erreur lors de la récupération des événements.' });
    }
  };

  const getEventsInstance = async (eventUuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(`/event/${eventUuid}`);
      const responseInstance = { ...data, isAlreadyCreated: true };
      setQuestionnaireAnswers(responseInstance);
      return responseInstance;
    } catch (error) {
      console.error(error);
      addError({ message: 'Erreur lors de la récupération de l’événement.' });
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
    } catch (error) {
      addError({ message: "Impossible d'ajouter le service à l'événement." });
      throw error;
    }
  };

  const getEventServiceList = async (uuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(`/event-service/list-by-event/${uuid}`);
      return data.data;
    } catch (error) {
      addError({ message: "Erreur lors de la récupération des services de l'événement." });
      throw error;
    }
  };

  const updateEventFormuleService = async (formule: string, uuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.patch(`/event/${uuid}/update-formule`, { formule });
      return data.data;
    } catch (error) {
      addError({ message: "Erreur lors de la mise à jour de la formule de l'événement." });
      throw error;
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
