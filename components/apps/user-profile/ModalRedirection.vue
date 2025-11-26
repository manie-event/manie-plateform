<template>
  <v-dialog v-model="openModal" fullscreen transition="dialog-bottom-transition">
    <div class="modal-redirection__container">
      <img :src="redirectionImg" alt="" />
      <h2 class="text-center">
        <span>Nous avons récolté vos informations avec succès.</span>
        <span>Vous pouvez, maintenant aller sur votre tableau de bord</span>
      </h2>
      <NuxtLink :to="`/dashboards/${redirection}`" class="w-100">
        <v-btn color="rgb(var(--v-theme-acier))" size="large" class="w-100">
          Revenir à votre dashboard
        </v-btn>
      </NuxtLink>
    </div>
  </v-dialog>
</template>
<script setup lang="ts">
import redirectionImg from '@/public/images/profil/handshake.webp';

defineProps<{
  redirection: string;
}>();

const openModal = defineModel<boolean>();
</script>
<style lang="scss" scoped>
.modal-redirection {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: white;
    padding: 1rem;
    max-width: 1280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5rem 2rem;
    border-radius: 0.5rem;
    width: 60vw;
    text-align: center;
    img {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
