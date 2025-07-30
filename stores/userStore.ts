import type { ProfessionalProfile, User } from '@/models/user/UserModel';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

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
  //   geographicArea: '',
  //   faq: {},
  //   minimumBenefit: 0,
  //   minimumReservationPeriod: 0,
  //   deposit: false,
  //   depositAmount: 0,
  //   billingPeriod: '',
  //   links: [],
  // });
  const isProfessionalProfileCreated = ref(false);
  const isConsumerProfileAccepted = ref(false);
  const isStoringUserAccepeted = ref(false);

  const getUserInfo = computed(() => {
    return user.value;
  });

  const getProfessionalUserInfo = computed(() => {
    console.log(professionalUser.value, 'getProfessionalUserInfo');
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
