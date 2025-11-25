<template>
  <v-dialog v-model="serviceModal" max-width="800">
    <v-card style="padding: 30px; background: rgb(var(--v-theme-background))">
      <!-- SECTION : CHOIX DU SECTEUR -->
      <div class="mb-6">
        <v-select
          label="Sélectionnez votre secteur d'activité"
          v-model="selectedSector"
          :items="activityItems"
          item-title="label"
          item-value="value"
          variant="outlined"
          @update:model-value="onSectorSelected"
        />
      </div>

      <!-- SECTION : SERVICES + KEYWORDS DU SECTEUR -->
      <div v-if="questionnaire">
        <v-divider class="mt-2">
          <span class="text-h6 px-4">
            {{ questionnaire.questionnaireData?.general.questions[0].question }}
          </span>
          <span class="text-subtitle-2 font-italic font-light text-grey">(1 choix)</span>
        </v-divider>

        <!-- Services -->
        <div class="service-chips mt-4">
          <v-chip
            v-for="service in questionnaire.services"
            :key="service.uuid"
            class="ma-1"
            variant="outlined"
            @click="selectService(service)"
            :class="{ 'selected-chip': questionnaire.selectedServiceUuid === service.uuid }"
          >
            {{ service.name }}
          </v-chip>
        </div>
        <!-- Keywords par catégorie -->
        <div v-if="questionnaire?.questionnaireData?.servicesSection" class="mt-6">
          <v-divider class="mt-2">
            <span class="text-h6 px-4">
              {{ questionnaire.questionnaireData.servicesSection.title || 'Services détaillés' }}
            </span>
            <span class="text-subtitle-2 font-italic font-light text-grey">(3 choix minimum)</span>
          </v-divider>

          <v-expansion-panels multiple variant="accordion" class="mt-4">
            <v-expansion-panel
              v-for="q in questionnaire.questionnaireData.servicesSection.questions"
              :key="q.category"
              :title="q.question"
              style="background: rgb(var(--v-theme-background))"
            >
              <v-expansion-panel-text>
                <div v-if="questionnaire.keywordsByCategory[q.category]?.length > 0">
                  <v-chip
                    v-for="keyword in questionnaire.keywordsByCategory[q.category]"
                    :key="keyword.uuid"
                    class="ma-1"
                    variant="outlined"
                    @click="selectKeyword(keyword)"
                    :class="{ 'selected-chip': questionnaire.selectedKeywords.has(keyword.uuid) }"
                  >
                    {{ keyword.value }}
                  </v-chip>
                </div>
                <div v-else class="text-grey text-caption">
                  Aucun mot-clé disponible pour cette catégorie
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        <!-- Habitudes -->
        <div v-if="questionnaire?.questionnaireData?.habitudesSection" class="mt-6">
          <v-divider>
            <span class="text-h6 px-4">
              {{
                questionnaire.questionnaireData.habitudesSection.title || 'Habitudes et pratiques'
              }}
            </span>
          </v-divider>

          <v-expansion-panels multiple variant="accordion" class="mt-4">
            <v-expansion-panel
              v-for="q in questionnaire.questionnaireData.habitudesSection.questions"
              :key="q.category"
              :title="q.question"
              style="background: rgb(var(--v-theme-background))"
            >
              <v-expansion-panel-text>
                <div v-if="questionnaire.keywordsByCategory[q.category]?.length > 0">
                  <v-chip
                    v-for="keyword in questionnaire.keywordsByCategory[q.category]"
                    :key="keyword.uuid"
                    class="ma-1"
                    variant="outlined"
                    @click="selectKeyword(keyword)"
                    :class="{ 'selected-chip': questionnaire.selectedKeywords.has(keyword.uuid) }"
                  >
                    {{ keyword.value }}
                  </v-chip>
                </div>
                <div v-else class="text-grey text-caption">
                  Aucun mot-clé disponible pour cette catégorie
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>

      <!-- Submit -->
      <div class="d-flex justify-end mt-8">
        <v-btn
          style="background: rgb(var(--v-theme-darkbg)); color: white"
          @click="submit"
          :disabled="!canSubmit"
        >
          Valider
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import questionnairePresta from '@/data/questionnaire-presta.json';
import { useUserStore } from '@/stores/userStore';
import { useToaster } from '@/utils/toaster';
import { ref, watch } from 'vue';
import { useProfessionalService } from '~/composables/professional-services/UseProfessionalService';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { useSector } from '~/composables/sector/UseSector';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import type { Keywords } from '~/models/professionalService/Keywords';
import { useProfessionalProfileService } from '~/services/UseProfessionalProfileService';

