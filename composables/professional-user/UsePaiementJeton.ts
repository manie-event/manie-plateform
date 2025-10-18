import axios from 'axios';
import { PRICE_PER_TOKEN } from '~/constants/prixeToken';

export const usePaiementJeton = () => {
  const token = useCookie('token');
  const route = useRoute();
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const { professionalUser } = storeToRefs(userStore);
  const cartStore = useCartStore();
  const { initializeTokenBalance } = cartStore;

  const isProcessing = ref(false);
  const error = ref<string | null>(null);

  /**
   * Crée une session de paiement Stripe
   */
  const createTokenSession = async (amount: number) => {
    const currentProfile = professionalUser.value;

    if (!currentProfile?.uuid) {
      throw new Error('Profil professionnel non trouvé');
    }

    try {
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

      if (data?.url) {
        // Redirection vers Stripe
        window.location.href = data.url;
        return data;
      }

      throw new Error('URL de paiement non reçue');
    } catch (err: any) {
      console.error('Erreur création session Stripe:', err);
      throw new Error(err.response?.data?.message || 'Erreur lors de la création du paiement');
    }
  };

  const getJetonQuantity = async () => {
    const currentProfile = professionalUser.value;
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/credit/${currentProfile?.uuid}`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      });

      return data.quantity;
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Vérifie le statut d'une session Stripe côté backend
   */
  const verifyStripeSession = async (sessionId: string) => {
    try {
      const { data } = await axios.get(
        `${config.public.apiUrl}/payments/session-status/${sessionId}`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      );
      console.log(data, 'verifyStripeSession');
      return data;
    } catch (err: any) {
      console.error('Erreur vérification session:', err);
      throw new Error('Impossible de vérifier le paiement');
    }
  };
  const processStripeReturn = async (sessionId: string) => {
    if (isProcessing.value) return { success: false, message: 'Traitement en cours' };

    isProcessing.value = true;

    try {
      const response = await verifyStripeSession(sessionId);
      const sessionData = response.session;

      if (sessionData.payment_status !== 'paid') {
        throw new Error("Le paiement n'a pas été complété");
      }

      // Calculer la quantité depuis le montant
      const amountInEuros = sessionData.amount_total / 100; // Convertir centimes en euros
      const quantity = Math.floor(amountInEuros / PRICE_PER_TOKEN); // 36€ / 9€ = 4 jetons

      const currentBalance = await getJetonQuantity();

      initializeTokenBalance(currentBalance);

      return { success: true, quantity, sessionData };
    } catch (err: any) {
      error.value = err.message;
      return { success: false, message: error.value };
    } finally {
      isProcessing.value = false;
    }
  };

  return {
    createTokenSession,
    processStripeReturn,
    verifyStripeSession,
    getJetonQuantity,
    isProcessing: readonly(isProcessing),
    error: readonly(error),
  };
};
