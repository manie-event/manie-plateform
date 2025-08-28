import { eventsMapper } from '~/mappers/eventsMapper';
import type { eventModelDto } from '~/models/dto/eventModel';
import type { EventCreatePayload, ServiceSelection } from '~/models/questionnaire/QuestionnaireClientModel';

export const useEventService = () => {
  const { addError, addSuccess } = useToaster();

  const config = useRuntimeConfig();
  const token = useCookie('token');
  const { clientProfile } = storeToRefs(useUserStore());
  const { setEventsByOrganisator, setQuestionnaireAnswers } = eventsStore();
  const clientUuid = localStorage.getItem('client-uuid');

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
      console.log(data, 'DATA FFROM getEventsPerOrganisator');
      const events = data.map((event: eventModelDto) => mapDtoToEvent(event));
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
