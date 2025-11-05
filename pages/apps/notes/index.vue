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
  <div class="notes">
    <NotesListing :event />
    <!-- <template v-slot:rightpart><NotesContent /> </template> -->

    <!-- <template v-slot:mobileLeftContent><NotesListing /> </template> -->
  </div>
</template>

<style scoped lang="scss">
.notes {
  height: 230px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px 5px rgb(var(--v-theme-darkBg));
  padding: 1rem;
  background: rgb(var(--v-theme-containerBg));
}
</style>
