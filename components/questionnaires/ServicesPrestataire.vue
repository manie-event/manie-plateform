<template>
  <v-dialog v-model="serviceModal" width="800" transition="dialog-bottom-transition">
    <v-card v-if="professionalUser?.uuid" width="800">
      <div class="questionnaires-container">
        <div
          v-for="(questionnaire, index) in questionnaires"
          :key="questionnaire.id"
          class="questionnaire-section mb-8"
        >
          <div class="d-flex justify-space-between align-center mb-2">
            <h3 class="text-subtitle1 font-weight-medium">
              Quelle est votre Activité N°{{ index + 1 }} ?
            </h3>

            <v-btn
              v-if="questionnaires.length > 1"
              icon
              variant="text"
              color="error"
              @click="removeQuestionnaire(index)"
            >
              <Icon icon="mdi:close" width="20" height="20" />
            </v-btn>
          </div>

          <div v-if="index > 0" class="mb-6">
            <v-select
              :label="`Votre ${index + 1}ème activité ?`"
              v-model="questionnaire.sector"
              :items="activityItems"
              item-title="label"
              item-value="value"
              @update:model-value="updateQuestionnaireSector(questionnaire, $event)"
              variant="outlined"
            />
          </div>

          <div v-if="questionnaire.questionnaireData && questionnaire.services.length > 0">
            <v-divider class="mt-6">
              <span class="text-h6 px-4">
                {{ questionnaire.questionnaireData.general.questions[0].question }}
              </span>
            </v-divider>

            <div class="service-chips mt-4">
              <v-chip
                v-for="service in questionnaire.services"
                :key="service.uuid"
                variant="outlined"
                :color="questionnaire.selectedServiceUuid === service.uuid ? 'primary' : 'default'"
                class="ma-1"
                @click="selectService(service, questionnaire)"
                :class="{ 'selected-chip': questionnaire.selectedServiceUuid === service.uuid }"
              >
                {{ service.name }}
              </v-chip>
            </div>

            <div v-if="questionnaire.questionnaireData.servicesSection" class="mt-6">
              <v-divider>
                <span class="text-h6 px-4">
                  {{
                    questionnaire.questionnaireData.servicesSection.title || 'Services détaillés'
                  }}
                </span>
              </v-divider>

              <div class="mt-4">
                <v-expansion-panels variant="accordion" multiple>
                  <v-expansion-panel
                    v-for="serviceQuestion in questionnaire.questionnaireData.servicesSection
                      .questions"
                    :key="serviceQuestion.category"
                    :title="serviceQuestion.question"
                  >
                    <v-expansion-panel-text>
                      <div class="keyword-chips">
                        <v-chip
                          v-for="keyword in questionnaire.keywordsByCategory[
                            serviceQuestion.category
                          ] || []"
                          :key="keyword.uuid"
                          variant="outlined"
                          class="ma-1"
                          :color="
                            questionnaire.selectedKeywords.has(keyword.uuid) ? 'success' : 'default'
                          "
                          @click="selectKeyword(keyword, questionnaire)"
                          :class="{
                            'selected-chip': questionnaire.selectedKeywords.has(keyword.uuid),
                          }"
                        >
                          {{ keyword.value }}
                        </v-chip>
                      </div>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>

            <div v-if="questionnaire.questionnaireData.habitudesSection" class="mt-6">
              <v-divider>
                <span class="text-h6 px-4">
                  {{
                    questionnaire.questionnaireData.habitudesSection.title ||
                    'Habitudes et pratiques'
                  }}
                </span>
              </v-divider>

              <div class="mt-4">
                <v-expansion-panels variant="accordion" multiple>
                  <v-expansion-panel
                    v-for="habitude in questionnaire.questionnaireData.habitudesSection.questions"
                    :key="habitude.category"
                    :title="habitude.question"
                  >
                    <v-expansion-panel-text>
                      <div class="keyword-chips">
                        <v-chip
                          v-for="keyword in questionnaire.keywordsByCategory[habitude.category] ||
                          []"
                          :key="keyword.uuid"
                          variant="outlined"
                          class="ma-1"
                          :color="
                            questionnaire.selectedKeywords.has(keyword.uuid) ? 'success' : 'default'
                          "
                          @click="selectKeyword(keyword, questionnaire)"
                          :class="{
                            'selected-chip': questionnaire.selectedKeywords.has(keyword.uuid),
                          }"
                        >
                          {{ keyword.value }}
                        </v-chip>
                      </div>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>
          </div>

          <div v-else-if="index === 0" class="text-center py-8">
            <v-progress-circular indeterminate color="primary" class="mb-4" />
            <p>Chargement des services et mots-clés...</p>
          </div>

          <div v-else-if="index > 0 && !questionnaire.sector" class="text-center py-4">
            <p class="text-grey">
              Sélectionnez un secteur d'activité pour afficher les services disponibles
            </p>
          </div>
        </div>

        <div class="d-flex align-center justify-lg-space-between">
          <div class="d-flex justify-space-between align-center px-4 py-3">
            <v-btn
              v-if="questionnaires.length < 3"
              @click="addNewQuestionnaire"
              color="primary"
              variant="outlined"
              class="px-4 py-3"
            >
              <span>Ajouter une nouvelle activité</span>
            </v-btn>
          </div>
          <div>
            <v-btn color="primary" class="px-4 py-3" @click="submitAllQuestionnaires()">
              Valider ma sélection
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>

  <Teleport to="body">
    <ModalRedirection :redirection="'dashboard2'" v-model="isProfilUpdate" />
  </Teleport>
