import type { EventCreatePayload } from '~/models/questionnaire/QuestionnaireClientModel';

export const useEventService = () => {
  const { addError, addSuccess } = useToaster();

  const config = useRuntimeConfig();
  const token = useCookie('token');

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
        return data;
      }
    } catch (error: unknown) {
      addError({ message: "Une erreur est survenue lors de l'envoi du message." });
    }
  };
  return {
    createEventService,
  };
};
