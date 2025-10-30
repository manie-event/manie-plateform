<script setup lang="ts">
import { ref } from 'vue';
/*Call Components*/
import Products from '@/components/dashboards/dashboard-client/ProductsChart.vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
// theme breadcrumb
const page = ref({ title: 'Charts' });
const breadcrumbs = ref([
  {
    text: 'Home',
    disabled: false,
    href: '/',
  },
  {
    text: 'Charts',
    disabled: true,
    href: '#',
  },
]);
</script>
<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <!-- Product Card -->
    <v-col cols="12" lg="3" sm="6" class="d-flex">
      <Products />
    </v-col>
  </v-row>
</template>
