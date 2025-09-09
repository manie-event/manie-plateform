import { eventsStore } from '@/stores/events';
import { eventsMapper } from '~/mappers/eventsMapper';
import type { eventModelDto } from '~/models/dto/eventDto';
import type {
  EventCreatePayload,
  ServiceSelection,
} from '~/models/questionnaire/QuestionnaireClientModel';
import { eventsStore } from '~/stores/eventsStore';

export const useEventService = () => {
  const { addError, addSuccess } = useToaster();

  const eventStore = eventsStore();
  const config = useRuntimeConfig();
  const token = useCookie('token');
  const { clientProfile } = storeToRefs(useUserStore());
  const { setEventsByOrganisator, setQuestionnaireAnswers } = eventStore;

  const createEventService = async (payload: EventCreatePayload) => {
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
    const clientUuid = localStorage.getItem('client-uuid');

    const { data } = await axios.get(
      `${config.public.apiUrl}/event/list-by-organisator/${clientUuid}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      }
    );
    if (data) {
      const { mapDtoToEvent } = eventsMapper();
      const eventsWithoutEmptyServices = data.data.filter((event: eventModelDto) => {
        return (
          event.eventServices &&
          event.eventServices.length > 0 &&
          event.eventServices[0].serviceUuid
        );
      });

      const events = eventsWithoutEmptyServices.map((event: eventModelDto) => mapDtoToEvent(event));

      setEventsByOrganisator(events);
      return data;
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
      setQuestionnaireAnswers(data);
      return data;
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

  /**
   * Ajoute plusieurs services à un événement à partir des sélections du questionnaire
   */
  const addServicesToEvent = async (eventUuid: string, selections: ServiceSelection[]) => {
    if (!selections || selections.length === 0) return;
    try {
      await Promise.all(
        selections.map((sel) =>
          createEventServiceItem({
            serviceUuid: sel.serviceUuid,
            eventUuid,
            keywordsUuid: sel.keywordsUuid,
          })
        )
      );
      addSuccess('Les services ont été ajoutés à votre évènement.');
      await getEventsInstance(eventUuid);
    } catch {
      // les erreurs sont déjà gérées dans createEventServiceItem
    }
  };

  return {
    createEventService,
    getEventsPerOrganisator,
    getEventsInstance,
    createEventServiceItem,
    addServicesToEvent,
  };
};
