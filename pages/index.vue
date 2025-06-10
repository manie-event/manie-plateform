<script setup lang="ts">
import LpFooter from '@/components/landingpage/layout/Footer.vue';
import LpHeader from '@/components/landingpage/layout/Header.vue';
import Purchase from '@/components/landingpage/section/Purchase.vue';
import Revolution from '@/components/landingpage/section/Revolution.vue';
import Features from '@/components/landingpage/section/otherFeatures.vue';
import UserReview from '@/components/landingpage/section/userReview.vue';
import { onMounted } from 'vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init();
});

/*for Blank Layout*/
definePageMeta({
  layout: 'blank',
});
</script>

<template>
  <div class="lp-wraper">
    <!--Header-->
    <ClientOnly>
      <LpHeader />
    </ClientOnly>
    <!----------->
    <!--Content-->
    <Revolution />
    <!-- <OurProducts /> -->
    <Features />
    <UserReview />
    <Purchase />
    <!----------->
    <!--Footer-->
    <LpFooter />
    <!----------->
  </div>
</template>
