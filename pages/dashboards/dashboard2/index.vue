<script setup lang="ts">
import BaseEmptyState from '@/components/common/BaseEmptyState.vue';
import FigmaCard from '@/components/dashboards/dashboard2/FigmaCard.vue';
import PayingTable from '@/components/dashboards/dashboard2/PayingTable.vue';
import ProductSales from '@/components/dashboards/dashboard2/ProductSales.vue';
import ProfileCards from '@/components/dashboards/dashboard2/ProfileCards.vue';
import ProfitExpanse from '@/components/dashboards/dashboard2/ProfitExpanse.vue';
import TextCards from '@/components/dashboards/dashboard2/TextCards.vue';
import TraficDistribution from '@/components/dashboards/dashboard2/TrafficDistribution.vue';
import UpcommingSchedule from '@/components/dashboards/dashboard2/UpcommingSchedule.vue';
import WelcomeCard from '@/components/dashboards/dashboard2/WelcomeCard.vue';
import Footer from '@/components/frontpages/layout/Footer.vue';
import EmptyState from '@/public/images/empty-state/profil-vide.png';
import { useProfessionalProfile } from '~/composables/ProfessionalUser/UseProfessionalProfile';
const userStore = useUserStore();
const { isProfileCreated } = storeToRefs(userStore);
const { getProfessionalProfileDetails } = useProfessionalProfile();

onMounted(() => {
  if (isProfileCreated.value) {
    getProfessionalProfileDetails();
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
    <!---Profit Expanse-->
    <v-col cols="12" sm="12" lg="8">
      <ProfitExpanse />
    </v-col>
    <!---Product Sales-->
    <v-col cols="12" sm="12" lg="4" class="d-flex">
      <ProductSales />
    </v-col>
    <!---Traffic distribution-->
    <v-col cols="12" sm="12" lg="6">
      <TraficDistribution />
    </v-col>
    <!---Profile / Figma Card-->
    <v-col cols="12" sm="12" lg="6">
      <v-row>
        <v-col cols="12" sm="6">
          <ProfileCards />
        </v-col>
        <v-col cols="12" sm="6" class="d-flex">
          <FigmaCard />
        </v-col>
      </v-row>
    </v-col>
    <!---Paying Table-->
    <v-col cols="12" sm="12" lg="8">
      <PayingTable />
    </v-col>
    <!---Upcomming schedule-->
    <v-col cols="12" sm="12" lg="4">
      <UpcommingSchedule />
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">
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
