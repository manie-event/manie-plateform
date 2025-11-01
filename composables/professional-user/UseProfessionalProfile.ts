import type { errorModel } from '~/models/errorModel';
import type { ProfessionalProfile } from '~/models/user/UserModel';

export const useProfessionalProfile = () => {
  const { addError, addSuccess } = useToaster();
  const userStore = useUserStore();
  const { setProfessionalUser, sendProfessionalProfileForCustomer } = userStore;
  const { professionalUser } = storeToRefs(userStore);
  const config = useRuntimeConfig();
  const api = useApi(); // ✅ instance sécurisée
  const professionalUuid = localStorage.getItem('professional-uuid');

  const createProfessionalProfile = async (professionalProfil: ProfessionalProfile) => {
    try {
      if (!api) return;
      const { data } = await api.post('/professional/create', professionalProfil);

      addSuccess('Profil professionnel créé avec succès !');
      await getProfessionalProfile(); // rafraîchit les infos locales
      return data;
    } catch (error: any) {
      console.error(error);
      addError(
        (error.response?.data as errorModel) ?? { message: 'Erreur de création du profil.' }
      );
    }
  };

  const getProfessionalProfile = async () => {
    try {
      if (!api) return;
      const { data } = await api.get('/professional');
      setProfessionalUser(data);
      return data;
    } catch (error) {
      console.error(error);
      addError({ message: 'Erreur lors de la récupération du profil professionnel.' });
    }
  };

  const getProfessionalProfileDetails = async () => {
    try {
      if (!api || !professionalUuid) return;

      const { data } = await api.get(`/professional/${professionalUuid}`);

      // 🧩 Compatibilité avec anciens retours { newPro: {...} }
      const profile = data.newPro || data;

      // 🧩 On s'assure que les relations et champs essentiels existent
      if (profile && profile.uuid) {
        setProfessionalUser(profile);
      } else {
        console.warn('⚠️ Réponse incomplète du profil professionnel:', data);
      }

      return profile;
    } catch (error) {
      addError({ message: 'Erreur lors de la récupération des détails du profil.' });
    }
  };

  const patchProfessionalProfileDetails = async (newProfile: ProfessionalProfile) => {
    try {
      if (!api || !professionalUuid) return;

      // 🧩 On fusionne sans écraser les champs backend (comme picture)
      const mergedProfile = {
        ...professionalUser.value,
        ...newProfile,
      };

      const { data } = await api.patch(`/professional/${professionalUuid}`, mergedProfile);
      const updatedProfile = data.newPro || data;

      if (updatedProfile && updatedProfile.uuid) {
        setProfessionalUser(updatedProfile);
        addSuccess('Profil professionnel mis à jour !');
      } else {
        console.warn('⚠️ Réponse incomplète après mise à jour du profil:', data);
      }

      return updatedProfile;
    } catch (error) {
      console.error('❌ Erreur patchProfessionalProfileDetails:', error);
      addError({ message: 'Erreur lors de la mise à jour du profil professionnel.' });
    }
  };

  const changeProfessionalBannerPicture = async (file: File) => {
    if (!api || !professionalUuid) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data } = await api.patch(`/professional/${professionalUuid}/picture`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }, // seul cas où on garde un header manuel
      });

      if (data?.imageUrl) {
        const normalizedData = {
          ...data,
          picture: data.imageUrl || data.picture || null,
        };
        setProfessionalUser(normalizedData);
      }
      return data;
    } catch (error) {
      console.error(error);
      addError({ message: 'Erreur lors du changement de la bannière.' });
    }
  };

  const getProfessionalProfileForCustomer = async (eventServiceUuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(
        `/professional/show-professional-for-organisator/${eventServiceUuid}`
      );
      sendProfessionalProfileForCustomer(data);
      return data;
    } catch (error) {
      addError({ message: 'Erreur lors de la récupération du profil pour le client.' });
    }
  };

  return {
    createProfessionalProfile,
    getProfessionalProfile,
    getProfessionalProfileDetails,
    patchProfessionalProfileDetails,
    getProfessionalProfileForCustomer,
    changeProfessionalBannerPicture,
  };
};
