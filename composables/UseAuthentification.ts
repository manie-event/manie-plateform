// useAuthentification.ts
import axios from 'axios'; // routes publiques (sans auth)
import type { AuthentificationModel } from '~/models/authentification/authentificationModel';
import type { RegisterModel } from '~/models/authentification/registerModel';
import type { registerNewPasswordModel } from '~/models/authentification/registerNewPasswordModel';
import type { errorModel } from '~/models/errorModel';
import { useEventService } from '~/services/UseEventService';
import { useProfessionalService } from '~/services/UseProfessionalService';
import { useClientProfil } from './client-user/UseClientProfil';
import { useEventServiceProposition } from './event-service-propositions/UseEventServiceProposition';
import { usePaiementJeton } from './professional-user/UsePaiementJeton';
import { useProfessionalProfile } from './professional-user/UseProfessionalProfile';

export const useAuthentification = () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const { addError, addSuccess } = useToaster();
  const userStore = useUserStore();
  const { setUser } = userStore;
  const { getProfessionalProfile, getProfessionalProfileDetails } = useProfessionalProfile();
  const { getClientProfil } = useClientProfil();
  const { getServicePropositionForProfessional } = useEventServiceProposition();
  const { getEventsPerOrganisator } = useEventService();
  const { getAllSectors, getKeywords } = useKeywordsStore();
  const { getProfessionalService } = useProfessionalService();
  const { getJetonQuantity } = usePaiementJeton();
  const { token } = useAuthCookies(); // access token (15 min)
  const { refreshToken } = useRefreshToken(); // refresh token (7 jours)

  // Instance Axios authentifiée (interceptors + refresh)
  const api = useApi();

  // --- REGISTER --------------------------------------------------------------
  const sendRegister = async (registerInfo: RegisterModel): Promise<void> => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/auth/register`, registerInfo);

      if (data) {
        addSuccess(
          'Inscription réussie, veuillez vérifier votre email pour confirmer votre compte.'
        );
        await router.push('/auth/login');
      }
    } catch (error: unknown) {
      addError(error as errorModel);
    }
  };

  // --- LOGIN ----------------------------------------------------------------
  const sendLogin = async (authentification: AuthentificationModel) => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/auth/login`, authentification);

      const tokenValue: string | undefined = data?.token?.token;
      const newRefresh: string | undefined = data?.refreshToken;
      const user = data?.user;

      if (!tokenValue || !newRefresh || !user) {
        throw new Error('Réponse de login invalide (token/refresh/user manquant).');
      }

      // Persist tokens avant navigation
      refreshToken.value = newRefresh;
      token.value = tokenValue;

      // Enregistre l’utilisateur dans le store
      setUser(user);

      addSuccess('Connexion réussie.');
      localStorage.setItem('isConnected', 'true');
      // Redirection par rôle
      if (user.category === 'consumer') {
        await router.push({ path: '/dashboards/dashboard-client' });
      } else {
        (router.push({ path: '/dashboards/dashboard2' }),
          await getProfessionalProfile(),
          await getServicePropositionForProfessional(),
          await getJetonQuantity());
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      addError(error as errorModel);
      throw error;
    }
  };

  // --- VERIFY EMAIL ----------------------------------------------------------
  const checkEmail = async (emailToken: string) => {
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/auth/verify-email/${emailToken}`);
      if (data) {
        addSuccess('Email vérifié avec succès, vous pouvez maintenant vous connecter.');
        return data;
      }
    } catch (error: unknown) {
      console.error('Error in checkEmail:', error);
      addError(error as errorModel);
    }
  };

  // --- FORGOT PASSWORD -------------------------------------------------------
  const sendNewPassword = async (email: string) => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/auth/forgot-password`, { email });
      if (data) {
        addSuccess('Un email de réinitialisation de mot de passe a été envoyé.');
        await router.push('/auth/login');
        return data;
      }
    } catch (error) {
      addError(error as errorModel);
    }
  };

  // --- RESET PASSWORD (AUTH) -------------------------------------------------
  const registerNewPassword = async (registerPassword: registerNewPasswordModel) => {
    try {
      if (!api) return; // garde-fou si l’instance n’est pas prête (théoriquement jamais ici)

      const { data } = await api.post('/auth/reset-password', registerPassword);
      if (data) {
        addSuccess('Mot de passe mis à jour avec succès.');
        await router.push('/auth/login');
        return data;
      }
    } catch (error: unknown) {
      console.error('Error in registerNewPassword:', error);
      addError(error as errorModel);
      throw error;
    }
  };

  // --- LOGOUT (AUTH) ---------------------------------------------------------
  const sendLogout = async () => {
    try {
      if (!api) return;

      // même si l’API échoue, on nettoie local (don’t lock the user out)
      try {
        await api.post('/auth/logout');
      } catch (e) {
        if (process.dev) console.warn('[auth] logout backend failed, cleaning local anyway.', e);
      }

      token.value = null;
      refreshToken.value = null;

      const keysToRemove = [
        'username',
        'is-professional',
        'pp-created',
        'pro-name',
        'client-name',
        'client-uuid',
        'professional-uuid',
        'notesByEvent',
        'tasksByEvent',
        'isConnected',
      ];
      keysToRemove.forEach((key) => localStorage.removeItem(key));
      userStore.resetUserStore();

      await router.push('/');
      addSuccess('Déconnexion réussie.');
    } catch (error: unknown) {
      addError(error as errorModel);
    }
  };

  return {
    sendRegister,
    sendLogin,
    sendLogout,
    checkEmail,
    sendNewPassword,
    registerNewPassword,
  };
};
