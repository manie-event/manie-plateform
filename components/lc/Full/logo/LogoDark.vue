<script setup lang="ts">
import logoManie from '/images/logos/logo-manie.svg';
</script>
<template>
  <div class="logo">
    <NuxtLink to="/">
      <img :src="logoManie" alt="home" class="w-50 h-10" />
    </NuxtLink>
  </div>
</template>
