<script setup lang="ts">
import Footer from '@/components/frontpages/layout/Footer.vue';
import LpHeader from '@/components/landingpage/layout/Header.vue';
import { onMounted } from 'vue';
import Homepage from './front-pages/Homepage.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePingService } from '../services/UsePingService';

const { ping } = usePingService();

onMounted(() => {
  AOS.init();
  ping();
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
    <Homepage />
    <!-- <OurProducts /> -->
    <!-- <Features />
    <UserReview />
    <Purchase /> -->
    <!----------->
    <!--Footer-->
    <Footer />
    <!----------->
  </div>
</template>
