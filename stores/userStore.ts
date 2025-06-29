import type { User } from '@/models/user/UserModel';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>();
  const isStoringUserAccepeted = ref(false);

  const getUserInfo = () => {
    return user.value;
  };

  const setUser = (userData: User) => {
    user.value = userData;
  };

  const setUserAccepted = (accepted: boolean) => {
    isStoringUserAccepeted.value = accepted;
  };

  return {
    user,
    isStoringUserAccepeted,
    setUserAccepted,
    getUserInfo,
    setUser,
  };
});
