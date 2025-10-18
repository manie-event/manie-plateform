import axios from 'axios'; // Pour les routes sans auth
import type { AuthentificationModel } from '~/models/authentification/authentificationModel';
import type { registerNewPasswordModel } from '~/models/authentification/registerNewPasswordModel';
import type { errorModel } from '~/models/errorModel';
import type { RegisterModel } from '../models/authentification/registerModel';

export const useAuthentification = () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const { addError, addSuccess } = useToaster();
  const userStore = useUserStore();
  const { isStoringUserAccepeted } = storeToRefs(userStore);
  const { token, refreshToken } = useAuthCookies();
  const { setUser } = userStore;
  const isProfessional = localStorage.getItem('is-professional');

  const api = useApi();

  const sendRegister = async (registerInfo: RegisterModel): Promise<void> => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/auth/register`, registerInfo);
      if (data) {
        addSuccess(
          'Inscription réussie, veuillez vérifier votre email pour confirmer votre compte.'
        );
        await router.push('/auth/login');
        return data;
      }
    } catch (error: unknown) {
      addError({ message: 'Veuillez vérifier que le SIRET soit valide.' });
    }
  };

  const sendLogin = async (authentification: AuthentificationModel) => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/auth/login`, authentification);

      const tokenValue = data?.token?.token;

      addSuccess('Connexion réussie.');

      if (tokenValue) {
        refreshToken.value = data.refreshToken;
        token.value = tokenValue;
        setUser(data.user);

        console.log(isProfessional, 'isProfessional- isProfessional');

        if (data.user.category === 'client') {
          router.push({ path: '/dashboards/dashboard-client' });
        } else {
          router.push({ path: '/dashboards/dashboard2' });
        }
      } else {
        throw new Error('Token non reçu du serveur');
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      addError(error as errorModel);
      throw error;
    }
  };

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

  const registerNewPassword = async (registerPassword: registerNewPasswordModel) => {
    try {
      if (!api) return;

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

  const sendLogout = async () => {
    try {
      if (!api) return;

      const { data } = await api.post('/auth/logout');

      if (data) {
        token.value = null;
        refreshToken.value = null;
        localStorage.clear();
        await router.push('/');
        addSuccess('Déconnexion réussie.');
      }
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
