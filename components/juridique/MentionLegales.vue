<template>
  <!-- Modale -->
  <v-dialog v-model="openModal" max-width="800" transition="dialog-bottom-transition" scrollable>
    <v-card class="rounded-xl">
      <!-- Contenu principal -->
      <v-card-text class="py-6 px-6" style="max-height: 80vh; overflow-y: auto">
        <h1 class="text-3xl font-bold text-center mb-10 text-[#F39454]">
          Mentions légales et conditions générales
        </h1>

        <!-- Boucle sur les grandes sections -->
        <div v-for="(section, index) in conditions" :key="index" class="mb-10">
          <!-- Titre principal rose -->
          <h2 class="text-2xl font-semibold mb-4 text-[#F39454]">
            {{ section.sectionTitle }}
          </h2>

          <!-- Accordéons Vuetify -->
          <v-expansion-panels multiple class="bg-white rounded-lg shadow-sm">
            <v-expansion-panel
              v-for="(item, i) in section.sections"
              :key="i"
              elevation="0"
              class="border-b border-gray-100"
            >
              <v-expansion-panel-title class="font-medium text-gray-800 text-base">
                {{ item.title }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-gray-600 text-sm leading-relaxed">
                <div v-html="item.description"></div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        <!-- Pied de carte -->
        <v-btn
          color="#F39454"
          class="text-white font-semibold px-8 py-3 rounded-pill"
          @click="validatingConditions"
        >
          Je valide la charte
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import conditionsData from '@/data/mentions-legales-politiques.json'; // ton JSON généré
import { ref } from 'vue';

// Liaison avec le parent
const openModal = defineModel<boolean>('openModal');
const emit = defineEmits<{ (e: 'isCharteMentionsLegales', value: boolean): void }>();

// Données statiques
const conditions = ref(conditionsData);
const lastUpdated = ref('Novembre 2025');
const currentYear = new Date().getFullYear();

// Validation
const validatingConditions = () => {
  openModal.value = false;
  emit('isCharteMentionsLegales', true);
};
</script>

<style scoped>
.v-expansion-panel-title {
  background-color: #fafafa;
}
.v-expansion-panel-title:hover {
  background-color: #fff6ef;
}
.v-expansion-panel-text {
  background-color: #fff;
}
</style>
