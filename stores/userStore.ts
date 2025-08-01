import type { ProfessionalProfile, User } from '@/models/user/UserModel';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>();

  const professionalUser = ref<ProfessionalProfile>();
  // const professionalUser = useLocalStorage<ProfessionalProfile>('userStore-professional', {
  //   name: '',
  //   uuid: '',
  //   userUuid: '',
  //   siret: '',
  //   address: '',
  //   bio: '',
  //   mainActivity: '',
  //   mainInterlocutor: '',
  //   experience: 0,
  //   category: '',
  //   geographicArea: '',
  //   faq: {},
  //   minimumBenefit: 0,
  //   minimumReservationPeriod: 0,
  //   deposit: false,
  //   depositAmount: 0,
  //   billingPeriod: '',
  //   links: [],
  // });
  const isProfessionalProfileCreated = useLocalStorage('pp-created', false);
  const isConsumerProfileAccepted = ref(false);
  const isStoringUserAccepeted = ref(false);

  const setUser = (userData: User) => {
    user.value = userData;
  };
  const setProfessionalUser = (newProfessionalUser: ProfessionalProfile) => {
    professionalUser.value = {
      ...newProfessionalUser,
      category: 'professional',
    };
    console.log(professionalUser.value, 'professionalUser.value in setProfessionalUser');

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
