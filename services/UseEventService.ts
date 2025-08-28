import { mapDtoToEvent } from '~/mappers/eventsMapper';
import type { eventModelDto } from '~/models/dto/eventModel';
import type { EventCreatePayload } from '~/models/questionnaire/QuestionnaireClientModel';

export const useEventService = () => {
  const { addError, addSuccess } = useToaster();

  const eventStore = eventsStore();
  const config = useRuntimeConfig();
  const token = useCookie('token');
  const { clientProfile } = storeToRefs(useUserStore());
  const { setEventsByOrganisator, setQuestionnaireAnswers } = eventStore;
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
      const events = data.data.map((event: eventModelDto) => mapDtoToEvent(event));
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

  return {
    createEventService,
    getEventsPerOrganisator,
    getEventsInstance,
  };
};
