<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
</script>
<template>
  <div class="d-flex">
    <v-btn @click="show = !show" color="primary" class="px-4 rounded-pill">
      {{ !show ? 'Show Tooltip' : 'Hide Tooltip' }}
    </v-btn>
    <v-tooltip v-model="show" top>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" class="ml-6" color="primary" flat>
          <v-icon> mdi-cart </v-icon>
        </v-btn>
      </template>
      <span>Programmatic tooltip</span>
    </v-tooltip>
  </div>
</template>
