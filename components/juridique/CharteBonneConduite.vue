<template>
  <BaseModal v-model="openModal" fullscreen transition="dialog-bottom-transition">
    <template #content>
      <div class="charte__title">
        <h2>{{ CharteBonneConduite.title }}</h2>
        <p>{{ CharteBonneConduite.description }}</p>
      </div>
      <div v-for="section in CharteBonneConduite.sections" class="charte__section">
        <h3>{{ section.subtitle }}</h3>
        <p>{{ section.description }}</p>
      </div>
      <button class="bg-success px-6 py-3" @click="validatingConditions">
        Je valide la charte
      </button>
    </template>
  </BaseModal>
</template>
<script setup lang="ts">
import BaseModal from '@/components/common/BaseModal.vue';
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
