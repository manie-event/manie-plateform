<template>
  <div class="base-component">
    <div class="image-container">
      <slot name="bg-image">
        <img src="@/public/images/backgrounds/profilebg.jpg" alt="Default" class="bg-img" />
      </slot>
      <slot name="logo">
        <img :src="manieLogo" alt="logo manie" class="manie-logo" />
      </slot>
    </div>
    <div class="content">
      <slot name="description"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import manieLogo from '@/public/images/logos/logo-manie-creme.svg';
</script>
<style lang="scss" scoped>
.base-component {
  position: relative;
  width: 50vw;
  height: 100%;
  background: white;
  .image-container {
    position: relative;
    padding: 1rem;
    border-radius: 0.5rem;
    height: 100dvh;
    .manie-logo {
      position: absolute;
      width: 80px;
      top: 1.2rem;
      left: 1.2rem;
    }
  }
}
@media screen and (max-width: 960px) {
  .base-component {
    width: 100vw;
  }
}
</style>
