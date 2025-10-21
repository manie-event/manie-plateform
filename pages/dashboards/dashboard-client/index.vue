<script setup lang="ts">
import CurrentEvents from '@/components/dashboards/dashboard-client/CurrentEvents.vue';
import Events from '@/components/dashboards/dashboard-client/Events.vue';
import Products from '@/components/dashboards/dashboard-client/ProductsChart.vue';
import ProjectLeap from '@/components/dashboards/dashboard-client/ProjectLeap.vue';
import EmptyState from '@/public/images/empty-state/profil-vide.svg';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import BaseEmptyState from '~/components/common/BaseEmptyState.vue';
import Customers from '~/components/dashboards/dashboard-client/Customers.vue';
import LatestDeals from '~/components/dashboards/dashboard-client/LatestDeals.vue';
import LatestReviews from '~/components/dashboards/dashboard-client/LatestReviews.vue';
import Payments from '~/components/dashboards/dashboard-client/Payments.vue';
import ProductsTable from '~/components/dashboards/dashboard-client/ProductsTable.vue';
import PropositionsPresta from '~/components/dashboards/dashboard-client/PropositionsPresta.vue';
import { useClientProfil } from '~/composables/client-user/UseClientProfil';
import { useKeywords } from '~/composables/professional-user/UseKeywords';
import { useProfessionalService } from '~/services/UseProfessionalService';

const userStore = useUserStore();
const { isProfileCreated, user } = storeToRefs(userStore);
const { getClientProfil } = useClientProfil();
const { getProfessionalService } = useProfessionalService();
const { getAllSectors, getKeywords } = useKeywords();

onMounted(async () => {
  // if (user.value?.category == UserCategory.CONSUMER) {
  //   await getClientProfil();
  // }
  await getProfessionalService();
  await getAllSectors();
  await getKeywords();
});
</script>

<template>
  <!-- Loader -->
  <!-- Loader -->
  <!-- Section principale si profil créé -->
  <v-row v-if="isProfileCreated">
    <!-- Events et CurrentEvents sur la même ligne -->
    <v-col cols="12">
      <v-row>
        <v-col cols="2">
          <Events />
        </v-col>
        <v-col cols="6">
          <div style="display: flex; flex-direction: column">
            <CurrentEvents />
          </div>
        </v-col>
        <v-col cols="4">
          <ProjectLeap />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <PropositionsPresta />
    </v-col>

    <!-- Payments - 6 colonnes -->
    <v-col cols="12" sm="6">
      <Payments />
    </v-col>

    <!-- Products - 6 colonnes -->
    <v-col cols="12" sm="6" class="d-flex">
      <Products />
    </v-col>

    <!-- LatestDeal - 6 colonnes -->
    <v-col cols="12" sm="6">
      <LatestDeals />
    </v-col>

    <!-- Customers - 6 colonnes -->
    <v-col cols="12" sm="6" class="d-flex">
      <Customers />
    </v-col>

    <!-- ProductsTable - 8 colonnes sur grand écran -->
    <v-col cols="12" sm="12" lg="8">
      <ProductsTable />
    </v-col>

    <!-- LatestReviews - pleine largeur -->
    <v-col cols="12" sm="12" lg="12">
      <LatestReviews />
    </v-col>
  </v-row>

  <!-- Section alternative si profil non créé -->
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
</template>
