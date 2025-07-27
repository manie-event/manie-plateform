import type { ProfessionalProfile, User } from '@/models/user/UserModel';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>({
    username: '',
    email: '',
    category: 'professional',
  });
  const ProfessionalProfile = ref<ProfessionalProfile>();
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
    isConsumerProfileAccepted,
    isProfessionalProfileCreated,
    isStoringUserAccepeted,
    setUserAccepted,
    setUser,
  };
});
