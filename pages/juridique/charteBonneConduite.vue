<template>
  <div class="charte__title">
    <h2>{{ CharteBonneConduite.title.toLocaleUpperCase() }}</h2>
    <p>{{ CharteBonneConduite.description }}</p>
  </div>
  <div v-for="section in CharteBonneConduite.sections" class="charte__section">
    <h3>{{ section.subtitle }}</h3>
    <p v-html="section.description"></p>
  </div>
</template>
<script setup lang="ts">
import CharteBonneConduite from '@/data/charte-bonne-conduite.json';
</script>
<style lang="scss" scoped>
.charte {
  &__section {
    margin: 15px 0;
  }
}
</style>
