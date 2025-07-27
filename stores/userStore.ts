import type { User } from '@/models/user/UserModel';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>({
    username: '',
    name: '',
    phraseInspirante: '',
    phraseDePresentation: '',
    category: '',
    email: '',
    phone: '',
    adresse: '',
    diplome: '',
    langues: '',
  });
  const isProfessionalProfileCreated = ref(false);
  const isConsumerProfileAccepted = ref(false);
  const isStoringUserAccepeted = ref(false);

  const setUser = (userData: User) => {
    user.value = userData;
  };

  const setUserAccepted = (accepted: boolean) => {
    isStoringUserAccepeted.value = accepted;
  };

  return {
    user,
    isProfessionalProfileCreated,
    isConsumerProfileAccepted,
    isStoringUserAccepeted,
    setUserAccepted,
    setUser,
  };
});
