<template>
  <VCard class="date-counter" elevation="10">
    <v-card-text class="pa-0">
      <div class="d-flex flex-column justify-content-center pa-6">
        <h5 class="text-subtitle-1 mb-2">Votre compte à rebours</h5>
        <p class="text-subtitle-1 text-grey100 mb-4">
          Il vous reste :
          <span class="text-h5 font-weight-bold">{{ dateCounterValue }} jours </span>
          avant le début de votre événement.
        </p>
      </div>
    </v-card-text>
  </VCard>
</template>
<script setup lang="ts">
import { dateCounter } from '@/utils/date-utils';
import { VCard } from 'vuetify/components';

const props = defineProps<{
  eventDate: string;
}>();

const dateCounterValue = dateCounter(props.eventDate);
</script>
