import type { ProfessionalProfile } from '~/models/user/UserModel';

export const useUserProfile = () => {
  const { setUser } = useUserStore();
  const { addError, addSuccess } = useToaster();

  const config = useRuntimeConfig();

  const getUserProfile = () => {
    // This function would typically fetch the user data from an API or store
    console.log('Fetching user profile data...');
  };

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
            professionalProfil
          );
          if (data) {
            addSuccess(
              'Inscription réussie, veuillez vérifier votre email pour confirmer votre compte.'
            );
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

  return {
    getUserProfile,
    updateProfessionalProfile,
  };
};
