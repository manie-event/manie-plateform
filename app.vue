<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { usePingService } from './services/UsePingService';

const { ping } = usePingService();
onMounted(() => {
  ping();
});
</script>
