<script setup lang="ts">
import dashboardHeader from '@/components/lc/Full/vertical-header/index.vue';
import { useCustomizerStore } from '@/stores/customizer';
const customizer = useCustomizerStore();
</script>
// ===============================|| Dashboard Layout ||=============================== //
<template>
  <!-----RTL LAYOUT------->

  <v-locale-provider v-if="customizer.setRTLLayout" rtl>
    <v-app class="authpage" :theme="customizer.actTheme">
      <dashboardHeader />
      <NuxtPage />
    </v-app>
  </v-locale-provider>

  <!-----LTR LAYOUT------->
  <v-locale-provider v-else>
    <v-app class="authpage" :theme="customizer.actTheme">
      <dashboardHeader />
      <NuxtPage />
    </v-app>
  </v-locale-provider>
</template>
<style lang="scss" scoped>
.authpage {
  background: var(--bg-color);
}
</style>
