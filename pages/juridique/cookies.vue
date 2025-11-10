<template>
  <h1>{{ cookies[0].sectionTitle }}</h1>
  <p style="margin-bottom: 15px">{{ cookies[0].sectionDescription }}</p>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, index) in cookies[0].sections" :key="index">
      <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <div v-html="item.description.replaceAll('\n', '<br>')"></div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup lang="ts">
import cookies from '@/data/cookies.json';
</script>
