<template>
  <div>
    <img :src="Loader" alt="" class="loader" />
  </div>
</template>
<script setup lang="ts">
import Loader from '@/public/images/logos/logo-manie-bleu-ciel.svg';
</script>
<style lang="scss" scoped>
.loader {
  width: 250px;
  animation: loaderAnim 2s infinite;
}

@keyframes loaderAnim {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