</template>

<script setup lang="ts">
import questionnairePresta from '@/data/questionnaire-presta.json';
import { useKeywordsStore } from '@/stores/keywordsStore';
import { useUserStore } from '@/stores/userStore';
import { useToaster } from '@/utils/toaster';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { ref, Teleport, watch } from 'vue';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';
import type { QuestionnaireItem } from '~/models/professionalService/QuestionnairePresta';
import type { Services } from '~/models/professionalService/Services';
import type { ProfessionalProfile } from '~/models/user/UserModel';
import ModalRedirection from '../apps/user-profile/ModalRedirection.vue';

const serviceModal = defineModel<boolean>('pageActuelle', { default: false });
const userStore = useUserStore();
const { professionalUser } = storeToRefs(userStore);

const keywordsStore = useKeywordsStore();
const { loading, services, keywords } = storeToRefs(keywordsStore);
const { getSectors, sendProfessionalServices } = keywordsStore;

const { patchProfessionalProfileDetails } = useProfessionalProfile();
const { addSuccess, addError } = useToaster();

const questionnaires = ref<QuestionnaireItem[]>([]);
const activityItems = ref(ACTIVITY_ITEMS);
const payloadArray = ref<ProfessionalServiceUuid[]>([]);
const isProfilUpdate = ref(false);
let sectorsLoaded = false;

const generateId = () => Math.random().toString(36).substr(2, 9);

const calculateKeywordsByCategory = (
  questionnaireData: any,
  sector: string
): Record<string, Keywords[]> => {
  if (!questionnaireData || !keywords.value?.length) return {};
  const grouped: Record<string, Keywords[]> = {};
  const categories: string[] = [];

  if (questionnaireData.servicesSection) {
    categories.push(
      ...(questionnaireData.servicesSection.questions?.map((q: any) => q.category) || [])
    );
  }
  if (questionnaireData.habitudesSection) {
    categories.push(
      ...(questionnaireData.habitudesSection.questions?.map((q: any) => q.category) || [])
    );
  }

  categories.forEach((category) => {
    const filtered = keywords.value.filter(
      (k) =>
        k.category === category && (k.sector.toLowerCase() === sector.toLowerCase() || !k.sector)
    );
    grouped[category] = filtered.filter(
      (kw, i, arr) => arr.findIndex((x) => x.uuid === kw.uuid) === i
    );
  });

  return grouped;
};

