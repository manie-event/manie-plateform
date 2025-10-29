<script setup lang="ts">
import Packages from '~/components/frontpages/Homepage/FormulesAccompagnement.vue';
import DefaultLayout from './Layout.vue';
/*for Blank Layout*/
definePageMeta({
  layout: 'blank',
});
</script>

<template>
  <DefaultLayout>
    <Packages />
    <div class="sm:pb-14 pb-8">
      <!-- <SecurePayment /> -->
    </div>
    <!-- <PurchaseTemplate /> -->
  </DefaultLayout>
</template>
