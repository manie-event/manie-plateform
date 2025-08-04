<template>
  <v-divider class="mt-6"
    ><p class="mt-6"></p>
    {{ sectorFiltered?.general.questions[0].question }}</v-divider
  >
  <div class="service-chip">
    <v-chip
      v-for="service in professionnalServices"
      :key="service.id"
      variant="outlined"
      :color="service.isSelected ? 'primary' : undefined"
    >
      {{ service.name }}
    </v-chip>
  </div>
  <v-divider class="mt-6 w-50"
    ><p class="mt-6"></p>
    {{ sectorFiltered?.services }}</v-divider
  >
  <!-- services -->
  <div v-for="service in sectorFiltered?.servicesSection.questions">
    <v-divider class="mt-6 w-50"
      ><p class="mt-6"></p>
      {{ service.question }}
    </v-divider>
    <div class="service-chip">
      <v-chip
        v-for="serviceKeyword in keywordsByCategory[service.category]"
        :key="serviceKeyword.id"
        variant="outlined"
        :color="serviceKeyword.isSelected ? 'primary' : undefined"
        @click="selectService(serviceKeyword)"
      >
        {{ serviceKeyword.value }}
      </v-chip>
    </div>
  </div>
</template>
<script setup lang="ts">
import questionnairePresta from '@/data/questionnairePresta.json';
import type { Keywords } from '~/models/professionalService/Keywords';

const props = defineProps<{
  sector: string;
}>();

const userStore = useUserStore();
const { professionnalServices, keywords } = storeToRefs(userStore);

const sectorFiltered = computed(() => {
  console.log('Filtering sector:', props.sector);
  console.log(
    questionnairePresta.find((prestataire) => prestataire.sector),
    'Filtered sector data'
  );

  return questionnairePresta.find((prestataire) => prestataire.sector === props.sector);
});

const keywordsByCategory = computed(() => {
  if (!keywords.value?.length || !sectorFiltered.value?.servicesSection?.questions?.length) {
    return {};
  }
  const grouped: Record<string, Keywords[]> = {};
  const categories = sectorFiltered.value.servicesSection.questions.map(
    (question) => question.category
  );
  categories.forEach((category) => {
    grouped[category] = keywords.value.filter((keyword: Keywords) => keyword.category === category);
  });

  return grouped;
});
</script>
<style lang="scss" scoped>
.service-chip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}
</style>
