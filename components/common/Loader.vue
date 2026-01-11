<template>
  <div class="loader__container">
    <Loader alt="" class="loader__img" />
  </div>
</template>
<script setup lang="ts">
import Loader from '@/public/images/logos/logo-manie-bleu-ciel.svg';
</script>
<style lang="scss" scoped>
.loader {
  &__container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &__img {
    width: 250px;
    animation: loaderAnim 2s infinite;
  }
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
