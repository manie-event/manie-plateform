<template>
  <div v-for="eco in sectorFiltered?.habitudesSection.questions">
    <v-divider class="mt-6 w-50"
      ><p class="mt-6"></p>
      {{ eco.question }}
    </v-divider>
    <div class="service-chip">
      <v-chip
        v-for="serviceKeyword in keywordsByEcoCategory[eco.category]"
        :key="serviceKeyword.id"
        variant="outlined"
        :color="serviceKeyword.isSelected ? 'primary' : undefined"
      >
        {{ serviceKeyword.value }}
      </v-chip>
    </div>
  </div>
</template>
<script setup lang="ts">
import questionnairePresta from '@/data/questionnairePresta.json';
import type { Keywords } from '~/models/professionalServices/Keywords';
const props = defineProps<{
  sector: string;
}>();

const userStore = useUserStore();
const { professionnalServices, keywords } = storeToRefs(userStore);

const sectorFiltered = computed(() =>
  questionnairePresta.find((prestataire) => prestataire.sector === props.sector)
);

const keywordsByEcoCategory = computed(() => {
  if (!keywords.value?.length || !sectorFiltered.value?.habitudesSection?.questions?.length) {
    return {};
  }
  const grouped: Record<string, Keywords[]> = {};
  const categories = sectorFiltered.value.habitudesSection.questions.map(
    (question) => question.category
  );
  categories.forEach((category) => {
    grouped[category] = keywords.value.filter((keyword) => keyword.category === category);
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
