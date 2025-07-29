import type { ProfessionalProfile, User } from '@/models/user/UserModel';
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

  const professionalUser = ref<ProfessionalProfile>();
  const isProfessionalProfileCreated = ref(false);
  const isConsumerProfileAccepted = ref(false);
  const isStoringUserAccepeted = ref(false);

  const getUserInfo = computed(() => {
    return user.value;
  });

  const getProfessionalUserInfo = computed(() => {
    return professionalUser.value;
  });

  const setUser = (userData: User) => {
    user.value = userData;
  };
  const setProfessionalUser = (newProfessionalUser: ProfessionalProfile) => {
    professionalUser.value = newProfessionalUser;
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
    getProfessionalUserInfo,
    setUserAccepted,
    getUserInfo,
    setUser,
    setProfessionalUser,
  };
});
