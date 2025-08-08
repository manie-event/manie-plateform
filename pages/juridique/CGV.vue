<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, index) in conditions" :key="index">
      <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <div v-html="item.description.replaceAll('\n', '<br>')"></div>

        <v-expansion-panels v-if="item.children">
          <v-expansion-panel v-for="(child, childIndex) in item.children" :key="childIndex">
            <v-expansion-panel-title>{{ child.title }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <div v-html="child.description.replaceAll('\n', '<br>')"></div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup lang="ts">
import conditions from '@/data/cgv.json';
</script>
