<template>
  <v-dialog v-model="openPropositionPro" max-width="800">
    <v-card>
      <v-card-title class="text-h5">Professional Market Place</v-card-title>
      <v-card-text>
        <p>This is a dialog content.</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="openPropositionPro = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const openPropositionPro = defineModel<boolean>('openPropositionPro', { default: false });
</script>
