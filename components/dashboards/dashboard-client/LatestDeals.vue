<template>
  <VCard elevation="5" class="roun-" v-if="props.event">
    <v-card-text class="text-subtitle-1 font-weight-bold"> Votre progression : </v-card-text>
    <div class="pa-6">
      <div class="d-flex justify-space-between mb-2">
        <span class="text-caption"
          >{{ props.event.completedServices }} / {{ props.event.totalServices }} prestataire
          sélectionné</span
        >
        <span class="text-caption font-weight-bold">{{ props.event.progression }}%</span>
      </div>
      <v-progress-linear
        :model-value="props.event.progression"
        color="#293b57"
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
