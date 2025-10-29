<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.nuxt-link {
  font-family: 'Poppins';
  text-decoration: unset;
  margin-left: 15px;
  font-weight: 600;
  color: var(--manie-thirdy);
  transition: all 0.4s ease-in;
  background: none;

  &:hover {
    background: #fde3ae;
    padding: 0px 10px;
    border-radius: 15px;
    transition: all 0.4s ease-out;
  }
}
</style>
