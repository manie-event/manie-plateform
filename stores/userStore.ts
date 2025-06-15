import type { User } from '@/models/user/UserModel';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>({
    nomComplet: 'MORENO Clément',
    phraseInspirante: undefined,
    phraseDePresentation: undefined,
    email: 'clementmoreno0803@gmail.com',
    category: 'professional',
    phone: undefined,
    adresse: undefined,
    diplome: undefined,
    langues: 'Français, Anglais',
  });

  const getUserInfo = () => {
    return user.value;
  };

  const setUser = (userData: User) => {
    user.value = userData;
  };

  return {
    user,
    getUserInfo,
    setUser,
  };
});
