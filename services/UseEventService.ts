import { eventsStore } from '@/stores/events';
import { eventsMapper } from '~/mappers/eventsMapper';
import type { eventModelDto } from '~/models/dto/eventDto';
import type { QuestionnaireClient } from '~/models/questionnaire/QuestionnaireClientModel';

export const useEventService = () => {
  const { addError, addSuccess } = useToaster();

  const eventStore = eventsStore();
  const config = useRuntimeConfig();
  const token = useCookie('token');
  const { clientProfile } = storeToRefs(useUserStore());
  const { setEventsByOrganisator, setQuestionnaireAnswers } = eventStore;

  const createEventService = async (payload: QuestionnaireClient) => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/event/create`, payload, {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        addSuccess(
          "Votre souhait d'évènement a été envoyé avec succès, nous vous mettons en relation avec des partenaires"
        );
        if (clientProfile.value) {
          getEventsPerOrganisator();
        }
        return data;
      }
    } catch (error: unknown) {
      addError({ message: "Une erreur est survenue lors de l'envoi du message." });
    }
  };

  const getEventsPerOrganisator = async () => {
    const page = ref(1);
    const allEvents = [];
    const uuid = localStorage.getItem('client-uuid');

    while (true) {
      const { data } = await axios.get(
        `${config.public.apiUrl}/event/list-by-organisator/${uuid}`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (!data.data.length) {
        break;
      }

      const { mapDtoToEvent } = eventsMapper();

      const events = data.data.map((event: eventModelDto) => mapDtoToEvent(event));

      // Ajouter les événements de cette page au tableau total
      allEvents.push(...events);

      // Passer à la page suivante
      page.value++;
      setEventsByOrganisator(events);

      return allEvents ?? [];
    }
  };

  const getEventsInstance = async (eventUuid: string) => {
    const { data } = await axios.get(`${config.public.apiUrl}/event/${eventUuid}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
        'Content-Type': 'application/json',
      },
    });
    if (data) {
      const responseInstance = { ...data, isAlreadyCreated: true };
      setQuestionnaireAnswers(responseInstance);
      return responseInstance;
    }
  };

  /**
   * Crée un service d'événement existant
   * POST /event-service/create
   */
  const createEventServiceItem = async (payload: {
    serviceUuid: string;
    eventUuid: string;
    keywordsUuid: string[];
  }) => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/event-service/create`, payload, {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (error) {
      addError({ message: "Impossible d'ajouter le service à l'événement." });
      throw error;
    }
  };

  const getEventServiceList = async (uuid: string) => {
    try {
      const { data } = await axios.get(
        `${config.public.apiUrl}/event-service/list-by-event/${uuid}`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return data.data;
    } catch (error) {
      addError({ message: "Impossible d'ajouter le service à l'événement." });
      throw error;
    }
  };

  const updateEventFormuleService = async (formule: string, uuid: string) => {
    try {
      const { data } = await axios.patch(
        `${config.public.apiUrl}/event/${uuid}/update-formule`,
        { formule },
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return data.data;
    } catch (error) {
      addError({ message: "Impossible d'ajouter le service à l'événement." });
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
    // addServicesToEvent,
  };
};
