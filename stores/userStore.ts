import type { ProfessionalProfile, User, clientProfile } from '@/models/user/UserModel';
import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';

export const useUserStore = defineStore(
  'userStore',
  () => {
    /** 👤 Base user data */
    const user = ref<User | null>(null);
    const isProfilUpdate = ref(false);
    const isStoringUserAccepted = ref(false);

    /** 👥 Client profile */
    const clientProfile = ref<clientProfile | null>(null);

    /** 🧑‍🔧 Professional profile */
    const professionalUser = ref<ProfessionalProfile | null>(null);
    const professionalProfileForCustomer = ref<ProfessionalProfile | null>(null);

    /** 🧠 Derived state */
    const isProfessional = computed(() => user.value?.category === 'professional');
    const isProfileCreated = computed(() => !!(clientProfile.value || professionalUser.value));

    const displayName = computed(() => {
      if (isProfessional.value && professionalUser.value?.name) return professionalUser.value.name;
      if (!isProfessional.value && clientProfile.value?.username)
        return clientProfile.value.username;
      return user.value?.username || '';
    });

    const category = computed(() => user.value?.category);

    const initials = computed(() => displayName.value?.charAt(0).toUpperCase() || '?');

    /** 🧩 Mutations */
    const setUser = (userData: User) => {
      user.value = userData;
    };

    const setUpdateProfile = (status: boolean) => {
      isProfilUpdate.value = status;
    };

    /** Client */
    const setClientProfile = (profile: clientProfile) => {
      clientProfile.value = { ...profile };
    };

    const updateClientProfile = (updated: Partial<clientProfile>) => {
      if (!clientProfile.value) clientProfile.value = {} as clientProfile;
      Object.assign(clientProfile.value, updated);
    };

    /** Professional */
    const setProfessionalUser = (profile: ProfessionalProfile) => {
      professionalUser.value = {
        ...profile,
        email: user.value?.email || '',
        uuid: profile.uuid?.replace(/[""]/g, '') || '',
        category: 'professional',
      };
    };

    const sendProfessionalProfileForCustomer = (profile: ProfessionalProfile) => {
      professionalProfileForCustomer.value = profile;
    };

    const setUserAccepted = (accepted: boolean) => {
      isStoringUserAccepted.value = accepted;
    };

    /** 🔁 Reset global state */
    const resetUserStore = () => {
      user.value = null;
      clientProfile.value = null;
      professionalUser.value = null;
      professionalProfileForCustomer.value = null;
      isProfilUpdate.value = false;
      isStoringUserAccepted.value = false;
    };

    // Debug utile
    watch(
      [user, professionalUser, clientProfile],
      ([u, p, c]) => {
        console.log('💾 userStore updated:', {
          user: !!u,
          professionalUser: !!p,
          clientProfile: !!c,
        });
      },
      { deep: true }
    );

    return {
      // State
      user,
      clientProfile,
      professionalUser,
      professionalProfileForCustomer,

      // Flags
      isProfessional,
      isProfilUpdate,
      isStoringUserAccepted,

      // Computed
      displayName,
      initials,
      isProfileCreated,
      category,

      // Setters
      setUser,
      setClientProfile,
      updateClientProfile,
      setProfessionalUser,
      setUserAccepted,
      setUpdateProfile,
      sendProfessionalProfileForCustomer,

      // Utils
      resetUserStore,
    };
  },
  {
    persist: {
      key: 'manie-user',
      storage: localStorage, // ici on met directement l’objet Storage
      pick: ['user', 'professionalUser', 'clientProfile', 'isProfilUpdate'],
    },
  }
);
