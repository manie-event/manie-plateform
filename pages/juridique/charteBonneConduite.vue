<template>
  <div class="charte__title">
    <h2>{{ CharteBonneConduite.title }}</h2>
    <p>{{ CharteBonneConduite.description }}</p>
  </div>
  <div v-for="section in CharteBonneConduite.sections" class="charte__section">
    <h3>{{ section.subtitle }}</h3>
    <p>{{ section.description }}</p>
  </div>
</template>
<script setup lang="ts">
import CharteBonneConduite from '@/data/charte-bonne-conduite.json';
</script>
