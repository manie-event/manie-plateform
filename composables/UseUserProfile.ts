import axios from 'axios';
import type { ProfessionalProfile } from '~/models/user/UserModel';

export const useUserProfile = () => {
  const { addError, addSuccess } = useToaster();
  const token = useCookie('token');
  const userStore = useUserStore();
  const { setProfessionalUser } = userStore;
  const { professionalUser } = storeToRefs(userStore);
  const config = useRuntimeConfig();

  const updateProfessionalProfile = async (professionalProfil: ProfessionalProfile) => {
    try {
      const siretResponse = await axios.get(
        `https://api.insee.fr/api-sirene/3.11/siret/${professionalProfil.siret}`,
        {
          headers: {
            accept: 'application/json',
            'X-INSEE-Api-Key-Integration': config.public.tokenSiret,
          },
        }
      );

      const siretValid = siretResponse.data;

      if (siretValid) {
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
          addError({ message: 'Veuillez vérifier que le SIRET soit valide.' });
        }
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
    console.log(
      professionalUser.value?.uuid,
      'professionalUser.value?.uuid in getUserProfileDetails'
    );
    try {
      const { data } = await axios.get(
        `${config.public.apiUrl}/professional/${professionalUser.value?.uuid}`,
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
      addError({ message: 'Une erreur est survenue lors de la récupération du profil.' });
    }
  };

  return {
    updateProfessionalProfile,
    getUserProfile,
    getUserProfileDetails,
  };
};
