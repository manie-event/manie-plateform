import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

export const usePaiementJeton = () => {
  const token = useCookie('token');
  const config = useRuntimeConfig();

  const createTokenSession = async (amount: number) => {
    const stripeToken = await loadStripe(config.public.tokenStripe);
    console.log(config.public.tokenStripe, 'config.public.tokenStripe Token');
    console.log(stripeToken, 'Stripe Token');
    console.log(token.value, 'token.value Token');

    try {
      const response = await axios.post(
        `https://manie-api.onrender.com/payments/token/${token.value}`,
        {
          amount,
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
