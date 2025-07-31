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
        // Redirection vers Stripe
        window.location.href = data.url;
      }
    } catch (error) {
      throw error;
    }
  };

  const restoreAfterStripe = async () => {
    console.log('🔍 Checking for profile restoration after Stripe...');

    // Vérifier si on revient de Stripe
    const urlParams = new URLSearchParams(window.location.search);
    const isStripeReturn =
      urlParams.has('session_id') || urlParams.has('payment_intent') || route.query.success;

    if (isStripeReturn) {
      // 4. Essayer localStorage backup
      const localBackup = localStorage.getItem('userStore-professional');
      const purchasedTokens = localStorage.getItem('jeton-quantity');
      if (localBackup) {
        try {
          const restored = JSON.parse(localBackup);
          if (purchasedTokens) {
            const tokensToPurchase = JSON.parse(purchasedTokens);
            console.log('💰 Créditer', tokensToPurchase, 'jetons achetés');

            // ✅ Créditer directement sans passer par le panier
            userTokenBalance.value += tokensToPurchase;
            console.log(cartStore.userTokenBalance, 'cartStore.userTokenBalance');
            console.log(professionalUser.value.uuid, 'professionalUser.value.uuid');
          }
          if (restored.uuid) {
            userStore.setProfessionalUser(restored);
            await nextTick();

            await createJeton(userTokenBalance.value, restored.uuid);

            return restored;
          }
        } catch (e) {
          console.warn('LocalStorage restore failed:', e);
        }
      }

      console.error('❌ All restore attempts failed');
    } else {
      console.log('✅ Profile already present, no restore needed');
    }
  };

  const createJeton = async (quantity: number, professionnalUuid: string) => {
    console.log(token.value, 'TOKEN VALUE');

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
        localStorage.removeItem('jeton-balance');
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
