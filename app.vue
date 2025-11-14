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
  color: rgb(var(--v-theme-lightprimary));
  transition: all 0.4s ease-in;
  background: none;

  &:hover {
    background: #fde3ae;
    padding: 0px 10px;
    border-radius: 15px;
    transition: all 0.4s ease-out;
  }
}

@media (max-width: 600px) {
  .v-field__input,
  .v-input__control,
  .v-text-field input,
  .v-textarea textarea,
  input,
  textarea,
  select {
    font-size: 16px !important;
    transform: scale(0.9);
    transform-origin: left center;
  }
}
</style>
