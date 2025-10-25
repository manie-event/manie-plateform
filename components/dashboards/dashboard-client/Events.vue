<template>
  <v-card elevation="10" class="events">
    <v-card-text class="position-relative events__container">
      <div class="d-flex justify-space-between">
        <div class="mb-6">
          <h5 class="title">Créez un évenènement</h5>
        </div>
      </div>

      <button @click="openModal = !openModal" class="events__add-button">+</button>
      <CustomerForm v-if="openModal" v-model:open-customer-form="openModal" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';

const openModal = ref(false);
</script>
<style lang="scss" scoped>
.events {
  background: transparent;
  &__container {
    position: relative;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
  }
  &__title {
    color: var(--manie-primary);
  }
  &__add-button {
    font-weight: 900;
    font-size: 1.2rem;
    width: 70px;
    height: 70px;
    border-radius: 12px;
    border: 1px solid var(--manie-primary);
    transition: all 0.4s ease-in;
    color: var(--manie-primary);
    &:hover {
      background: var(--manie-primary);
      color: rgb(255, 255, 255);
      transition: all 0.4s ease-out;
    }
  }
}
</style>
