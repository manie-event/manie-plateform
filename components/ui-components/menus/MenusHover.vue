<script setup lang="ts">
import { ref } from 'vue';
const items = ref([
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]);
</script>

<template>
  <div class="text-center mt-4">
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="secondary" v-bind="props" class="px-4 rounded-pill"> Dropdown </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
