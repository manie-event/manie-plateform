<script setup lang="ts">
import { clientMenu, professionalProfile } from '@/_mockApis/headerData';
import { UserCategory } from '@/models/enums/userCategoryEnums';
import { Icon } from '@iconify/vue';
import { CircleXIcon } from 'vue-tabler-icons';
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

const isProfessional = localStorage.getItem('is-professional');
const username = localStorage.getItem('client-name');
const proName = localStorage.getItem('pro-name');
const jetonBalance = ref(0);
const name = ref('');

const getNameDependingOnCategory = computed(() => {
  if (isProfessional && isProfileCreated.value) {
    return proName ? proName : professionalUser.value?.name;
  }

  return username;
});

const getCategory = computed(() => {
  if (isProfessional) {
    return UserCategory.PRESTA;
  } else {
    return UserCategory.CLIENT;
  }
});

const getInitials = (name?: string) => {
  if (!name) return '';

  const parts = name.trim().toUpperCase().replace(/\s+/g, ' ');

  if (parts.length === 1) {
    return parts[0].substring(0, 1);
  }

  return parts[0][0];
};

onMounted(async () => {
  if (isProfessional && isProfileCreated.value) {
    const professionalDetail = await getProfessionalProfileDetails();
    jetonBalance.value = await getJetonQuantity();
    name.value = getInitials(professionalDetail.name);
    return professionalDetail;
  } else if (isProfessional && !isProfileCreated.value) {
    const allProfessionalProfile = await getProfessionalProfile();
    jetonBalance.value = await getJetonQuantity();
    name.value = getInitials(allProfessionalProfile.name);

    return allProfessionalProfile;
  } else if (!isProfessional && isProfileCreated) {
    const client = await getClientProfil();
    name.value = getInitials(client.username);
  } else {
    console.warn('Utilisateur non encore chargé ou UUID manquant');
  }
});
</script>

<template>
  <v-menu :close-on-content-click="true" class="profile_popup">
    <template v-slot:activator="{ props }">
      <div class="text-left px-0 cursor-pointer" variant="text" v-bind="props">
        <div class="d-flex align-center">
          <div class="avatar">{{ name }}</div>
          <div class="ml-md-4 d-md-block d-none">
            <h6 class="text-h6 d-flex align-center text-black font-weight-semibold">
              {{ getNameDependingOnCategory }}
            </h6>
            <span class="text-subtitle-2 font-weight-medium text-grey100">{{ getCategory }}</span>
          </div>
        </div>
      </div>
    </template>
    <v-sheet rounded="lg" width="385" elevation="10" class="mt-5">
      <div class="px-8 pt-6">
        <div class="d-flex align-center justify-space-between">
          <h6 class="text-h5 font-weight-semibold">Votre profil</h6>
          <CircleXIcon size="22" class="text-grey100 cursor-pointer opacity-50" />
        </div>

        <div class="d-flex align-center mt-5 pb-6">
          <div
            class="avatar"
            :class="{
              'profile-not-defined': !isProfileCreated,
            }"
          >
            {{ name }}
          </div>
          <div class="ml-5">
            <h6 class="text-h5 mb-n1">{{ getNameDependingOnCategory }}</h6>
            <span class="text-subtitle-1 font-weight-regular text-grey100 font-weight-medium">{{
              getCategory
            }}</span>
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
              'profile-not-defined': !isProfileCreated && !item.requiresProfile,
            }"
          >
            <template v-slot:prepend>
              <v-avatar size="40" class="rounded-lg" :class="'bg-light' + item.bgcolor">
                <!-- <component :is="item.avatar" stroke-width="2" size="25" :class="'text-' + item.bgcolor" /> -->
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
              'profile-not-defined': !isProfileCreated && !item.requiresProfile,
            }"
          >
            <template v-slot:prepend>
              <v-avatar size="40" class="rounded-lg" :class="'bg-light' + item.bgcolor">
                <!-- <component :is="item.avatar" stroke-width="2" size="25" :class="'text-' + item.bgcolor" /> -->
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
        <v-btn color="primary" size="large" rounded="pill" block @click="sendLogout()"
          >Me déconnecter</v-btn
        >
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
