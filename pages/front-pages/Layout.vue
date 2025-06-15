<script setup lang="ts">
import Footer from '@/components/frontpages/layout/Footer.vue';
</script>
<template>
  <div class="front-wraper bg-surface">
    <!-- <AnnounceBar /> -->
    <!-- <Header /> -->
    <main>
      <slot></slot>
      <!-- This slot will be replaced with page-specific content -->
    </main>
    <Footer />
  </div>
</template>
