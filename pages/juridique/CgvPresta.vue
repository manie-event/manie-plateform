<template>
  <div v-for="condition in conditions" :key="condition.sectionTitle" class="mb-6">
    <h2>{{ condition.sectionTitle }}</h2>
    <p style="margin-bottom: 15px">{{ condition.sectionDescription }}</p>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, index) in condition.sections" :key="index">
        <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div v-html="item.description"></div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script setup lang="ts">
import conditions from '@/data/cgv-presta.json';
</script>
