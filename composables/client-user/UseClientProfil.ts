import axios from 'axios';
import type { ClientModel } from '~/models/user/ClientModel';

export const useClientProfil = () => {
  const { addError, addSuccess } = useToaster();
  const token = useCookie('token');
  const userStore = useUserStore();
  const { setClientProfile, updateClientProfile } = userStore;
  const { clientProfile, isProfileCreated } = storeToRefs(userStore);
  const config = useRuntimeConfig();

  const getClientProfil = async () => {
    const { data } = await axios.get(`${config.public.apiUrl}/organisator`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
        'Content-Type': 'application/json',
      },
    });
    if (data) {
      setClientProfile(data);
      return data;
    }
  };

  const patchClientProfil = async (newProfil: ClientModel) => {
    const clientUuid = clientProfile.value?.uuid;

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
      const profileUpdated = await getClientProfil();

      updateClientProfile(profileUpdated);
      isProfileCreated.value = true;
      return data;
    }
  };
  return {
    getClientProfil,
    patchClientProfil,
  };
};
