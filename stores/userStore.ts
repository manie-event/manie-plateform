import type { ProfessionalProfile, User, clientProfile } from '@/models/user/UserModel';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { Services } from '~/models/professionalService/Services';

export const useUserStore = defineStore('userStore', () => {
  //persistance
  const isProfileCreated = ref(false);
  const isProfessional = ref(false);
  const proName = ref<string | null>(null);
  const clientName = ref<string | null>(null);
  const clientUuid = ref<string | null>(null);
  const professionalUuid = ref<string | null>(null);

  // refs
  const user = ref<User>();
  const professionalUser = ref<ProfessionalProfile>();
  const clientProfile = ref<clientProfile>();
  const isProfilUpdate = ref(false);
  const isStoringUserAccepeted = ref(false);
  const professionnalServices = ref<Services[]>([]);
  const keywords = ref<Keywords[]>([]);
  const professionalProfileForCustomer = ref<ProfessionalProfile>();

  const category = computed(() => (isProfessional.value ? 'Prestataire' : 'Client'));

  const displayName = computed(() => {
    if (isProfessional.value) {
      return proName.value ?? user.value?.username;
    }
    return clientName.value ?? user.value?.username;
  });

  const initials = computed(() => {
    const name = String(displayName.value || '');
    console.log(name, 'NAME');
    return name.charAt(0).toUpperCase() || '?';
  });

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
  const setClientProfile = (profile: clientProfile) => {
    clientProfile.value = profile;
    clientName.value = profile.username ?? null;
    isProfileCreated.value = true;
    isProfessional.value = false;

    localStorage.setItem('client-name', profile.username || '');
    localStorage.setItem('pp-created', 'true');
    localStorage.setItem('is-professional', 'false');
    localStorage.setItem('client-uuid', profile.uuid || '');
  };

  const updateClientProfile = (updatedProfile: clientProfile) => {
    clientProfile.value = updatedProfile;
  };

  // professional setters
  const setProfessionalUser = (newProfessionalUser: ProfessionalProfile) => {
    const current = professionalUser.value || {};

    professionalUser.value = {
      ...current,
      ...newProfessionalUser,
      email: user.value?.email || '',
      uuid: newProfessionalUser.uuid?.replace(/[""]/g, '') || '',
      category: 'professional',
    };

    proName.value = professionalUser.value.name ?? null;
    isProfileCreated.value = true;
    isProfessional.value = true;

    localStorage.setItem('pro-name', professionalUser.value.name || '');
    localStorage.setItem('pp-created', 'true');
    localStorage.setItem('is-professional', 'true');
    localStorage.setItem('professional-uuid', professionalUser.value.uuid || '');
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

  const sendProfessionalProfileForCustomer = (profile: ProfessionalProfile) => {
    professionalProfileForCustomer.value = profile;
  };

  const resetUserStore = () => {
    user.value = undefined;
    professionalUser.value = undefined;
    clientProfile.value = {
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
    };
    isStoringUserAccepeted.value = false;
    professionnalServices.value = [];
    professionalProfileForCustomer.value = undefined;
    keywords.value = [];
  };

  return {
    //persistate
    proName,
    clientName,
    isProfessional,
    clientUuid,
    professionalUuid,
    //refs
    user,
    professionalUser,
    clientProfile,
    isProfileCreated,
    isStoringUserAccepeted,
    professionnalServices,
    professionalProfileForCustomer,
    isProfilUpdate,
    keywords,

    // getters
    category,
    displayName,
    initials,

    //setters
    setUserAccepted,
    setUser,
    setProfessionalUser,
    setProfessionalServices,
    setClientProfile,
    setKeywords,
    setUpdateProfile,
    updateClientProfile,
    sendProfessionalProfileForCustomer,
    resetUserStore,
  };
});
