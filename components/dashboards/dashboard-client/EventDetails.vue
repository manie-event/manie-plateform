<template>
  <v-dialog v-model="openEventDetails" max-width="1200">
    <v-card>
      <h3>{{ event }}</h3>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import type { eventModel } from '~/models/events/eventModel';

defineProps<{
  event: eventModel;
}>();
const openEventDetails = defineModel<boolean>('modelValue', { default: false });
</script>
