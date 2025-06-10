import type { AuthentificationModel } from '~/models/authentification/authentificationModel';
import type { errorModel } from '~/models/errorModel';
import type { RegisterModel } from '../models/authentification/registerModel';

export const useAuthentification = () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const { addError } = useErrorToaster();

  const sendRegister = async (registerInfo: RegisterModel): Promise<void> => {
    try {
      await axios
        .post(`${config.public.apiUrl}/auth/register`, registerInfo)
        .then((res) => {
          return res.data;
        })
        .then(() => {
          router.push('/auth/login');
        });
    } catch (error: unknown) {
      addError(error as errorModel);
    }
  };

  const sendLogin = async (authentification: AuthentificationModel) => {
    try {
      const response = await axios.post(`${config.public.apiUrl}/auth/login`, authentification);
      if (response.data.token.token) {
        const token = useCookie('token', {
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
          sameSite: 'strict',
          secure: true,
        });
        token.value = response.data.token;
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkEmail = async (token: string) => {
    try {
      const response = await axios.get(`${config.public.apiUrl}/auth/verify-email/${token}`);
      if (response.data) {
        console.log('reponse', response.data);
        return response.data;
      }
    } catch (error) {}
  };

  const sendLogout = async () => {
    try {
      const token = useCookie('token');
      const response = await axios.post(`${config.public.apiUrl}/auth/logout`, null, {
        headers: {
          Authorization: `Bearer  ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.data) {
        await router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { sendRegister, sendLogin, sendLogout, checkEmail };
};
