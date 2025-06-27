<script setup lang="ts">
import manieFooter from '/images/logos/logo-manie-footer.png';
</script>

<template>
  <div class="logo">
    <img :src="manieFooter" alt="home" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
