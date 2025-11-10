<template>
  <div class="progression-event" v-if="props.currentEventService">
    <div class="text-subtitle-1">Votre progression :</div>
    <div class="pa-6 progression-event__container">
      <div class="d-flex justify-space-between mb-2">
        <span class="text-caption"
          >{{ filteredProposition?.length }} / {{ props.currentEventService.length }} prestataire
          sélectionné</span
        >
        <span class="text-caption font-weight-bold">{{}}%</span>
      </div>
      <v-progress-linear :model-value="progressionEvent" color="#293b57" height="5" rounded />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VCard } from 'vuetify/components';
import type { eventService } from '~/models/events/eventModel';
import type { PropositionInterface } from '~/models/events/eventModelForProposition';

const props = defineProps<{
  proposition?: PropositionInterface[];
  currentEventService: eventService[];
}>();

const filteredProposition = computed(() => {
  if (!props.proposition) return [];
  return props.proposition.filter((proposition) => proposition.status === 'completed');
});

const progressionEvent = computed(() => {
  if (!props.currentEventService?.length) return 0;
  return Math.round((filteredProposition.value.length / props.currentEventService.length) * 100);
});
</script>
<style lang="scss" scoped>
.progression-event {
  height: 230px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px 5px rgb(var(--v-theme-darkBg));
  padding: 1rem;
  background: rgb(var(--v-theme-containerBg));
  &__container {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
