<script setup lang="ts">
import homePage from '@/components/frontpages/Homepage/HomeDescription.vue';
import Mainbanner from '@/components/frontpages/Homepage/Mainbanner.vue';
/*for Blank Layout*/
definePageMeta({
  layout: 'blank',
});
</script>

<template>
  <div>
    <Mainbanner />
    <homePage />
  </div>
</template>
