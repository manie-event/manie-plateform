import type { ProfessionalProfile, User } from '@/models/user/UserModel';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { Services } from '~/models/professionalService/Services';

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>();

  const professionalUser = ref<ProfessionalProfile>();
  const isProfessionalProfileCreated = useLocalStorage('pp-created', false);
  const isConsumerProfileAccepted = ref(false);
  const isStoringUserAccepeted = ref(false);
  const professionnalServices = ref<Services[]>([]);
  const professionalServiceUuid = ref<Services>();
  const keywords = ref<Keywords[]>([]);

  const setUser = (userData: User) => {
    user.value = userData;
  };
  const setProfessionalUser = (newProfessionalUser: ProfessionalProfile) => {
    professionalUser.value = {
      ...newProfessionalUser,
      uuid: newProfessionalUser.uuid?.replace(/[""]/g, '') || '',
      category: 'professional',
    };

    localStorage.setItem('professional-uuid', professionalUser.value.uuid || '');
    isProfessionalProfileCreated.value = true;
  };

  const setUserAccepted = (accepted: boolean) => {
    isStoringUserAccepeted.value = accepted;
  };

  const setProfessionalServices = (services: Services[]) => {
    professionnalServices.value = services;
    console.log('setProfessionalServices:', professionnalServices.value);
  };

  const setKeywords = (newKeywords: Keywords[]) => {
    keywords.value.push(...newKeywords);
  };

  const setServiceUuid = (serviceUuid: Services) => {
    professionalServiceUuid.value = serviceUuid;
  };

  return {
    user,
    keywords,
    professionalUser,
    isProfessionalProfileCreated,
    professionnalServices,
    isConsumerProfileAccepted,
    isStoringUserAccepeted,
    professionalServiceUuid,
    setUserAccepted,
    setUser,
    setProfessionalUser,
    setProfessionalServices,
    setKeywords,
    setServiceUuid,
  };
});
