import axios from 'axios';
import type { errorModel } from '~/models/errorModel';
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
      console.log('Error fetching user profile:', error);

      addError({ message: 'Une erreur est survenue lors de la récupération du profil.' });
    }
  };

  const getUserProfileDetails = async () => {
    const professionalUuid = localStorage.getItem('professional-uuid');

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

  return {
    updateProfessionalProfile,
    getUserProfile,
    getUserProfileDetails,
  };
};
