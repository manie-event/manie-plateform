import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

export const usePaiementJeton = () => {
  const token = useCookie('token');
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const { professionalUser } = storeToRefs(userStore);

  const createTokenSession = async (amount: number) => {
    const stripeToken = await loadStripe(config.public.tokenStripe);

    try {
      const response = await axios.post(
        `https://manie-api.onrender.com/payments/token/${token.value}`,
        {
          amount,
          professional_uuid: professionalUser.value?.uuid,
        },
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response;
    } catch (error) {
      console.error('Error creating token session:', error);
      throw error;
    }
  };
  return {
    createTokenSession,
  };
};
