<script setup lang="ts">
import { clientMenu, professionalProfile } from '@/_mockApis/headerData';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { useAuthentification } from '~/composables/UseAuthentification';
import { useClientProfil } from '~/composables/client-user/UseClientProfil';
import { usePaiementJeton } from '~/composables/professional-user/UsePaiementJeton';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { useUserStore } from '~/stores/userStore';

const { sendLogout } = useAuthentification();
const { getJetonQuantity } = usePaiementJeton();
const { getProfessionalProfileDetails } = useProfessionalProfile();
const { getClientProfil } = useClientProfil();

const userStore = useUserStore();
const {
  user,
  professionalUser,
  clientProfile,
  category,
  displayName,
  initials,
  isProfessional,
  isProfileCreated,
} = storeToRefs(userStore);

const jetonBalance = ref(0);

/** 🎯 Charger les infos nécessaires selon le type de profil */
onMounted(async () => {
  try {
    if (isProfessional.value) {
      await getProfessionalProfileDetails();
      jetonBalance.value = await getJetonQuantity();
    } else {
      await getClientProfil();
    }
  } catch (e) {
    console.warn('Erreur chargement profil header:', e);
  }
});
</script>

<template>
  <v-menu :close-on-content-click="true" class="profile_popup">
    <template #activator="{ props }">
      <div class="text-left px-0 cursor-pointer" v-bind="props">
        <div class="d-flex align-center">
          <div class="avatar">{{ initials }}</div>
          <div class="ml-md-4 d-md-block d-none">
            <h6 class="text-h6 text-black font-weight-semibold">{{ displayName }}</h6>
            <span class="text-subtitle-2 font-weight-medium text-grey100">{{ category }}</span>
          </div>
        </div>
      </div>
    </template>

    <v-sheet rounded="lg" width="385" elevation="10" class="mt-5">
      <div class="px-8 pt-6">
        <div class="d-flex align-center justify-space-between">
          <h6 class="text-h5 font-weight-semibold">Votre profil</h6>
          <Icon icon="ri:close-fill" size="22" class="text-grey100 cursor-pointer opacity-50" />
        </div>

        <div class="d-flex align-center mt-5 pb-6">
          <div class="avatar" :class="{ 'profile-not-defined': !isProfileCreated }">
            {{ initials }}
          </div>
          <div class="ml-5">
            <h6 class="text-h6 text-black font-weight-semibold">{{ displayName }}</h6>
            <span class="text-subtitle-2 font-weight-medium text-grey100">{{ category }}</span>
          </div>
        </div>

        <v-divider />
      </div>

      <div style="height: 100%; max-height: 240px">
        <v-list v-if="isProfessional" class="py-0 theme-list" lines="two">
          <v-list-item
            v-for="item in professionalProfile"
            :key="item.title"
            class="py-4 px-8"
            :to="item.href"
          >
            <template #prepend>
              <v-avatar size="40" class="rounded-lg" :class="'bg-light' + item.bgcolor">
                <Icon
                  :icon="'solar:' + item.avatar"
                  width="25"
                  height="25"
                  :class="'text-' + item.bgcolor"
                />
              </v-avatar>
            </template>

            <div>
              <h6 class="text-h6 font-weight-medium mb-1">{{ item.title }}</h6>
            </div>
            <p class="text-subtitle-1 font-weight-regular text-grey100">
              <b>{{ item.requiresProfile ? jetonBalance : '' }}</b> {{ item.subtitle }}
            </p>
          </v-list-item>
        </v-list>

        <v-list v-else class="py-0 theme-list" lines="two">
          <v-list-item
            v-for="item in clientMenu"
            :key="item.title"
            class="py-4 px-8"
            :to="item.href"
          >
            <template #prepend>
              <v-avatar size="40" class="rounded-lg" :class="'bg-light' + item.bgcolor">
                <Icon
                  :icon="'solar:' + item.avatar"
                  width="25"
                  height="25"
                  :class="'text-' + item.bgcolor"
                />
              </v-avatar>
            </template>

            <div>
              <h6 class="text-h6 font-weight-medium mb-1">{{ item.title }}</h6>
            </div>
          </v-list-item>
        </v-list>
      </div>

      <div class="pb-6 px-8 text-center">
        <v-btn color="primary" size="large" rounded="pill" block @click="sendLogout()">
          Me déconnecter
        </v-btn>
      </div>
    </v-sheet>
  </v-menu>
</template>

<style scoped>
.avatar {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgb(213, 213, 213);
}
.profile-not-defined {
  border: 2px solid rgba(245, 0, 0, 100);
  animation: clignotementAvatar 1s infinite;
}
@keyframes clignotementAvatar {
  0% {
    border-color: rgba(245, 0, 0, 100);
  }
  50% {
    border-color: rgba(245, 0, 0, 0);
  }
  100% {
    border-color: rgba(245, 0, 0, 100);
  }
}
</style>
