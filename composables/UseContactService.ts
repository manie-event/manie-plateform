import type { AxiosError } from 'axios';
import type { ContactMessage } from '~/models/contact/contactMessage';
const { addError, addSuccess } = useToaster();

export const useContactService = () => {
  const config = useRuntimeConfig();
  const token = useCookie('token');
  const route = useRouter();

  const api = useApi();

  const sendContactForm = async (contactData: ContactMessage) => {
    try {
      if (!api) return;

      const { data } = await api.post(`${config.public.apiUrl}/contact`, contactData);
      if (data) {
        addSuccess('Votre message a été envoyé avec succès.');
        route.push('/');
        return data;
      }
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  return {
    sendContactForm,
  };
};
