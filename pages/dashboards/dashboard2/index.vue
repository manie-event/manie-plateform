<script setup lang="ts">
import BaseEmptyState from '@/components/common/BaseEmptyState.vue';
import PayingTable from '@/components/dashboards/dashboard2/PayingTable.vue';
import TextCards from '@/components/dashboards/dashboard2/TextCards.vue';
import WelcomeCard from '@/components/dashboards/dashboard2/WelcomeCard.vue';
import Footer from '@/components/frontpages/layout/Footer.vue';
import EmptyState from '@/public/images/empty-state/profil-vide.png';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { UserCategory } from '~/models/enums/userCategoryEnums';

const userStore = useUserStore();
const { isProfileCreated, user } = storeToRefs(userStore);
const { getProfessionalProfileDetails } = useProfessionalProfile();

onMounted(async () => {
  if (!isProfileCreated.value && user.value?.category == UserCategory.PRESTA) {
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
  <v-row v-else>
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
  <Footer />
</template>
