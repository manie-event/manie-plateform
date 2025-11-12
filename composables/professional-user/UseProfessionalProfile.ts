import type { errorModel } from '~/models/errorModel';
import type { ProfessionalProfile } from '~/models/user/UserModel';

export const useProfessionalProfile = () => {
  const { addError, addSuccess } = useToaster();
  const userStore = useUserStore();
  const { setProfessionalUser, sendProfessionalProfileForCustomer } = userStore;
  const { professionalUser, professionalUuid } = storeToRefs(userStore);
  const api = useApi();

  const createProfessionalProfile = async (professionalProfil: ProfessionalProfile) => {
    try {
      if (!api) return;
      const { data } = await api.post('/professional/create', professionalProfil);

      addSuccess('Profil professionnel créé avec succès !');
      await getProfessionalProfile(); // rafraîchit les infos locales
      return data;
    } catch (err: any) {
      addError((err.response?.data as errorModel) ?? { message: 'Erreur de création du profil.' });
    }
  };

  const getProfessionalProfile = async () => {
    try {
      if (!api) return;
      const { data } = await api.get('/professional');

      setProfessionalUser(data);
      return data;
    } catch (err: any) {
      console.log(err.response.data.message);

      // addError({ message: err.response.data.message });
    }
  };

  const getProfessionalProfileDetails = async () => {
    try {
      if (!api || !professionalUuid.value) return;

      const { data } = await api.get(`/professional/${professionalUuid.value}`);

      // 🧩 Compatibilité avec anciens retours { newPro: {...} }
      const profile = data.newPro || data;

      // 🧩 On s'assure que les relations et champs essentiels existent
      if (profile && profile.uuid) {
        setProfessionalUser(profile);
      } else {
        console.warn('⚠️ Réponse incomplète du profil professionnel:', data);
      }

      return profile;
    } catch (err: any) {
      addError({ message: err.response.data.message });
    }
  };

  const patchProfessionalProfileDetails = async (newProfile: ProfessionalProfile) => {
    try {
      if (!api || !professionalUuid.value) return;

      // 🧩 On fusionne sans écraser les champs backend (comme picture)
      const mergedProfile = {
        ...professionalUser.value,
        ...newProfile,
      };

      const { data } = await api.patch(`/professional/${professionalUuid.value}`, mergedProfile);
      const updatedProfile = data.newPro || data;

      if (updatedProfile && updatedProfile.uuid) {
        setProfessionalUser(updatedProfile);
        addSuccess('Profil professionnel mis à jour !');
      } else {
        console.warn('⚠️ Réponse incomplète après mise à jour du profil:', data);
      }

      return updatedProfile;
    } catch (err: any) {
      addError({ message: err.response.data.message });
    }
  };
  const changeProfessionalBannerPicture = async (file: File) => {
    if (!api || !professionalUuid.value) return;

    try {
      const formData = new FormData();
      formData.append('file', file);

      const { data } = await api.patch(
        `/professional/${professionalUuid.value}/picture`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (data?.imageUrl) {
        const normalizedData = {
          ...data,
          picture: data.imageUrl || data.picture || null,
        };

        setProfessionalUser(normalizedData);
        addSuccess('Bannière changée avec succès !');
      }

      return data;
    } catch (err: any) {
      addError({ message: err.response.data.message });
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
    } catch (err: any) {
      addError({ message: err.response.data.message });
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
