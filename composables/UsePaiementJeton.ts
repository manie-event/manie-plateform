import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

export const usePaiementJeton = () => {
  const token = useCookie('token');
  const router = useRouter();
  const route = useRoute();
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const { professionalUser } = storeToRefs(userStore);
  loadStripe(config.public.tokenStripe);

  const createTokenSession = async (amount: number) => {
    console.log(amount, 'amount');
    try {
      const { data } = await axios.post(
        `https://manie-api.onrender.com/payments/token/${professionalUser.value?.uuid}`,
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
      if (data) {
        router.push(data.url);
      }
    } catch (error) {
      console.error('Error creating token session:', error);
      throw error;
    }
  };
  return {
    createTokenSession,
  };
};
