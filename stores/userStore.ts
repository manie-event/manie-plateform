import type { ProfessionalProfile, User } from '@/models/user/UserModel';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>();

  const professionalUser = ref<ProfessionalProfile>();
  const isProfessionalProfileCreated = useLocalStorage('pp-created', false);
  const isConsumerProfileAccepted = ref(false);
  const isStoringUserAccepeted = ref(false);

  const setUser = (userData: User) => {
    user.value = userData;
  };
  const setProfessionalUser = (newProfessionalUser: ProfessionalProfile) => {
    professionalUser.value = {
      ...newProfessionalUser,
      uuid: newProfessionalUser.uuid?.replace(/[""]/g, '') || '',
      category: 'professional',
    };
    console.log(professionalUser.value.uuid, 'professionalUser.value in setProfessionalUser');

    localStorage.setItem('professional-uuid', professionalUser.value.uuid || '');
    isProfessionalProfileCreated.value = true;
  };

  const setUserAccepted = (accepted: boolean) => {
    isStoringUserAccepeted.value = accepted;
  };

  return {
    user,
    professionalUser,
    isProfessionalProfileCreated,
    isConsumerProfileAccepted,
    isStoringUserAccepeted,
    setUserAccepted,
    setUser,
    setProfessionalUser,
  };
});
