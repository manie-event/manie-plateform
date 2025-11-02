import { storeToRefs } from 'pinia';
import type { ClientModel } from '~/models/user/ClientModel';
import { useUserStore } from '~/stores/userStore';
import { useToaster } from '~/utils/toaster';
import { useApi } from '../UseApi';

export const useClientProfil = () => {
  const { addError, addSuccess } = useToaster();
  const token = useCookie('token');
  const userStore = useUserStore();
  const { setClientProfile, updateClientProfile } = userStore;
  const { clientProfile, isProfileCreated } = storeToRefs(userStore);
  const config = useRuntimeConfig();
  const api = useApi();

  const getClientProfil = async () => {
    console.log('getClientProfil called');

    const response = await api?.get(`${config.public.apiUrl}/organisator`);

    if (response) {
      setClientProfile(response.data);
      return response.data;
    }
  };

  const patchClientProfil = async (newProfil: ClientModel) => {
    const clientUuid = clientProfile.value?.uuid;

    const response = await api?.patch(
      `${config.public.apiUrl}/organisator/${clientUuid}`,
      newProfil
    );

    if (response?.data) {
      const profileUpdated = await getClientProfil();

      updateClientProfile(profileUpdated?.data);
      isProfileCreated.value = true;
      addSuccess('Profil mis à jour avec succès.');
      return response.data;
    } else {
      addError({ message: 'Une erreur est survenue lors de la mise à jour du profil.' });
    }
  };
  return {
    getClientProfil,
    patchClientProfil,
  };
};
