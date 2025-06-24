import type { AuthentificationModel } from '~/models/authentification/authentificationModel';
import type { errorModel } from '~/models/errorModel';
import type { RegisterModel } from '../models/authentification/registerModel';

export const useAuthentification = () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const { addError } = useErrorToaster();

  const sendRegister = async (registerInfo: RegisterModel): Promise<void> => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/auth/register`, registerInfo);
      return data;
    } catch (error: unknown) {
      addError(error as errorModel);
    }
  };

  const sendLogin = async (authentification: AuthentificationModel) => {
    try {
      const { data } = await axios.post(`${config.public.apiUrl}/auth/login`, authentification);
      console.log('Login response:', data); // Pour débugger

      const tokenValue = data?.token?.token || data?.token;

      if (tokenValue) {
        const token = useCookie('token', {
          maxAge: 60 * 60 * 24 * 30, // 30 jours
          path: '/',
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production', // Secure uniquement en production
          httpOnly: false, // False pour pouvoir accéder côté client
        });

        token.value = tokenValue;
        console.log('Token stored successfully');
        return data;
      } else {
        throw new Error('Token non reçu du serveur');
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      addError(error as errorModel);

      // Propager l'erreur pour que le composant appelant puisse la gérer
      throw error;
    }
  };

  const checkEmail = async (token: string) => {
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/auth/verify-email/${token}`);
      if (data) {
        return data;
      }
    } catch (error: unknown) {
      console.error('Error in checkEmail:', error);
      addError(error as errorModel);
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
        await router.push('/');
      }
    } catch (error: unknown) {
      addError(error as errorModel);
    }
  };

  return { sendRegister, sendLogin, sendLogout, checkEmail };
};
