<script setup lang="ts">
import Packages from '@/components/frontpages/Homepage/Packages.vue';
import TextBannerCard from '@/components/frontpages/Shared/TextBannerCard.vue';
import DefaultLayout from './Layout.vue';
/*for Blank Layout*/
definePageMeta({
  layout: 'blank',
});
</script>

<template>
  <DefaultLayout>
    <TextBannerCard title="Choose Your Plan" caption="Pricing Page" />
    <Packages />
  </DefaultLayout>
</template>
