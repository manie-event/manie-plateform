<script setup lang="ts">
// component
import type { eventModel } from '~/models/events/eventModel';
import NotesListing from '~~/components/apps/notes/NotesListing.vue';

defineProps<{
  event?: eventModel;
}>();
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Basic -->
  <!-- ---------------------------------------------------- -->
  <v-card elevation="10">
    <NotesListing :event />
    <!-- <template v-slot:rightpart><NotesContent /> </template> -->

    <!-- <template v-slot:mobileLeftContent><NotesListing /> </template> -->
  </v-card>
</template>

<style scoped lang="scss">
@media (max-width: 1279px) {
  .v-card {
    position: unset;
  }
}
</style>
