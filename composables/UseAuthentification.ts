// useAuthentification.ts
import axios, { AxiosError } from 'axios'; // routes publiques (sans auth)
import type { AuthentificationModel } from '~/models/authentification/authentificationModel';
import type { RegisterModel } from '~/models/authentification/registerModel';
import type { registerNewPasswordModel } from '~/models/authentification/registerNewPasswordModel';
import { useEventService } from '~/services/UseEventService';
import { useClientProfil } from './client-user/UseClientProfil';
import { useEventServiceProposition } from './event-service-propositions/UseEventServiceProposition';
import { useProfessionalProfile } from './professional-user/UseProfessionalProfile';

export const useAuthentification = () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const { addError, addSuccess } = useToaster();
  const userStore = useUserStore();
  const { setUser } = userStore;
  const { isProfessional } = storeToRefs(userStore);
  const { getProfessionalProfile, getProfessionalProfileDetails } = useProfessionalProfile();
  const { getClientProfil } = useClientProfil();
  const { getServicePropositionForProfessional } = useEventServiceProposition();
  const { getEventsPerOrganisator } = useEventService();

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
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
      // Redirection par rôle
      if (user.category === 'consumer') {
        await Promise.all([await getClientProfil(), await getEventsPerOrganisator()]);

        await router.push({ path: '/dashboards/dashboard-client' });
        isProfessional.value = false;
      } else {
        await router.push({ path: '/dashboards/dashboard2' });
        await getProfessionalProfile();
        await getProfessionalProfileDetails();
        await getServicePropositionForProfessional();
      }
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  // --- RESET PASSWORD (AUTH) -------------------------------------------------
  const registerNewPassword = async (registerPassword: registerNewPasswordModel) => {
    try {
      if (!api) return;

      const { data } = await api.post('/auth/reset-password', registerPassword);
      if (data) {
        addSuccess('Mot de passe mis à jour avec succès.');
        await router.push('/auth/login');
        return data;
      }
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
      ];
      keysToRemove.forEach((key) => localStorage.removeItem(key));
      userStore.resetUserStore();

      await router.push('/');
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
