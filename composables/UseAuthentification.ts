import type { AuthentificationModel } from '~/models/authentification/authentificationModel';
import type { patchNewPasswordModel } from '../models/authentification/patchNewPasswordModel';
import type { RegisterModel } from '../models/authentification/registerModel';

export const useAuthentification = () => {
  const config = useRuntimeConfig();
  const router = useRouter();

  const sendRegister = async (registerInfo: RegisterModel) => {
    console.log(registerInfo, 'username');
    try {
      const response = await axios.post(`${config.public.apiUrl}/auth/register`, registerInfo);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendLogin = async (authentification: AuthentificationModel) => {
    console.log(authentification, 'authentification');

    try {
      const response = await axios.post(`${config.public.apiUrl}/auth/login`, authentification);
      if (response.data.token.token) {
        const token = useCookie('token', {
          maxAge: 60 * 60 * 24,
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

  const sendNewPassword = async (resetObject: patchNewPasswordModel) => {
    try {
      const response = await axios.patch(`${config.public.apiUrl}/auth/resetPassword`, resetObject);
      if (response.data.token.token) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendLogout = async () => {
    try {
      const token = useCookie('token');
      await axios.post(`${config.public.apiUrl}/auth/logout`, null, {
        headers: {
          Authorization: `Bearer  ${token}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { sendRegister, sendLogin, sendNewPassword, sendLogout };
};
