import type { ContactMessage } from '~/models/contact/contactMessage';
const { addError, addSuccess } = useToaster();

export const useContactService = () => {
  const config = useRuntimeConfig();
  const token = useCookie('token');

  const api = useApi();

  const sendContactForm = async (contactData: ContactMessage) => {
    try {
      if (!api) return;

      const { data } = await api.post(`${config.public.apiUrl}/contact`, contactData);
      if (data) {
        addSuccess('Votre message a été envoyé avec succès.');
        return data;
      }
    } catch (error: unknown) {
      addError({ message: "Une erreur est survenue lors de l'envoi du message." });
    }
  };

  return {
    sendContactForm,
  };
};
