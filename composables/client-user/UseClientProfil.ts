import type { AxiosError } from 'axios';
import { storeToRefs } from 'pinia';
import type { ClientModel } from '~/models/user/ClientModel';
import { useUserStore } from '~/stores/userStore';
import { useToaster } from '~/utils/toaster';
import { useApi } from '../UseApi';

export const useClientProfil = () => {
  const { addError, addSuccess } = useToaster();
  const token = useCookie('token');
  const userStore = useUserStore();
  const { setClientProfile } = userStore;
  const { clientProfile, isProfileCreated } = storeToRefs(userStore);
  const config = useRuntimeConfig();
  const api = useApi();

  const getClientProfil = async () => {
    const response = await api?.get(`${config.public.apiUrl}/organisator`);

    if (response) {
      setClientProfile(response.data);
      return response.data;
    }
  };

  const patchClientProfil = async (newProfil: ClientModel) => {
    const clientUuid = clientProfile.value?.uuid;

    try {
      const response = await api?.patch(
        `${config.public.apiUrl}/organisator/${clientUuid}`,
        newProfil
      );

      if (response?.data) {
        const profileUpdated = await getClientProfil();

        setClientProfile(profileUpdated);
        isProfileCreated.value = true;

        addSuccess('Profil mis à jour avec succès.');
        return response?.data ?? true;
      }
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  return {
    getClientProfil,
    patchClientProfil,
  };
};
