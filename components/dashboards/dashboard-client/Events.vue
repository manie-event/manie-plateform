<template>
  <v-btn @click="openModal = !openModal" class="events__add-button" style="height: 100px"
    >Créer un évènement</v-btn
  >
  <CustomerForm v-if="openModal" v-model:open-customer-form="openModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';

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
