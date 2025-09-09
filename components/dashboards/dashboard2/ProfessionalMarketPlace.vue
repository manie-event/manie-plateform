<script setup lang="ts"></script>

<template>
  <v-dialog v-model="openModal" max-width="800">
    <template #activator="{ props }">
      <v-btn v-bind="props">Open Dialog</v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5">Professional Market Place</v-card-title>
      <v-card-text>
        <p>This is a dialog content.</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="openModal = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
const openModal = defineModel<boolean>('openMarketModal', { default: false });
</script>
