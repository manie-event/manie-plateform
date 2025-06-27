import type { AuthentificationModel } from '~/models/authentification/authentificationModel';
import type { registerNewPasswordModel } from '~/models/authentification/registerNewPasswordModel';
import type { errorModel } from '~/models/errorModel';
import type { RegisterModel } from '../models/authentification/registerModel';

export const useAuthentification = () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const { addError, addSuccess } = useToaster();

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
      addError(error as errorModel);
    }
  };

  const sendLogin = async (authentification: AuthentificationModel) => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/auth/login`, authentification);

      const tokenValue = data?.token?.token;

      if (tokenValue) {
        const token = useCookie('token', {
          maxAge: 60 * 60 * 24 * 30, // 30 jours
          path: '/',
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
          httpOnly: false,
        });

        token.value = tokenValue;
        return data;
      } else {
        throw new Error('Token non reçu du serveur');
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      addError(error as errorModel);
      throw error;
    }
  };

  const checkEmail = async (token: string) => {
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/auth/verify-email/${token}`);
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
      const { data } = await axios.post(
        `${config.public.apiUrl}/auth/register-new-password`,
        registerPassword
      );
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
      const token = useCookie('token');
      const { data } = await axios.post(`${config.public.apiUrl}/auth/logout`, null, {
        headers: {
          Authorization: `Bearer  ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        addSuccess('Déconnexion réussie.');
        await router.push('/');
      }
    } catch (error: unknown) {
      addError(error as errorModel);
    }
  };

  return { sendRegister, sendLogin, sendLogout, checkEmail, sendNewPassword, registerNewPassword };
};
