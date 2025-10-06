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
        window.location.href = data.url;
        return data;
      }

      throw new Error('URL de paiement non reçue');
    } catch (err: any) {
      console.error('Erreur création session Stripe:', err);
      throw new Error(err.response?.data?.message || 'Erreur lors de la création du paiement');
    }
  };

  /**
   * Vérifie le statut d'une session Stripe côté backend
   */
  const verifyStripeSession = async (sessionId: string) => {
    try {
      const { data } = await axios.get(
        `${config.public.apiUrl}/payments/verify-session/${sessionId}`,
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

  /**
   * Crée les jetons après validation du paiement
   */
  const createJeton = async (quantity: number, professionalUuid: string, sessionId: string) => {
    try {
      const { data } = await axios.post(
        `${config.public.apiUrl}/credit/create`,
        {
          quantity,
          professionalUuid,
          stripeSessionId: sessionId, // Important : permet d'éviter les doublons
        },
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return data;
    } catch (err: any) {
      console.error('Erreur création jetons:', err);
      throw new Error(err.response?.data?.message || 'Erreur lors de la création des jetons');
    }
  };

  /**
   * Process le retour de Stripe après paiement
   * À appeler sur la page de succès uniquement
   */
  const processStripeReturn = async (
    sessionId: string,
    professionalProfile: ProfessionalProfile
  ) => {
    // Évite le double traitement
    if (isProcessing.value) {
      console.log('⏳ Traitement déjà en cours...');
      return { success: false, message: 'Traitement en cours' };
    }

    isProcessing.value = true;
    error.value = null;

    try {
      // 1. Vérifier la session Stripe côté serveur
      console.log('🔍 Vérification du paiement...');
      const sessionData = await verifyStripeSession(sessionId);

      if (sessionData.payment_status !== 'paid') {
        throw new Error("Le paiement n'a pas été complété");
      }

      // 2. Récupérer la quantité depuis les metadata de la session
      const quantity = sessionData.metadata?.quantity || sessionData.amount_total / 100;

      if (!professionalProfile.uuid) {
        throw new Error('Profil professionnel introuvable');
      }

      // 3. Créer les jetons
      console.log('✨ Création des jetons...');
      const jetonData = await createJeton(Number(quantity), professionalProfile.uuid, sessionId);

      // 4. Mettre à jour le store local
      creditTokensAfterPayment(Number(quantity));

      console.log('✅ Paiement traité avec succès');

      return {
        success: true,
        quantity,
        sessionData,
        jetonData,
      };
    } catch (err: any) {
      console.error('❌ Erreur traitement paiement:', err);
      error.value = err.message || 'Une erreur est survenue';

      return {
        success: false,
        message: error.value,
      };
    } finally {
      isProcessing.value = false;
    }
  };

  return {
    createTokenSession,
    processStripeReturn,
    verifyStripeSession,
    isProcessing: readonly(isProcessing),
    error: readonly(error),
  };
};
