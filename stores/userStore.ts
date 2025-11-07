import type { ProfessionalProfile, User, clientProfile } from '@/models/user/UserModel';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { Services } from '~/models/professionalService/Services';

export const useUserStore = defineStore(
  'userStore',
  () => {
    // --- état principal ---
    const isProfileCreated = ref(false);
    const isProfessional = ref(false);
    const proName = ref<string | null>(null);
    const clientName = ref<string | null>(null);
    const clientUuid = ref<string | null>(null);
    const professionalUuid = ref<string | null>(null);

    const user = ref<User>();
    const professionalUser = ref<ProfessionalProfile>();
    const clientProfile = ref<clientProfile>();
    const isProfilUpdate = ref(false);
    const isStoringUserAccepted = ref(false);
    const professionalServices = ref<Services[]>([]);
    const keywords = ref<Keywords[]>([]);
    const professionalProfileForCustomer = ref<ProfessionalProfile>();

    // --- computed ---
    const category = computed(() => (isProfessional.value ? 'Prestataire' : 'Client'));

    const displayName = computed(() => {
      return isProfessional.value
        ? (proName.value ?? user.value?.username)
        : (clientName.value ?? user.value?.username);
    });

    const initials = computed(() => {
      const name = String(displayName.value || '');
      return name.charAt(0).toUpperCase() || '?';
    });

    // --- setters ---
    const setUser = (userData: User) => {
      user.value = userData;
      isProfessional.value = userData.category === 'professional';
    };

    const setClientProfile = (profile: clientProfile) => {
      clientProfile.value = profile;
      clientName.value = profile.username ?? null;
      isProfileCreated.value = true;
      isProfessional.value = false;
      clientUuid.value = profile.uuid ?? null;
    };

    const setProfessionalUser = (newProfessionalUser: ProfessionalProfile) => {
      professionalUser.value = {
        ...newProfessionalUser,
        email: user.value?.email || '',
        uuid: newProfessionalUser.uuid?.replace(/[""]/g, '') || '',
        category: 'professional',
      };

      console.log(professionalUser.value, 'setProfessionalUser');

      proName.value = professionalUser.value.name ?? null;
      professionalUuid.value = professionalUser.value.uuid ?? null;
      isProfileCreated.value = true;
      isProfessional.value = true;
    };

    const setUserAccepted = (accepted: boolean) => {
      isStoringUserAccepted.value = accepted;
    };

    const setProfessionalServices = (services: Services[]) => {
      professionalServices.value = services;
    };

    const setKeywords = (newKeywords: Keywords[]) => {
      keywords.value = newKeywords;
    };

    const sendProfessionalProfileForCustomer = (profile: ProfessionalProfile) => {
      professionalProfileForCustomer.value = profile;
    };

    const resetUserStore = () => {
      user.value = undefined;
      professionalUser.value = undefined;
      clientProfile.value = undefined;
      clientName.value = null;
      proName.value = null;
      isProfileCreated.value = false;
      isProfessional.value = false;
      isProfilUpdate.value = false;
      isStoringUserAccepted.value = false;
      professionalUuid.value = null;
      clientUuid.value = null;
      professionalServices.value = [];
      keywords.value = [];
      professionalProfileForCustomer.value = undefined;
    };

    return {
      proName,
      clientName,
      isProfessional,
      clientUuid,
      professionalUuid,
      user,
      professionalUser,
      clientProfile,
      isProfileCreated,
      professionalProfileForCustomer,
      isProfilUpdate,
      keywords,
      category,
      displayName,
      initials,
      setUserAccepted,
      setUser,
      setProfessionalUser,
      setProfessionalServices,
      setClientProfile,
      setKeywords,
      sendProfessionalProfileForCustomer,
      resetUserStore,
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);
