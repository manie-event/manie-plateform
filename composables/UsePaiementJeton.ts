import type { AxiosError } from 'axios';
import { PRICE_PER_TOKEN } from '~/constants/prixToken';
import { useProfessionalProfileService } from '../services/UseProfessionalProfileService';

export const usePaiementJeton = () => {
  const route = useRoute();
  const profilStore = useProfilStore();
  const { professionalUser, professionalUuid } = storeToRefs(profilStore);
  const cartStore = useCartStore();
  const { getProfessionalProfile } = useProfessionalProfileService();
  const { initializeTokenBalance, setJetonQuantity } = cartStore;
  const { addSuccess, addError } = useToaster();
  const api = useApi();
  const isProcessing = ref(false);
  const error = ref<string | null>(null);

  /**
   * Crée une session de paiement Stripe
   */
  const createTokenSession = async (amount: number) => {
    if (!professionalUuid.value) throw new Error('Profil professionnel non trouvé');

    try {
      if (!api) return;

      const { data } = await api.post(`/payments/token/${professionalUuid.value}`, {
        quantity: amount,
        professional_uuid: professionalUuid.value,
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
      setJetonQuantity(data.quantity);
      return data.quantity;
    } catch (err: any) {
      console.error(err.response.data.message);
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
      return data;
    } catch (err: any) {
      console.error(err.response.data.message);
      throw new Error('Impossible de vérifier le paiement');
    }
  };

  /**
   * Traite le retour de Stripe après paiement
   */
  const processStripeReturn = async (sessionId: string) => {
    if (isProcessing.value) return { success: false, message: 'Traitement en cours...' };
    isProcessing.value = true;
    await getProfessionalProfile();
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

      addSuccess('Paiement réussi ! Votre solde de jetons a été mis à jour.');
      return { success: true, quantity, sessionData };
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
