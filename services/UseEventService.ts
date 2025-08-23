import type { AxiosError } from 'axios';
import type { EventCreatePayload } from '~/models/questionnaire/QuestionnaireClientModel';

export const useEventService = () => {
  const { addError, addSuccess } = useToaster();

  const config = useRuntimeConfig();
  const token = useCookie('token');

  const createEventService = async (payload: EventCreatePayload) => {
    console.log(payload, 'payload depuis createEventService');

    try {
      const { data } = await axios.post(`${config.public.apiUrl}/event/create`, payload, {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        console.log(data, 'data depuis createEventService');

        addSuccess(
          "Votre souhait d'évènement a été envoyé avec succès, nous vous mettons en relation avec des partenaires"
        );
        return data;
      }
    } catch (error: AxiosError) {
      console.error('Erreur complète:', error);
      console.error('Response data:', error.response?.data);
      console.error('Status:', error.response?.status);
      console.error('Headers:', error.response?.headers);
      addError({ message: "Une erreur est survenue lors de l'envoi du message." });
    }
  };
  return {
    createEventService,
  };
};
