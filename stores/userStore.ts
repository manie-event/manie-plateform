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
  const bgPicture = ref();
  const professionalProfileForCustomer = ref<ProfessionalProfile>();

  const definePictureBanner = computed(() => {});

  // setters
  const setUser = (userData: User) => {
    user.value = userData;
    localStorage.setItem('username', userData.username);
    if (userData.category === 'professional') {
      localStorage.setItem('is-professional', JSON.stringify(true));
    }
  };

  const setUpdateProfile = (newStatus: boolean) => {
    isProfilUpdate.value = newStatus;
  };

  // client setters
  const setClientProfile = (newProfile: clientProfile) => {
    clientProfile.value = newProfile;
    isProfileCreated.value = true;
    localStorage.setItem('client-uuid', newProfile.uuid);
    localStorage.setItem('client-name', newProfile.username);
    localStorage.setItem(
      'client-profile',
      JSON.stringify({ ...clientProfile.value, email: null, phoneNumber: null, address: null })
    );
    isProfileCreated.value = true;
  };

  const updateClientProfile = (updatedProfile: clientProfile) => {
    clientProfile.value = updatedProfile;
  };

  // professional setters
  const setProfessionalUser = (newProfessionalUser: ProfessionalProfile) => {
    professionalUser.value = {
      ...newProfessionalUser,
      uuid: newProfessionalUser.uuid?.replace(/[""]/g, '') || '',
      category: 'professional',
    };

    localStorage.setItem('professional-uuid', professionalUser.value.uuid || '');
    localStorage.setItem('is-profile-verified', JSON.stringify(true));
    localStorage.setItem('pro-name', newProfessionalUser.name);
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

  const sendProfessionalProfileForCustomer = (profile: ProfessionalProfile) => {
    console.log(profile, 'profile');

    professionalProfileForCustomer.value = profile;
  };

  return {
    user,
    bgPicture,
    professionalUser,
    clientProfile,
    isProfileCreated,
    isStoringUserAccepeted,
    professionnalServices,
    professionalProfileForCustomer,
    isProfilUpdate,
    keywords,
    setUserAccepted,
    setUser,
    setProfessionalUser,
    setProfessionalServices,
    setClientProfile,
    setKeywords,
    sendNewPhotoOnProfile,
    setUpdateProfile,
    updateClientProfile,
    sendProfessionalProfileForCustomer,
  };
});
