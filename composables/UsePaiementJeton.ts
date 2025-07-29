import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

export const usePaiementJeton = () => {
  const token = useCookie('token');
  const router = useRouter();
  const route = useRoute();
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const { professionalUser } = storeToRefs(userStore);
  const loading = ref(false);
  const messageError = ref('');
  const paymentVerified = ref(false);
  const paymentData = ref();
  loadStripe(config.public.tokenStripe);

  const createTokenSession = async (amount: number) => {
    console.log(amount, 'amount');
    try {
      const { data } = await axios.post(
        `${config.public.apiUrl}/payments/token/${professionalUser.value?.uuid}`,
        {
          quantity: amount,
          professional_uuid: professionalUser.value?.uuid,
        },
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (data && data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error creating token session:', error);
      throw error;
    }
  };

  const verifyPayment = async (session_id: string) => {
    console.log(session_id, 'session_id');

    try {
      loading.value = true;

      // Appel à votre API pour vérifier le paiement
      const { data } = await axios.get(
        `${config.public.apiUrl}/payments/session-status/${session_id}`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (data.success) {
        console.log(data);
        paymentVerified.value = true;
        paymentData.value = data.session;
        console.log(paymentData.value, 'paymentData');
      } else {
        messageError.value = data.error || 'Échec de la vérification';
      }
    } catch (error) {
      console.error('Erreur lors de la vérification:', error);
      messageError.value = 'Erreur de communication avec le serveur';
    } finally {
      loading.value = false;
    }
  };

  return {
    createTokenSession,
    verifyPayment,
    loading,
    messageError,
    paymentVerified,
    paymentData,
  };
};
