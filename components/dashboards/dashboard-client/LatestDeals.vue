<template>
  <VCard elevation="10" class="roun- progression" v-if="props.event">
    <v-card-title class="text-h5 font-weight-bold"> Progression: </v-card-title>

    <div class="mb-6 pa-6">
      <div class="d-flex justify-space-between mb-2">
        <span class="text-caption"
          >{{ props.event.completedServices }} / {{ props.event.totalServices }} prestataire
          sélectionné</span
        >
        <span class="text-caption font-weight-bold">{{ props.event.progression }}%</span>
      </div>
      <v-progress-linear
        :model-value="props.event.progression"
        color="success"
        height="5"
        rounded
      />
    </div>
  </VCard>
</template>

<script setup lang="ts">
import { VCard } from 'vuetify/components';
import type { EventModelForProposition } from '~/models/events/eventModelForProgression';

const props = defineProps<{
  event?: EventModelForProposition;
}>();
</script>
<style>
.avatar-border {
  border: 2px solid rgb(var(--v-theme-surface));
}
.progression {
  height: 150px;
}
</style>
