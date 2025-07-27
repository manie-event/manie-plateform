import type { ProfessionalProfile } from '@/models/user/UserModel';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', () => {
  const professionalUser = ref<ProfessionalProfile>();
  const isProfessionalProfileCreated = ref(false);
  const isConsumerProfileAccepted = ref(false);
  const isStoringUserAccepeted = ref(false);

  const setProfessionalUser = (userData: ProfessionalProfile) => {
    professionalUser.value = userData;
  };

  const setUserAccepted = (accepted: boolean) => {
    isStoringUserAccepeted.value = accepted;
  };

  return {
    professionalUser,
    isProfessionalProfileCreated,
    isConsumerProfileAccepted,
    isStoringUserAccepeted,
    setUserAccepted,
    setProfessionalUser,
  };
});
