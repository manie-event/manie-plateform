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
    const currentProfile = professionalUser.value;

    if (!currentProfile?.uuid) {
      console.error('❌ No professional profile found');
      return;
    }

    console.log('💾 Saving profile before Stripe redirect:', currentProfile);

    try {
      // === SAUVEGARDES MULTIPLES AVANT STRIPE ===

      // 1. SessionStorage (survit aux redirections dans la même session)
      sessionStorage.setItem('pre-stripe-professional', JSON.stringify(currentProfile));
      sessionStorage.setItem('stripe-redirect-time', Date.now().toString());

      // 2. LocalStorage backup
      localStorage.setItem('backup-professional', JSON.stringify(currentProfile));
      localStorage.setItem('original-professional', JSON.stringify(currentProfile));

      console.log('✅ All backups created successfully');

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
        // === AVANT LA REDIRECTION ===

        // Dernière vérification que les données sont bien sauvées
        const verification = sessionStorage.getItem('pre-stripe-professional');
        if (!verification) {
          console.error('❌ Backup failed, aborting redirect');
          return;
        }

        console.log('🔄 Redirecting to Stripe:', data.url);

        // Redirection vers Stripe
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('❌ Error creating token session:', error);
      throw error;
    }
  };

  const restoreAfterStripe = () => {
    console.log('🔍 Checking for profile restoration after Stripe...');

    // Vérifier si on revient de Stripe
    const urlParams = new URLSearchParams(window.location.search);
    const isStripeReturn =
      urlParams.has('session_id') || urlParams.has('payment_intent') || route.query.success;

    if (isStripeReturn) {
      console.log('✅ Stripe return detected, restoring profile...');

      // 1. Vérifier si le profil actuel est vide
      if (!professionalUser.value?.uuid) {
        console.log('⚠️ Current profile is empty, attempting restore...');

        // 2. Essayer sessionStorage en premier
        const sessionBackup = sessionStorage.getItem('pre-stripe-professional');
        if (sessionBackup) {
          try {
            const restored = JSON.parse(sessionBackup);
            if (restored.uuid) {
              console.log('🔄 Restoring from sessionStorage');
              userStore.setProfessionalUser(restored);
              return restored;
            }
          } catch (e) {
            console.warn('SessionStorage restore failed:', e);
          }
        }

        // 4. Essayer localStorage backup
        const localBackup = localStorage.getItem('backup-professional');
        if (localBackup) {
          try {
            const restored = JSON.parse(localBackup);
            if (restored.uuid) {
              console.log('🔄 Restoring from localStorage backup');
              userStore.setProfessionalUser(restored);
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
