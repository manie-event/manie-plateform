<script setup lang="ts">
import Customers from '@/components/dashboards/dashboard-client/Customers.vue';
import LatestDeal from '@/components/dashboards/dashboard-client/LatestDeals.vue';
import LatestReviews from '@/components/dashboards/dashboard-client/LatestReviews.vue';
import Payments from '@/components/dashboards/dashboard-client/Payments.vue';
import Products from '@/components/dashboards/dashboard-client/ProductsChart.vue';
import ProductsTable from '@/components/dashboards/dashboard-client/ProductsTable.vue';
import VisitFromUsa from '@/components/dashboards/dashboard-client/VisitFromUsa.vue';
import Snackbar from '@/components/dashboards/snackbar.vue';
import EmptyState from '@/public/images/empty-state/profil-vide.png';
import BaseEmptyState from '~/components/common/BaseEmptyState.vue';

const userStore = useUserStore();
const { isProfessionalProfileCreated } = storeToRefs(userStore);

onMounted(() => {
  if (isProfessionalProfileCreated.value) {
  }
});
</script>

<template>
  <!-- Loader -->
  <Snackbar />
  <!-- Loader -->
  <v-row v-if="isProfessionalProfileCreated">
    <!-- Congratulation Card -->
    <v-col cols="12" sm="12" md="12" lg="6">
      <v-row>
        <!-- Payment Card  -->
        <v-col cols="12" sm="6">
          <Payments />
        </v-col>
        <!-- Product Card -->
        <v-col cols="12" sm="6" class="d-flex">
          <Products />
        </v-col>
        <!-- LatestDeal Card -->
        <v-col cols="12" sm="6">
          <LatestDeal />
        </v-col>
        <!-- Customer Card -->
        <v-col cols="12" sm="6" class="d-flex">
          <Customers />
        </v-col>
      </v-row>
    </v-col>
    <!-- Products Table  -->
    <v-col cols="12" sm="12" lg="8">
      <ProductsTable />
    </v-col>
    <!-- Visit From USA  -->
    <v-col cols="12" sm="12" lg="4">
      <VisitFromUsa />
    </v-col>
    <!-- Latest reviews -->
    <v-col cols="12" sm="12" lg="12">
      <LatestReviews />
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
</template>
