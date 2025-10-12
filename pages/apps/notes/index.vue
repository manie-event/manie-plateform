<script setup lang="ts">
// component
import NotesListing from '~~/components/apps/notes/NotesListing.vue';
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Basic -->
  <!-- ---------------------------------------------------- -->
  <v-card elevation="10" class="mt-6">
    <NotesListing />
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
