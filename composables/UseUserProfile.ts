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

  const debugAuth = async () => {
    console.log('=== DEBUG AUTH ===');
    console.log('1. Token from cookie:', token.value);
    console.log('2. Token length:', token.value?.length);
    console.log('3. Professional UUID:', localStorage.getItem('professional-uuid'));

    // Test direct avec curl ou Postman
    console.log('4. Test this curl command:');
    console.log(
      `curl -H "Authorization: Bearer ${token.value}" ${config.public.apiUrl}/professional/${localStorage.getItem('professional-uuid')}`
    );

    // Test de la validité du token
    if (token.value) {
      try {
        const payload = JSON.parse(atob(token.value.split('.')[1]));
        console.log('5. Token payload:', payload);
        console.log('6. Token expires:', new Date(payload.exp * 1000));
      } catch (e) {
        console.log('5. Error parsing token:', e);
      }
    }
  };

  const getUserProfileDetails = async () => {
    const professionalUuid = localStorage.getItem('professional-uuid');

    try {
      console.log('Token from cookie:', token.value);
      console.log('Professional UUID:', professionalUuid);

      const { data } = await axios.get(`${config.public.apiUrl}/professional/${professionalUuid}`);
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
    debugAuth,
  };
};
