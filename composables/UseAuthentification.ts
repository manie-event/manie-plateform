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
      if (data?.token?.token) {
        const token = useCookie('token', {
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
          sameSite: 'strict',
          secure: true,
        });
        token.value = data.token;
        return data;
      }
    } catch (error: unknown) {
      addError(error as errorModel);
    }
  };

  const checkEmail = async (token: string) => {
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/auth/verify-email/${token}`);
      if (data) {
        return data;
      }
    } catch (error: unknown) {
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
