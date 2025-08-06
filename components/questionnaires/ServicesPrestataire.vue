<template>
  <div v-if="currentPage === 2">
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
        @click="selectService(service)"
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
          :class="{ 'v-chip--selected': serviceKeyword.isSelected }"
          :style="{
            backgroundColor: serviceKeyword.isSelected ? 'red' : 'transparent',
            color: serviceKeyword.isSelected ? 'white' : 'inherit',
          }"
          @click="selectKeyword(serviceKeyword)"
        >
          {{ serviceKeyword.value }}
        </v-chip>
      </div>
      {{ currentPage }}
    </div>
  </div>
  <div v-if="currentPage === 3">
    <div v-for="eco in sectorFiltered?.habitudesSection.questions" :key="eco.category">
      <v-divider class="mt-6 w-50"
        ><p class="mt-6"></p>
        {{ eco.question }}
      </v-divider>
      {{ informationToCreateProfessionalService }}
      <div class="service-chip">
        <v-chip
          v-for="serviceKeyword in keywordsByCategory[eco.category]"
          :key="serviceKeyword.id"
          variant="outlined"
          :class="{ 'v-chip--selected': serviceKeyword.isSelected }"
          :style="{
            backgroundColor: serviceKeyword.isSelected ? 'red' : 'transparent',
            color: serviceKeyword.isSelected ? 'white' : 'inherit',
          }"
          @click="selectKeyword(serviceKeyword)"
        >
          {{ serviceKeyword.value }}
        </v-chip>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import questionnairePresta from '@/data/questionnairePresta.json';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { Services } from '~/models/professionalService/Services';

const props = defineProps<{
  sector: string;
  currentPage: number;
}>();

const userStore = useUserStore();
const { professionnalServices, keywords, professionalServiceUuid, professionalUser } =
  storeToRefs(userStore);
const { setServiceUuid } = userStore;

const keywordsArray: string[] = [];
const selectedServiceUuid = ref<string | null>(null);

const sectorFiltered = computed(() =>
  questionnairePresta.find((prestataire) => prestataire.sector === props.sector)
);

const informationToCreateProfessionalService = computed(() => {
  const test = {
    serviceUuid: professionalServiceUuid.value?.uuid,
    professionalUuid: professionalUser.value?.uuid,
    keywordsUuid: keywordsArray,
  };
  console.log(test, 'informationToCreateProfessionalService');
  return test;
});

const keywordsByCategory = computed(() => {
  const grouped: Record<string, Keywords[]> = {};

  if (props.currentPage === 2) {
    const categories: string[] =
      sectorFiltered.value?.servicesSection.questions.map(
        (question: { category: string }) => question.category
      ) || [];
    categories.forEach((category) => {
      grouped[category] = keywords.value.filter(
        (keyword: Keywords) => keyword.category === category
      );
    });
  } else if (props.currentPage == 3) {
    const categories =
      sectorFiltered.value?.habitudesSection?.questions?.map((question) => question.category) || [];
    categories.forEach((category) => {
      grouped[category] = keywords.value.filter(
        (keyword: Keywords) => keyword.category === category
      );
    });
  }
  if (!keywords.value?.length || !sectorFiltered.value?.servicesSection?.questions?.length) {
    return {};
  }

  return grouped;
});

const selectService = (service: Services): string | null => {
  const isCurrentlySelected = selectedServiceUuid.value === service.uuid;

  // Désélectionner tous les services
  professionnalServices.value.forEach((s) => (s.isSelected = false));

  if (isCurrentlySelected) {
    // Si le service était déjà sélectionné, on le désélectionne
    selectedServiceUuid.value = null;
    return null;
  }

  // Sélectionner le nouveau service
  service.isSelected = true;
  selectedServiceUuid.value = service.uuid;

  setServiceUuid(service);
  return service.uuid;
};

const selectKeyword = (serviceKeyword: Keywords) => {
  const index = keywordsArray.indexOf(serviceKeyword.uuid);
  if (index > -1) {
    keywordsArray.splice(index, 1);
    serviceKeyword.isSelected = false;
  } else {
    keywordsArray.push(serviceKeyword.uuid);

    serviceKeyword.isSelected = true;
  }
  return keywordsArray;
};
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
