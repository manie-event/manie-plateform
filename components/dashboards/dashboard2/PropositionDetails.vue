<template>
  <v-dialog v-model="openPropositionDetail" max-width="800">
    <v-card>
      <v-card-text>
        <v-card>
          <v-card-text>
            {{ props.selectedProposition }}
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="openPropositionDetail = false">Fermer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';

const props = defineProps<{
  selectedProposition: EventModelForProposition;
}>();

const openPropositionDetail = defineModel('openPropositionDetail', { default: false });
</script>
