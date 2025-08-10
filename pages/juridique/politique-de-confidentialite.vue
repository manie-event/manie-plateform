<template>
  <h1>{{ politique[0].sectionTitle }}</h1>
  <p>{{ politique[0].sectionDescription }}</p>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, index) in politique[0].sections" :key="index">
      <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <div v-html="item.description.replaceAll('\n', '<br>')"></div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup lang="ts">
import politique from '@/data/politique-de-confidentialite.json';
</script>
