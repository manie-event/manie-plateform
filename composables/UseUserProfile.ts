import axios from 'axios';
import type { errorModel } from '~/models/errorModel';
import type { ProfessionalProfile } from '~/models/user/UserModel';

export const useUserProfile = () => {
  const { addError, addSuccess } = useToaster();
  const token = useCookie('token');
  const userStore = useUserStore();
  const { setProfessionalUser } = userStore;
  const config = useRuntimeConfig();

  const professionalUuid = localStorage.getItem('professional-uuid');

  const createProfessionalProfile = async (professionalProfil: ProfessionalProfile) => {
    try {
      const { data } = await axios.post(
        `${config.public.apiUrl}/professional/create`,
        professionalProfil,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (data) {
        addSuccess('Modification du profil professionnel réussie !');
        getUserProfile();
        return data;
      }
    } catch (error: unknown) {
      // console.log('Error updating professional profile:', error.response.data.errors);

      addError(error.response.data as errorModel);
    }
  };

  const getUserProfile = async () => {
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/professional`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        setProfessionalUser(data);
        console.log('User profile details:', data);

        return data;
      }
    } catch (error: unknown) {
      addError({ message: 'Une erreur est survenue lors de la récupération du profil.' });
    }
  };

  const getUserProfileDetails = async () => {
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/professional/${professionalUuid}`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        setProfessionalUser(data);

        return data;
      }
    } catch (error: unknown) {
      addError({ message: 'Une erreur est survenue lors de la récupération du profil.' });
    }
  };

  const patchUserProfileDetails = async (newProfile: ProfessionalProfile) => {
    try {
      const { data } = await axios.patch(
        `${config.public.apiUrl}/professional/${professionalUuid}`,
        {
          newProfile,
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (data) {
        console.log('data', data);

        setProfessionalUser(data);

        return data;
      }
    } catch (error: unknown) {
      addError({ message: 'Une erreur est survenue lors de la récupération du profil.' });
    }
  };

  const changeBannerPicture = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    console.log('URL finale:', `${config.public.apiUrl}/professional/${professionalUuid}/picture`);

    try {
      const { data } = await axios.patch(
        `${config.public.apiUrl}/professional/${professionalUuid}/picture`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Supposons que le back renvoie la nouvelle URL de l'image
      // if (data?.imageUrl) {
      //   profileBg.value = data.imageUrl;
      // }
      console.log('ici', data.imageUrl);

      return data;
    } catch (error) {
      console.error(error);
      alert('Une erreur est survenue lors de la mise à jour du profil');
    }
  };

  return {
    createProfessionalProfile,
    getUserProfile,
    getUserProfileDetails,
    patchUserProfileDetails,
    changeBannerPicture,
  };
};
