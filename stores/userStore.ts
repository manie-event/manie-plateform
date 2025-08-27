import type { ProfessionalProfile, User, clientProfile } from '@/models/user/UserModel';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { Services } from '~/models/professionalService/Services';

export const useUserStore = defineStore('userStore', () => {
  // refs
  const user = ref<User>();
  const isProfilUpdate = ref(false);

  //client Ref
  const clientProfile = ref<clientProfile>({
    address: '',
    birthDate: '',
    businessLeader: '',
    businessName: '',
    businessSiret: '',
    city: '',
    country: '',
    createdAt: '',
    email: '',
    id: 0,
    isBusiness: false,
    phoneNumber: '',
    updatedAt: '',
    userUuid: '',
    username: '',
    uuid: '',
    zipCode: '',
  });

  //professional Ref
  const professionalUser = ref<ProfessionalProfile>();
  const isProfileCreated = useLocalStorage('pp-created', false);
  const isStoringUserAccepeted = ref(false);
  const professionnalServices = ref<Services[]>([]);
  const keywords = ref<Keywords[]>([]);
  const bgPicture = ref('/images/backgrounds/profilebg-2.jpg');

  // getters
  const isProfessional = computed(
    () =>
      user.value?.category === 'professional' || professionalUser.value?.category === 'professional'
  );

  // setters
  const setUser = (userData: User) => {
    user.value = userData;
  };

  const setUpdateProfile = (newStatus: boolean) => {
    isProfilUpdate.value = newStatus;
  };

  // client setters
  const setClientProfile = (newProfile: clientProfile) => {
    clientProfile.value = newProfile;
    localStorage.setItem('client-uuid', clientProfile.value.uuid);
  };

  const updateClientProfile = (updatedProfile: clientProfile) => {
    clientProfile.value = updatedProfile;

    console.log(clientProfile.value, 'from updateClientProfile');
  };

  // professional setters
  const setProfessionalUser = (newProfessionalUser: ProfessionalProfile) => {
    professionalUser.value = {
      ...newProfessionalUser,
      uuid: newProfessionalUser.uuid?.replace(/[""]/g, '') || '',
      category: 'professional',
    };

    localStorage.setItem('professional-uuid', professionalUser.value.uuid || '');
    isProfileCreated.value = true;
  };

  const setUserAccepted = (accepted: boolean) => {
    isStoringUserAccepeted.value = accepted;
  };

  const setProfessionalServices = (services: Services[]) => {
    professionnalServices.value = services;
  };

  const setKeywords = (newKeywords: Keywords[]) => {
    keywords.value.push(...newKeywords);
  };

  const sendNewPhotoOnProfile = (newPicture: string) => {
    bgPicture.value = newPicture;
  };

  return {
    user,
    bgPicture,
    professionalUser,
    clientProfile,
    isProfileCreated,
    isStoringUserAccepeted,
    professionnalServices,
    isProfilUpdate,
    keywords,
    isProfessional,
    setUserAccepted,
    setUser,
    setProfessionalUser,
    setProfessionalServices,
    setClientProfile,
    setKeywords,
    sendNewPhotoOnProfile,
    setUpdateProfile,
    updateClientProfile,
  };
});
