<script setup lang="ts">
import CurrentEvents from '@/components/dashboards/dashboard-client/CurrentEvents.vue';
import Customers from '@/components/dashboards/dashboard-client/Customers.vue';
import LatestDeal from '@/components/dashboards/dashboard-client/LatestDeals.vue';
import LatestReviews from '@/components/dashboards/dashboard-client/LatestReviews.vue';
import Payments from '@/components/dashboards/dashboard-client/Payments.vue';
import Products from '@/components/dashboards/dashboard-client/ProductsChart.vue';
import ProductsTable from '@/components/dashboards/dashboard-client/ProductsTable.vue';
import VisitFromUsa from '@/components/dashboards/dashboard-client/VisitFromUsa.vue';
import Snackbar from '@/components/dashboards/snackbar.vue';
import { useClientProfil } from '@/composables/client-user/UseClientProfil';
import EmptyState from '@/public/images/empty-state/profil-vide.png';
import BaseEmptyState from '~/components/common/BaseEmptyState.vue';
import Events from '~/components/dashboards/dashboard-client/Events.vue';
import { useKeywords } from '~/composables/professional-user/UseKeywords';
import { UserCategory } from '~/models/enums/userCategoryEnums';
import { useProfessionalService } from '~/services/UseProfessionalService';

const userStore = useUserStore();
const { isProfileCreated, user } = storeToRefs(userStore);
const { getClientProfil } = useClientProfil();
const { getProfessionalService } = useProfessionalService();
const { getAllSectors, getKeywords } = useKeywords();

onMounted(async () => {
  if (user.value?.category == UserCategory.CONSUMER) {
    await getClientProfil();
  }
  await getProfessionalService();
  await getAllSectors();
  await getKeywords();
});
</script>

<template>
  <!-- Loader -->
  <Snackbar />
  <!-- Loader -->
  <!-- Section principale si profil créé -->
  <v-row v-if="isProfileCreated">
    <!-- Events et CurrentEvents sur la même ligne -->
    <v-col cols="12">
      <v-row>
        <v-col cols="4">
          <Events />
        </v-col>
        <v-col cols="8">
          <div style="display: flex; flex-direction: column">
            <CurrentEvents />
          </div>
        </v-col>
      </v-row>
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
      <LatestDeal />
    </v-col>

    <!-- Customers - 6 colonnes -->
    <v-col cols="12" sm="6" class="d-flex">
      <Customers />
    </v-col>

    <!-- ProductsTable - 8 colonnes sur grand écran -->
    <v-col cols="12" sm="12" lg="8">
      <ProductsTable />
    </v-col>

    <!-- VisitFromUsa - 4 colonnes sur grand écran -->
    <v-col cols="12" sm="12" lg="4">
      <VisitFromUsa />
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
