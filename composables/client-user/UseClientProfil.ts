import type { ClientModel } from '~/models/user/ClientModel';

export const useClientProfil = () => {
  const { addError, addSuccess } = useToaster();
  const token = useCookie('token');
  const userStore = useUserStore();
  const { setClientProfile, updateClientProfile } = userStore;
  const { clientProfile, isProfileCreated } = storeToRefs(userStore);
  const config = useRuntimeConfig();
  const api = useApi()!;

  const getClientProfil = async () => {
    const { data } = await api.get(`${config.public.apiUrl}/organisator`);

    if (data) {
      localStorage.setItem('organisator-uuid', data.uuid);
      setClientProfile(data);
      return data;
    }
  };

  const patchClientProfil = async (newProfil: ClientModel) => {
    const clientUuid = clientProfile.value?.uuid;

    const { data } = await api.patch(
      `${config.public.apiUrl}/organisator/${clientUuid}`,
      newProfil
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
