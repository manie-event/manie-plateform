<template>
  <v-dialog v-model="openModal" fullscreen transition="dialog-bottom-transition">
    <div class="modal-redirection__container">
      <img :src="redirectionImg" alt="" />
      <h2>Votre profil a été mis à jour, félicitations.</h2>
      <NuxtLink :to="`/dashboards/${redirection}`" @click="setUpdateProfile(false)" class="w-100">
        <v-btn color="primary" size="large" class="w-100"> Revenir à votre dashboard </v-btn>
      </NuxtLink>
    </div>
  </v-dialog>
</template>
<script setup lang="ts">
import redirectionImg from '@/public/images/profile/handshake.png';

defineProps<{
  redirection: string;
}>();

const openModal = defineModel<boolean>();

const { setUpdateProfile } = useUserStore();
</script>
<style lang="scss" scoped>
.modal-redirection {
  &__container {
    display: flex;
    flex-direction: column;
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
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
