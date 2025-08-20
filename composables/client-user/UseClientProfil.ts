import axios from 'axios';
import type { ClientModel } from '~/models/user/ClientModel';

export const useClientProfil = () => {
  const { addError, addSuccess } = useToaster();
  const token = useCookie('token');
  const userStore = useUserStore();
  const { setProfessionalUser, sendNewPhotoOnProfile } = userStore;
  const config = useRuntimeConfig();
  const clientUuid = localStorage.getItem('user-uuid');

  const patchClientProfil = async (newProfil: ClientModel) => {
    console.log(token.value, 'TOKEN in patch');

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
      console.log(data, 'Client Data');

      return data;
    }
  };
  return {
    patchClientProfil,
  };
};
