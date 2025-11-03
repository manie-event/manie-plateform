<script setup lang="ts">
import BaseEmptyState from '@/components/common/BaseEmptyState.vue';
import PayingTable from '@/components/dashboards/dashboard2/PayingTable.vue';
import TextCards from '@/components/dashboards/dashboard2/TextCard.vue';
import WelcomeCard from '@/components/dashboards/dashboard2/WelcomeCard.vue';
import EmptyState from '@/public/images/empty-state/profil-vide.png';
import { storeToRefs } from 'pinia';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { useUserStore } from '~/stores/userStore';

const userStore = useUserStore();
const { user, isProfileCreated } = storeToRefs(userStore);
const { getProfessionalProfileDetails } = useProfessionalProfile();

// const isProfileCreated = ref(localStorage.getItem('profil-created') === 'true');
const isProfessional = ref(localStorage.getItem('is-professional') === 'true');

onMounted(async () => {
  console.log(isProfileCreated.value, 'ISPROFILECREATED');
  console.log(isProfessional.value, 'USERCATEGORY');
  if (isProfileCreated.value && isProfessional.value) {
    await getProfessionalProfileDetails();
  }
});
</script>

<template>
  <v-row v-if="isProfileCreated">
    <!---Welcome cards-->
    <v-col cols="12" sm="12" lg="6">
      <WelcomeCard />
    </v-col>
    <!---Text cards-->
    <v-col cols="12" sm="12" lg="6" class="d-flex">
      <TextCards />
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <PayingTable />
    </v-col>
    <!---Profit Expanse-->
  </v-row>
  <v-row v-else class="dashboard-2">
    <v-col cols="12" class="mt-6">
      <BaseEmptyState>
        <template #image>
          <img :src="EmptyState" alt="Empty State" />
        </template>
        <template #description>
          <h2 class="text-h5">Bienvenue sur Manie</h2>
          <p class="text-subtitle-1">
            Veuillez compléter votre profil professionnel pour accéder à toutes les fonctionnalités.
          </p>
        </template>
      </BaseEmptyState>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.dashboard-2 {
  height: 50vh;
  display: flex;
  align-items: center;
}
</style>
