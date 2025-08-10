<template>
  <h1>{{ mentions[0].sectionTitle }}</h1>
  <p v-html="linkify(mentions[0].sectionDescription)"></p>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, index) in mentions[0].sections" :key="index">
      <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <div v-html="linkify(item.description).replaceAll('\n', '<br>')"></div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup lang="ts">
import mentions from '@/data/mentions-legales.json';
import { linkify } from '~/utils/text-utils';
</script>
