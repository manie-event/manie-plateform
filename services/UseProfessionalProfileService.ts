import type { AxiosError } from 'axios';
import type { ProfessionalProfile } from '~/models/user/UserModel';

export const useProfessionalProfileService = () => {
  const { addError, addSuccess } = useToaster();
  const userStore = useProfilStore();
  const { setProfessionalUser, sendProfessionalProfileForCustomer } = userStore;
  const { professionalUser, professionalUuid } = storeToRefs(userStore);
  const api = useApi();

  const createProfessionalProfile = async (professionalProfil: ProfessionalProfile) => {
    try {
      if (!api) return;
      const { data } = await api.post('/professional/create', professionalProfil);

      addSuccess('Profil professionnel créé avec succès !');
      await getProfessionalProfile();
      return data;
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const getProfessionalProfile = async () => {
    try {
      if (!api) return;
      const { data } = await api.get('/professional');

      setProfessionalUser(data);
      return data;
    } catch (err: any) {
      console.log({ message: err.response.data.message });
    }
  };

  const getProfessionalProfileDetails = async () => {
    try {
      if (!api || !professionalUuid.value) return;
      const { data } = await api.get(`/professional/${professionalUuid.value}`);
      return data;
    } catch (err: any) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const patchProfessionalProfileDetails = async (newProfile: ProfessionalProfile) => {
    try {
      if (!api || !professionalUuid.value) return;
      const { data } = await api.patch(`/professional/${professionalUuid.value}`, newProfile);
      return data;
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const changeProfessionalBannerPicture = async (file: File) => {
    if (!api || !professionalUuid.value) return;

    try {
      const formData = new FormData();
      formData.append('file', file);
      const { data } = await api.patch(`/professional/${professionalUuid.value}/picture`, formData);

      if (data?.imageUrl) {
        const normalizedData = {
          ...data,
          picture: data.imageUrl || data.picture || null,
        };

        setProfessionalUser(normalizedData);
        addSuccess('Bannière changée avec succès !');
      }
      return data;
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
