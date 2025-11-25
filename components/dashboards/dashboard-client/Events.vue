<template>
  <v-row class="d-flex justify-space-between align-center">
    <v-col cols="12" lg="6" class="d-flex flex-column">
      <h1 class="text-h3">Bienvenue,</h1>
      <h5 class="text-h6">{{ clientName ?? user?.username }}, voici un résumé de vos activités</h5>
    </v-col>
    <v-col cols="12" lg="6" class="events__cta">
      <v-btn @click="eventCreation()" class="events__add-button">Créer un évènement</v-btn>
    </v-col>
    <CreateEventForm v-if="openModal" v-model:open-customer-form="openModal" />
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CreateEventForm from '~/components/questionnaires/CreateEventForm.vue';
import { useSector } from '~/composables/sector/UseSector';

const { clientName, user } = storeToRefs(useUserStore());
const openModal = ref(false);

const { getListSector } = useSector();

const eventCreation = async () => {
  openModal.value = !openModal.value;
  await getListSector();
};
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
  &__cta {
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1250px) {
      display: flex;
      justify-content: flex-start;
    }
  }
  &__add-button {
    position: relative;
    background: rgb(var(--v-theme-peach));
    color: rgb(var(--v-theme-background));
    font-weight: 700;
  }
}
</style>