const serviceModal = defineModel<boolean>('openCreateServiceModal', { default: false });

// Stores
const { professionalUser } = useUserStore();
const { selectSectors } = useSector();
const { services, keywords, sectors } = storeToRefs(useSectorStore());
const { listProfessionalServiceByProfessional } = useProfessionalProfile();
const { getProfessionalProfile } = useProfessionalProfileService();
const { professionalServices } = useProfessionalService();

const { addSuccess, addError } = useToaster();

// State
const selectedSector = ref<string | null>(null);

const questionnaire = ref(
  null as null | {
    sector: string;
    questionnaireData: any;
    services: any[];
    keywordsByCategory: Record<string, any>;
    selectedServiceUuid: string | null;
    selectedKeywords: Set<string>;
  }
);

// Reset on modal open
watch(
  () => serviceModal.value,
  (open) => {
    if (open) {
      selectedSector.value = null;
      questionnaire.value = null;
    }
  }
);

const activityItems = ref(ACTIVITY_ITEMS);

// Helpers
const calculateKeywordsByCategory = (data: any, sector: string): Record<string, Keywords[]> => {
  if (!data || !keywords.value?.length) {
    console.log('❌ Pas de data ou keywords vide');
    return {};
  }

  const grouped: Record<string, Keywords[]> = {};
  const categories: string[] = [];

  if (data.servicesSection?.questions) {
    categories.push(...data.servicesSection.questions.map((q: any) => q.category));
  }
  if (data.habitudesSection?.questions) {
    categories.push(...data.habitudesSection.questions.map((q: any) => q.category));
  }

  categories.forEach((category) => {
    const filtered = keywords.value.filter(
      (k) =>
        k.category === category && (k.sector.toLowerCase() === sector.toLowerCase() || !k.sector)
    );

    grouped[category] = filtered;
  });

  return grouped;
};

const filterServiceBySector = (sector: string) => {
  const sectorFiltered = sectors.value.find((s) => s.name === sector);

  return services.value.filter((service) => service.sectorUuid === sectorFiltered?.uuid);
};

// Sector selection
const onSectorSelected = async (sector: string) => {
  await selectSectors(sector);

  const data = questionnairePresta.find((q) => q.sector.toLowerCase() === sector.toLowerCase());

  if (!data) {
    console.error('❌ Questionnaire non trouvé pour le secteur:', sector);
    return;
  }

  questionnaire.value = {
    sector,
    questionnaireData: data,
    services: filterServiceBySector(sector),
    keywordsByCategory: calculateKeywordsByCategory(data, sector),
    selectedServiceUuid: null,
    selectedKeywords: new Set(),
  };
};

const selectService = (service) => {
  if (!questionnaire.value) return;
  questionnaire.value.selectedServiceUuid =
    questionnaire.value.selectedServiceUuid === service.uuid ? null : service.uuid;
};

// Keyword selection
const selectKeyword = (keyword) => {
  if (!questionnaire.value) return;
  const set = questionnaire.value.selectedKeywords;
  set.has(keyword.uuid) ? set.delete(keyword.uuid) : set.add(keyword.uuid);
};

// Submit
const canSubmit = computed(
  () => questionnaire.value?.selectedServiceUuid && professionalUser?.uuid
);

const submit = async () => {
  if (!questionnaire.value) return;

  try {
    if (questionnaire.value && professionalUser) {
      await professionalServices({
        serviceUuid: questionnaire.value.selectedServiceUuid,
        professionalUuid: professionalUser.uuid,
        keywordsUuid: Array.from(questionnaire.value.selectedKeywords),
      });
    }

    await listProfessionalServiceByProfessional();

    addSuccess('Service créé avec succès !');
    serviceModal.value = false;
  } catch (err) {
    console.error(err);
    addError({ message: 'Impossible d’enregistrer votre service.' });
  }
};
</script>
<style scoped lang="scss">
.selected-chip {
  background: rgb(var(--v-theme-darkbg));
  border: rgb(var(--v-theme-darkbg));
  color: rgb(var(--v-theme-background));
}

.close-btn {
  position: relative;
  top: 10px;
  right: 10px;
}
</style>
