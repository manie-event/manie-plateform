<template>
  <h1>{{ politique[0].sectionTitle }}</h1>
  <p style="margin-bottom: 15px">{{ politique[0].sectionDescription }}</p>
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
<style scoped>
.v-expansion-panel-text ul {
  list-style-type: disc;
  margin-left: 20px;
  padding-left: 10px;
}

.v-expansion-panel-text li {
  margin-bottom: 6px;
  line-height: 1.5;
}
</style>
