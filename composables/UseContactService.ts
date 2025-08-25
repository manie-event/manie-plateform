import type { ContactMessage } from '~/models/contact/contactMessage';
const { addError, addSuccess } = useToaster();

export const useContactService = () => {
  const config = useRuntimeConfig();
  const token = useCookie('token');

  const sendContactForm = async (contactData: ContactMessage) => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/contact`, contactData, {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      });
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
