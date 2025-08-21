import type { EventCreatePayload } from '~/models/questionnaire/QuestionnaireClientModel';

export const useEvent = () => {
  const config = useRuntimeConfig();
  const token = useCookie('token');

  const createEvent = async (newEvent: EventCreatePayload) => {
    const { data } = await axios.patch(`${config.public.apiUrl}/event/create`, newEvent, {
      headers: {
        Authorization: `Bearer ${token.value}`,
        'Content-Type': 'application/json',
      },
    });
    if (data) {
    }
  };
};
