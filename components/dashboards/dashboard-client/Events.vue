<template>
  <div class="d-flex justify-space-between align-center">
    <div class="d-flex flex-column">
      <h1 class="text-h3">Bienvenue,</h1>
      <h5 class="text-h6">{{ clientName ?? user?.username }}, voici un résumé de vos activités</h5>
    </div>
    <v-btn @click="openModal = !openModal" class="events__add-button">Créer un évènement</v-btn>
    <CustomerForm v-if="openModal" v-model:open-customer-form="openModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';

const { clientName, user } = storeToRefs(useUserStore());
const openModal = ref(false);
</script>
<style lang="scss" scoped>
.events {
  background: rgb(var(--v-theme-containerBg));
  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  &__add-button {
    position: relative;
    background: rgb(var(--v-theme-lightprimary));
    color: rgb(var(--v-theme-background));
    font-weight: 700;
  }
}
</style>
