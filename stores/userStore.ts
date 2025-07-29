import type { ProfessionalProfile, User } from '@/models/user/UserModel';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {
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
    } as User,
    professionalUser: undefined as ProfessionalProfile | undefined,
    isProfessionalProfileCreated: false,
    isConsumerProfileAccepted: false,
    isStoringUserAccepeted: false,
  }),
  getters: {
    getUserInfo: (state) => state.user,
    getProfessionalUserInfo: (state) => {
      console.log(state.professionalUser);
      return state.professionalUser;
    },
  },
  actions: {
    setUser(userData: User) {
      this.user = userData;
    },
    setProfessionalUser(newProfessionalUser: ProfessionalProfile) {
      this.professionalUser = newProfessionalUser;
      this.isProfessionalProfileCreated = true;
    },
    setUserAccepted(accepted: boolean) {
      this.isStoringUserAccepeted = accepted;
    },
  },
  persist: {
    // Utilise la configuration par défaut (localStorage)
    pick: [
      'user',
      'professionalUser',
      'isProfessionalProfileCreated',
      'isConsumerProfileAccepted',
      'isStoringUserAccepeted',
    ],
  },
});
