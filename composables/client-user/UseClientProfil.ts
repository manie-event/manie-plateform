import axios from 'axios';
import type { ClientModel } from '~/models/user/ClientModel';

export const useClientProfil = () => {
  const { addError, addSuccess } = useToaster();
  const token = useCookie('token');
  const userStore = useUserStore();
  const { setClientProfile, setUpdateProfile } = userStore;
  const config = useRuntimeConfig();
  const clientUuid = localStorage.getItem('client-uuid');

  const getClientProfil = async () => {
    const { data } = await axios.get(`${config.public.apiUrl}/organisator`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
        'Content-Type': 'application/json',
      },
    });
    if (data) {
      setClientProfile(data);
      localStorage.setItem('client-uuid', data.uuid);
      return data;
    }
  };

  const patchClientProfil = async (newProfil: ClientModel) => {
    const { data } = await axios.patch(
      `${config.public.apiUrl}/organisator/${clientUuid}`,
      newProfil,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      }
    );
    if (data) {
      setUpdateProfile(true);
      return data;
    }
  };
  return {
    getClientProfil,
    patchClientProfil,
  };
};
