<script setup lang="ts">
import FeatureTabs from '@/components/frontpages/Homepage/FeatureTabs.vue';
import Mainbanner from '@/components/frontpages/Homepage/Mainbanner.vue';
import PurchaseTemplate from '@/components/frontpages/Homepage/PurchaseTemplate.vue';
/*for Blank Layout*/
definePageMeta({
  layout: 'blank',
});
</script>

<template>
  <div>
    <Mainbanner />
    <FeatureTabs />
    <PurchaseTemplate />
    <!-- <OurClients />
    <OurTeam />
    <ContactBar />
    <ClientReviews />
    <Componies />
    <Highlights />
    <Packages />
    <SecurePayment />
    <FAQ /> -->
  </div>
</template>
