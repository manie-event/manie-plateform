import axios from 'axios';
import type { ProfessionalProfile } from '~/models/user/UserModel';

export const useUserProfile = () => {
  const { addError, addSuccess } = useToaster();
  const token = useCookie('token');
  const userStore = useUserStore();
  const { setProfessionalUser } = userStore;
  const config = useRuntimeConfig();

  const updateProfessionalProfile = async (professionalProfil: ProfessionalProfile) => {
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
        addSuccess(
          'Inscription réussie, veuillez vérifier votre email pour confirmer votre compte.'
        );
        getUserProfile();
        return data;
      }
    } catch (error: unknown) {
      addError({ message: 'Une erreur est survenue lors de la mise à jour du profil.' });
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
        return data;
      }
    } catch (error: unknown) {
      addError({ message: 'Une erreur est survenue lors de la récupération du profil.' });
    }
  };

  const getUserProfileDetails = async () => {
    const professionalUuid = localStorage.getItem('professional-uuid');
    console.log(professionalUuid, 'professionalUuid in getUserProfileDetails');
    console.log(token.value, 'token.value in getUserProfileDetails');

    try {
      const { data } = await axios.get(`${config.public.apiUrl}/professional/${professionalUuid}`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        console.log(data, 'data in getUserProfileDetails');

        setProfessionalUser(data);
        return data;
      }
    } catch (error: unknown) {
      addError({ message: 'Une erreur est survenue lors de la récupération du profil.' });
    }
  };

  return {
    updateProfessionalProfile,
    getUserProfile,
    getUserProfileDetails,
  };
};
