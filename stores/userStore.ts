import type { ProfessionalProfile, User, clientProfile } from '@/models/user/UserModel';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useClientProfil } from '~/composables/client-user/UseClientProfil';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { Services } from '~/models/professionalService/Services';

export const useUserStore = defineStore('userStore', () => {
  const api = useApi();
  const { getProfessionalProfile } = useProfessionalProfile();
  const { getClientProfil } = useClientProfil();

  /** 👤 Base user data */
  const user = ref<User | null>(null);
  const isProfilUpdate = ref(false);
  const isProfileCreated = ref(false);
  const isStoringUserAccepted = ref(false);

  /** 👥 Client profile */
  const clientProfile = ref<clientProfile | null>(null);

  /** 🧑‍🔧 Professional profile */
  const professionalUser = ref<ProfessionalProfile | null>(null);
  const professionalServices = ref<Services[]>([]);
  const keywords = ref<Keywords[]>([]);
  const professionalProfileForCustomer = ref<ProfessionalProfile | null>(null);

  /** 🧠 Derived state (computed) */
  const isProfessional = computed(() => user.value?.category === 'professional');
  const category = computed(() => (isProfessional.value ? 'Prestataire' : 'Client'));

  const displayName = computed(() => {
    console.log(isProfessional.value, 'ISPROFESSIONAL COMPUTED');

    if (isProfessional.value) {
      return professionalUser.value?.name || user.value?.username || '';
    }
    return clientProfile.value?.username || user.value?.username || '';
  });

  const initials = computed(() => displayName.value?.charAt(0).toUpperCase() || '?');

  /** 🧩 Mutations (setters) */
  const setUser = (userData: User) => {
    user.value = userData;
    localStorage.setItem('profil-created', 'true');
    if (user.value.category === 'professional') {
      localStorage.setItem('is-professional', 'true');
    }
  };

  const setUpdateProfile = (status: boolean) => {
    isProfilUpdate.value = status;
  };

  /** Client */
  const setClientProfile = (profile: clientProfile) => {
    clientProfile.value = { ...profile };
    isProfileCreated.value = true;
  };

  const updateClientProfile = (updatedProfile: Partial<clientProfile>) => {
    if (!clientProfile.value) clientProfile.value = {} as clientProfile;
    Object.assign(clientProfile.value, updatedProfile);
  };

  /** Professional */
  const setProfessionalUser = (profile: ProfessionalProfile) => {
    professionalUser.value = {
      ...profile,
      email: user.value?.email || '',
      uuid: profile.uuid?.replace(/[""]/g, '') || '',
      category: 'professional',
    };
    isProfileCreated.value = true;
  };

  const setProfessionalServices = (services: Services[]) => {
    professionalServices.value = [...services];
  };

  const setKeywords = (newKeywords: Keywords[]) => {
    keywords.value = [...newKeywords];
  };

  const sendProfessionalProfileForCustomer = (profile: ProfessionalProfile) => {
    professionalProfileForCustomer.value = profile;
  };

  const setUserAccepted = (accepted: boolean) => {
    isStoringUserAccepted.value = accepted;
  };

  /** 🔁 Reset global state (utile pour logout) */
  const resetUserStore = () => {
    user.value = null;
    clientProfile.value = null;
    professionalUser.value = null;
    professionalServices.value = [];
    keywords.value = [];
    professionalProfileForCustomer.value = null;
    isProfileCreated.value = false;
    isProfilUpdate.value = false;
    isStoringUserAccepted.value = false;
  };

  return {
    // 🔹 State
    user,
    clientProfile,
    professionalUser,
    professionalServices,
    professionalProfileForCustomer,
    keywords,

    // 🔹 Flags
    isProfessional,
    isProfileCreated,
    isProfilUpdate,
    isStoringUserAccepted,

    // 🔹 Computed
    displayName,
    initials,
    category,

    // 🔹 Setters
    setUser,
    setClientProfile,
    updateClientProfile,
    setProfessionalUser,
    setProfessionalServices,
    setKeywords,
    setUserAccepted,
    setUpdateProfile,
    sendProfessionalProfileForCustomer,

    // 🔹 Utils
    resetUserStore,
  };
});
