import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import type { ProfessionalProfile } from '../../models/user/UserModel';

export const usePaiementJeton = () => {
  const token = useCookie('token');
  const route = useRoute();
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const { professionalUser } = storeToRefs(userStore);
  const cartStore = useCartStore();
  const { creditTokensAfterPayment } = cartStore;
  loadStripe(config.public.tokenStripe);

  const createTokenSession = async (amount: number) => {
    const currentProfile = professionalUser.value;
    const currentJetonQuantity = amount;

    localStorage.setItem('professional-uuid', currentProfile?.uuid?.replace(/[""]/g, '') || '');
    localStorage.setItem('token-session', token.value || '');
    if (!currentProfile?.uuid) {
      console.error('❌ No professional profile found');
      return;
    }

    try {
      localStorage.setItem('jeton-quantity', JSON.stringify(currentJetonQuantity));
      // === APPEL API STRIPE ===
      const { data } = await axios.post(
        `${config.public.apiUrl}/payments/token/${currentProfile.uuid}`,
        {
          quantity: amount,
          professional_uuid: currentProfile.uuid,
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
        return data;
      }
    } catch (error: any) {
      throw error;
    }
  };

  const createJeton = async (quantity: number, professionnalUuid: string) => {
    try {
      const { data } = await axios.post(
        `${config.public.apiUrl}/credit/create`,
        {
          quantity: quantity,
          professionalUuid: professionnalUuid,
        },
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (data) {
        localStorage.removeItem('jeton-quantity');
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const restoreAfterStripe = async (ProfessionalProfile: ProfessionalProfile) => {
    const urlParams = new URLSearchParams(window.location.search);
    const isStripeReturn =
      urlParams.has('session_id') || urlParams.has('payment_intent') || route.query.success;

    if (isStripeReturn) {
      const purchasedTokens = localStorage.getItem('jeton-quantity');
      try {
        if (purchasedTokens) {
          const tokensToPurchase = JSON.parse(purchasedTokens);

          creditTokensAfterPayment(tokensToPurchase);
          if (ProfessionalProfile.uuid) {
            await createJeton(tokensToPurchase, ProfessionalProfile.uuid);
          }
        }
      } catch (e) {
        console.warn('LocalStorage restore failed:', e);
      }
      console.error('❌ All restore attempts failed');
    } else {
      console.log('✅ Profile déjà présent, aucun besoin restock ');
    }
  };
  return {
    createTokenSession,
    restoreAfterStripe,
  };
};
