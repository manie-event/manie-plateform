import axios from 'axios';
import type { errorModel } from '~/models/errorModel';
import type { ProfessionalProfile } from '~/models/user/UserModel';

export const useProfessionalProfile = () => {
  const { addError, addSuccess } = useToaster();
  const token = useCookie('token');
  const userStore = useUserStore();
  const { setProfessionalUser, sendNewPhotoOnProfile, sendProfessionalProfileForCustomer } =
    userStore;
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
        getProfessionalProfile();
        return data;
      }
    } catch (error: unknown) {
      addError(error.response.data as errorModel);
    }
  };

  const getProfessionalProfile = async () => {
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/professional`, {
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
      console.log(error, 'getProfessionalProfileError');
      addError({ message: 'Une erreur est survenue lors de la récupération du profil.' });
    }
  };

  const getProfessionalProfileDetails = async () => {
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

  const patchProfessionnalProfileDetails = async (newProfile: ProfessionalProfile) => {
    console.log(newProfile, 'newProfile');
    console.log(professionalUuid, 'professionalUuid');

    try {
      const { data } = await axios.patch(
        `http://127.0.0.1:3333/professional/${professionalUuid}`,
        newProfile,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (data) {
        setProfessionalUser(data);

        return data;
      }
    } catch (error: unknown) {
      console.log(error, 'error');

      addError({ message: 'Une erreur est survenue lors de la récupération du profil.' });
    }
  };

  const changeProfessionalBannerPicture = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

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

      if (data?.imageUrl) {
        console.log(data.imageUrl, 'data.imageUrl');

        sendNewPhotoOnProfile(data.imageUrl);
      }

      return data;
    } catch (error) {
      console.error(error);
      alert('Une erreur est survenue lors de la mise à jour du profil');
    }
  };

  const getProfessionalProfileForCustomer = async (eventServiceUuid: string) => {
    try {
      const { data } = await axios.get(
        `${config.public.apiUrl}/professional/show-professional-for-organisator/${eventServiceUuid}`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (data) {
        sendProfessionalProfileForCustomer(data);

        return data;
      }
    } catch (error: unknown) {
      addError({ message: 'Une erreur est survenue lors de la récupération du profil.' });
    }
  };

  return {
    createProfessionalProfile,
    getProfessionalProfile,
    getProfessionalProfileDetails,
    patchProfessionnalProfileDetails,
    getProfessionalProfileForCustomer,
    changeProfessionalBannerPicture,
  };
};
