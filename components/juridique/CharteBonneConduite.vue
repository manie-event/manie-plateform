<template>
  <v-dialog v-model="openModal" transition="dialog-bottom-transition" class="charte">
    <v-card>
      <v-card-text>
        <div class="charte__title">
          <h2>{{ CharteBonneConduite.title }}</h2>
          <p>{{ CharteBonneConduite.description }}</p>
        </div>
        <div v-for="section in CharteBonneConduite.sections" class="charte__section">
          <h3>{{ section.subtitle }}</h3>
          <p>{{ section.description }}</p>
        </div>
        <v-btn class="bg-btn px-6 py-3" @click="validatingConditions">Je valide la charte</v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import CharteBonneConduite from '@/data/charte-bonne-conduite.json';

const openModal = defineModel<boolean>('openModal');
const emit = defineEmits<{
  (e: 'isCharteBonneConduite', value: boolean): void;
}>();
const validatingConditions = () => {
  openModal.value = false;
  return emit('isCharteBonneConduite', true);
};
</script>
<style lang="scss" scoped>
p {
  font-size: 0.8rem;
  margin-top: 1rem;
}
.charte {
  &__section {
    margin: 2rem 0;
  }
}
</style>