const createQuestionnaire = (sector: string): QuestionnaireItem => {
  const data = questionnairePresta.find((q) => q.sector.toLowerCase() === sector.toLowerCase());
  return {
    id: generateId(),
    sector,
    questionnaireData: data,
    services: [...(services.value || [])],
    keywordsByCategory: calculateKeywordsByCategory(data, sector),
    selectedServiceUuid: null,
    selectedKeywords: new Set<string>(),
  };
};

const removeQuestionnaire = (index: number) => questionnaires.value.splice(index, 1);

const selectService = (service: Services, q: QuestionnaireItem) => {
  q.selectedServiceUuid = q.selectedServiceUuid === service.uuid ? null : service.uuid;
  updatePayloadArray();
};

const selectKeyword = (keyword: Keywords, q: QuestionnaireItem) => {
  q.selectedKeywords.has(keyword.uuid)
    ? q.selectedKeywords.delete(keyword.uuid)
    : q.selectedKeywords.add(keyword.uuid);
  updatePayloadArray();
};

const updateQuestionnaireSector = async (q: QuestionnaireItem, newSector: string) => {
  if (!newSector) return;

  Object.assign(q, {
    questionnaireData: null,
    services: [],
    keywordsByCategory: {},
    selectedServiceUuid: null,
    selectedKeywords: new Set<string>(),
  });

  await getSectors(newSector);

  const stopWatching = watch([services, keywords], ([s, k]) => {
    if (s?.length && k?.length) {
      const data = questionnairePresta.find(
        (item) => item.sector.toLowerCase() === newSector.toLowerCase()
      );
      q.sector = newSector;
      q.questionnaireData = data;
      q.services = [...s];
      q.keywordsByCategory = calculateKeywordsByCategory(data, newSector);
      stopWatching();
    }
  });
};

const addNewQuestionnaire = () =>
  questionnaires.value.push({
    id: generateId(),
    sector: '',
    questionnaireData: null,
    services: [],
    keywordsByCategory: {},
    selectedServiceUuid: null,
    selectedKeywords: new Set<string>(),
  });

const updatePayloadArray = () => {
  payloadArray.value = questionnaires.value
    .filter((q) => q.selectedServiceUuid && professionalUser.value?.uuid)
    .map((q) => ({
      serviceUuid: q.selectedServiceUuid!,
      professionalUuid: professionalUser.value!.uuid,
      keywordsUuid: Array.from(q.selectedKeywords),
    }));
};

const submitAllQuestionnaires = async () => {
  updatePayloadArray();

  if (!payloadArray.value.length) {
    addError({ message: 'Veuillez sélectionner au moins un service.' });
    return;
  }

  try {
    const selected = questionnaires.value
      .filter((q) => q.sector && q.selectedServiceUuid)
      .map((q) => q.sector);

    await patchProfessionalProfileDetails({
      ...professionalUser.value,
      faq:
        typeof professionalUser.value?.faq === 'string'
          ? JSON.parse(professionalUser.value.faq || '{}')
          : professionalUser.value?.faq || {},
      secondActivity: selected[0] || '',
      thirdActivity: selected[1] || '',
    } as ProfessionalProfile);

    await Promise.all(payloadArray.value.map((p) => sendProfessionalServices(p)));

    addSuccess(`${payloadArray.value.length} service(s) créé(s) avec succès !`);
    serviceModal.value = false;
    isProfilUpdate.value = true;
  } catch (e) {
    console.error('Erreur lors de lenvoi :', e);
    addError({ message: 'Erreur lors de lenvoi des services.' });
  }
};

// Initialisation
watch(
  () => professionalUser.value,
  async (user) => {
    if (!user?.mainActivity || !user?.uuid || sectorsLoaded) return;
    sectorsLoaded = true;
    try {
      await getSectors(user.mainActivity);
      questionnaires.value.push(createQuestionnaire(user.mainActivity));
    } catch (e) {
      console.error('Erreur chargement initial :', e);
      addError({ message: 'Erreur lors du chargement des données.' });
    }
  },
  { immediate: true }
);

console.log('ServicesPresta mounted');
</script>

<style scoped lang="scss">
/* même style que ta version précédente */
</style>
