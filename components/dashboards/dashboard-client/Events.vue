<template>
  <v-card elevation="10" class="events">
    <v-card-text class="position-relative events__container">
      <div class="d-flex justify-start">
        <div class="mb-6">
          <h5 class="v-card-title">Créez un évenènement</h5>
        </div>
      </div>

      <v-btn @click="openModal = !openModal" class="events__add-button" style="height: 100px"
        >+</v-btn
      >
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
  background: rgb(var(--v-theme-background));
  &__container {
    position: relative;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 1.5rem;
  }
  &__add-button {
    width: 70px;
    height: 70px !important;
    position: relative;
    background: rgb(var(--v-theme-lightprimary));
    border-radius: 50% !important;
    color: rgb(var(--v-theme-background));
    font-size: 1rem;
    font-weight: 700;
    top: 30px;
  }
}
</style>
