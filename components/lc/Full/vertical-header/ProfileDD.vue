<script setup lang="ts">
import { clientMenu, professionalProfile } from '@/_mockApis/headerData';
import { Icon } from '@iconify/vue';
import { useClientProfil } from '~/composables/client-user/UseClientProfil';
import { usePaiementJeton } from '~/composables/professional-user/UsePaiementJeton';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { useAuthentification } from '../../../../composables/UseAuthentification';

const userStore = useUserStore();
const { user, professionalUser, isProfileCreated } = storeToRefs(userStore);

const { sendLogout } = useAuthentification();
const { userTokenBalance } = storeToRefs(useCartStore());
const { getProfessionalProfileDetails, getProfessionalProfile } = useProfessionalProfile();
const { getClientProfil } = useClientProfil();
const { getJetonQuantity } = usePaiementJeton();

/** Normalisation localStorage -> bool / strings */
const isProfessional = ref(localStorage.getItem('is-professional') === 'true');
const usernameLS = ref(localStorage.getItem('client-name') || '');
const proNameLS = ref(localStorage.getItem('pro-name') || '');

const jetonBalance = ref(0);
const initials = ref('?');

/** Helper minimaliste */
const firstInitial = (str?: string) => (str ? str.trim().charAt(0).toUpperCase() : '?');

/** Flag anti-flicker : si le store n’est pas prêt, on se rabat sur le LS */
const profileCreated = computed(() => {
  const storeVal = isProfileCreated.value;
  if (typeof storeVal === 'boolean') return storeVal;
  return localStorage.getItem('pp-created') === 'true';
});

/** Nom “courant” pour affichage */
const displayName = computed(() => {
  if (isProfessional.value && profileCreated.value) {
    return proNameLS.value || professionalUser.value?.name || user.value?.username || '';
  }
  return usernameLS.value || user.value?.username || '';
});

const category = computed(() => {
  console.log(user.value?.category);

  if (isProfessional.value) {
    return 'Prestataire';
  } else {
    return 'Client';
  }
});
/** Toujours avoir une initiale (sans dépendre des fetchs) */
watch(
  displayName,
  (val) => {
    initials.value = firstInitial(val);
  },
  { immediate: true }
);

/** Charger les détails en tâche de fond pour “stabiliser” les noms + balances */
watchEffect(async () => {
  try {
    if (isProfessional.value && profileCreated.value) {
      const pro = await getProfessionalProfileDetails();
      proNameLS.value = pro?.name || proNameLS.value;
      localStorage.setItem('pro-name', proNameLS.value || '');
      jetonBalance.value = await getJetonQuantity();
    } else if (isProfessional.value && !profileCreated.value) {
      const pro = await getProfessionalProfile();
      proNameLS.value = pro?.name || proNameLS.value;
      localStorage.setItem('pro-name', proNameLS.value || '');
      jetonBalance.value = await getJetonQuantity();
    } else if (!isProfessional.value && profileCreated.value) {
      const cli = await getClientProfil();
      usernameLS.value = cli?.username || usernameLS.value;
      localStorage.setItem('client-name', usernameLS.value || '');
    }
  } catch (e) {
    console.warn('Chargement profil/jetons:', e);
  }
});
</script>

<template>
  <v-menu :close-on-content-click="true" class="profile_popup">
    <template v-slot:activator="{ props }">
      <div class="text-left px-0 cursor-pointer" variant="text" v-bind="props">
        <div class="d-flex align-center">
          <div class="avatar">{{ initials }}</div>
          <div class="ml-md-4 d-md-block d-none">
            <h6 class="text-h6 d-flex align-center text-black font-weight-semibold">
              {{ displayName }}
            </h6>
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
          <div
            class="avatar"
            :class="{
              'profile-not-defined': !profileCreated,
            }"
          >
            {{ initials }}
          </div>
          <div class="ml-5">
            <h6 class="text-h6 d-flex align-center text-black font-weight-semibold">
              {{ displayName }}
            </h6>
            <span class="text-subtitle-2 font-weight-medium text-grey100">{{ category }}</span>
          </div>
        </div>
        <v-divider></v-divider>
      </div>

      <div style="height: 100%; max-height: 240px">
        <v-list class="py-0 theme-list" lines="two" v-if="isProfessional">
          <v-list-item
            v-for="item in professionalProfile"
            :key="item.title"
            class="py-4 px-8 custom-text-primary"
            :to="item.href"
            :class="{
              'profile-not-defined': !profileCreated && !item.requiresProfile,
            }"
          >
            <template v-slot:prepend>
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
              <h6 class="text-h6 font-weight-medium mb-1 custom-title">
                {{ item.title }}
              </h6>
            </div>
            <p class="text-subtitle-1 font-weight-regular text-grey100">
              <b>{{ item.requiresProfile ? jetonBalance : '' }}</b>
              {{ item.subtitle }}
            </p>
          </v-list-item>
        </v-list>

        <v-list class="py-0 theme-list" lines="two" v-else>
          <v-list-item
            v-for="item in clientMenu"
            :key="item.title"
            class="py-4 px-8 custom-text-primary"
            :to="item.href"
            :class="{
              'profile-not-defined': !profileCreated && !item.requiresProfile,
            }"
          >
            <template v-slot:prepend>
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
              <h6 class="text-h6 font-weight-medium mb-1 custom-title">
                {{ item.title }}
              </h6>
            </div>
            <p class="text-subtitle-1 font-weight-regular text-grey100">
              <b>{{ item.requiresProfile ? userTokenBalance : '' }}</b>
            </p>
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
  position: relative;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgb(213, 213, 213);
}
.profile-not-defined {
  padding: 2px;
  border-radius: 50%;
  border: 2px solid rgba(245, 0, 0, 100);
  animation: clignottementAvatar 1s infinite;
}
@keyframes clignottementAvatar {
  0% {
    border: 2px solid rgba(245, 0, 0, 100);
  }
  50% {
    border: 2px solid rgba(245, 0, 0, 0);
  }
  100% {
    border: 2px solid rgba(245, 0, 0, 100);
  }
}
</style>
