import { PRICE_PER_TOKEN } from '~/constants/prixeToken';

export const usePaiementJeton = () => {
  const route = useRoute();
  const userStore = useUserStore();
  const { professionalUser } = storeToRefs(userStore);
  const cartStore = useCartStore();
  const { initializeTokenBalance } = cartStore;

  const api = useApi(); // ✅ instance sécurisée
  const isProcessing = ref(false);
  const error = ref<string | null>(null);

  /**
   * Crée une session de paiement Stripe
   */
  const createTokenSession = async (amount: number) => {
    const currentProfile = professionalUser.value;
    if (!currentProfile?.uuid) throw new Error('Profil professionnel non trouvé');

    try {
      if (!api) return;

      const { data } = await api.post(`/payments/token/${currentProfile.uuid}`, {
        quantity: amount,
        professional_uuid: currentProfile.uuid,
      });

      if (data?.url) {
        window.location.href = data.url; // 🔁 redirection Stripe
        return data;
      }

      throw new Error('URL de paiement non reçue');
    } catch (err: any) {
      console.error('Erreur création session Stripe:', err);
      throw new Error(err.response?.data?.message || 'Erreur lors de la création du paiement');
    }
  };

  /**
   * Récupère le nombre actuel de jetons du professionnel
   */
  const getJetonQuantity = async () => {
    const currentProfile = professionalUser.value;
    if (!currentProfile?.uuid) throw new Error('Profil professionnel non trouvé');

    try {
      if (!api) return;
      const { data } = await api.get(`/credit/${currentProfile.uuid}`);
      return data.quantity;
    } catch (err) {
      console.error('Erreur récupération crédits:', err);
      throw new Error('Impossible de récupérer le solde de jetons.');
    }
  };

  /**
   * Vérifie le statut d'une session Stripe côté backend
   */
  const verifyStripeSession = async (sessionId: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(`/payments/session-status/${sessionId}`);
      console.log('[verifyStripeSession]', data);
      return data;
    } catch (err: any) {
      console.error('Erreur vérification session:', err);
      throw new Error('Impossible de vérifier le paiement');
    }
  };

  /**
   * Traite le retour de Stripe après paiement
   */
  const processStripeReturn = async (sessionId: string) => {
    if (isProcessing.value) return { success: false, message: 'Traitement en cours...' };
    isProcessing.value = true;

    try {
      const response = await verifyStripeSession(sessionId);
      const sessionData = response.session;

      if (sessionData.payment_status !== 'paid') {
        throw new Error("Le paiement n'a pas été complété");
      }

      const amountInEuros = sessionData.amount_total / 100; // convertit centimes → €
      const quantity = Math.floor(amountInEuros / PRICE_PER_TOKEN);

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
