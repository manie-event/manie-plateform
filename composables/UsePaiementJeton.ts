import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

export const usePaiementJeton = () => {
  const token = useCookie('token');
  const router = useRouter();
  const route = useRoute();
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const { professionalUser } = storeToRefs(userStore);
  const cartStore = useCartStore();
  const { userTokenBalance } = storeToRefs(cartStore);
  const { creditTokensAfterPayment } = cartStore;
  loadStripe(config.public.tokenStripe);

  const createTokenSession = async (amount: number) => {
    const currentProfile = professionalUser.value;
    const currentJetonQuantity = amount;

    if (!currentProfile?.uuid) {
      console.error('❌ No professional profile found');
      return;
    }

    try {
      localStorage.setItem('userStore-professional', JSON.stringify(currentProfile));
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
      }
    } catch (error) {
      throw error;
    }
  };

  const restoreAfterStripe = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const isStripeReturn =
      urlParams.has('session_id') || urlParams.has('payment_intent') || route.query.success;

    if (isStripeReturn) {
      const localBackup = localStorage.getItem('userStore-professional');
      const purchasedTokens = localStorage.getItem('jeton-quantity');
      if (localBackup) {
        try {
          const restored = JSON.parse(localBackup);
          if (purchasedTokens) {
            const tokensToPurchase = JSON.parse(purchasedTokens);

            creditTokensAfterPayment(tokensToPurchase);
            if (restored.uuid) {
              userStore.setProfessionalUser(restored);

              await createJeton(tokensToPurchase, restored.uuid);

              return restored;
            }
          }
        } catch (e) {
          console.warn('LocalStorage restore failed:', e);
        }
      }

      console.error('❌ All restore attempts failed');
    } else {
      console.log('✅ Profile déjà présent, aucun besoin restock ');
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
        localStorage.removeItem('jeton-balance');
        localStorage.removeItem('jeton-quantity');
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const verifyPayment = async (session_id: string) => {
  //   console.log(session_id, 'session_id');

  //   try {
  //     loading.value = true;

  //     const { data } = await axios.get(
  //       `${config.public.apiUrl}/payments/session-status/${session_id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token.value}`,
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     if (data.success) {
  //       console.log(data);
  //       paymentVerified.value = true;
  //       paymentData.value = data.session;
  //       console.log(paymentData.value, 'paymentData');
  //     } else {
  //       messageError.value = data.error || 'Échec de la vérification';
  //     }
  //   } catch (error) {
  //     console.error('Erreur lors de la vérification:', error);
  //     messageError.value = 'Erreur de communication avec le serveur';
  //   } finally {
  //     loading.value = false;
  //   }
  // };

  return {
    createTokenSession,
    restoreAfterStripe,
  };
};
