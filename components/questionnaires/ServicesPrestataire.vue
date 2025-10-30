<template>
  <v-dialog v-model="serviceModal" fullscreen transition="dialog-bottom-transition">
    <v-card v-if="professionalUser?.uuid" width="800">
      <div class="questionnaires-container">
        <div
          v-for="(questionnaire, index) in questionnaires"
          :key="questionnaire.id"
          class="questionnaire-section mb-8"
        >
          <!-- Sélection du secteur pour les questionnaires supplémentaires -->
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

          <!-- Questionnaire principal (visible seulement si les données sont chargées) -->
          <div v-if="questionnaire.questionnaireData && questionnaire.services.length > 0">
            <!-- Section Services -->
            <v-divider class="mt-6">
              <span class="text-h6 px-4">{{
                questionnaire.questionnaireData.general.questions[0].question
              }}</span>
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

            <!-- Section Mots-clés par Services -->
            <div v-if="questionnaire.questionnaireData.servicesSection" class="mt-6">
              <v-divider>
                <span class="text-h6 px-4">{{
                  questionnaire.questionnaireData.servicesSection.title || 'Services détaillés'
                }}</span>
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

            <!-- Section Habitudes -->
            <div v-if="questionnaire.questionnaireData.habitudesSection" class="mt-6">
              <v-divider>
                <span class="text-h6 px-4">{{
                  questionnaire.questionnaireData.habitudesSection.title || 'Habitudes et pratiques'
                }}</span>
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

          <!-- Message de chargement -->
          <div v-else-if="index === 0" class="text-center py-8">
            <v-progress-circular indeterminate color="primary" class="mb-4"></v-progress-circular>
            <p>Chargement des services et mots-clés...</p>
          </div>

          <!-- Message pour questionnaires secondaires sans secteur -->
          <div v-else-if="index > 0 && !questionnaire.sector" class="text-center py-4">
            <p class="text-grey">
              Sélectionnez un secteur d'activité pour afficher les services disponibles
            </p>
          </div>
        </div>

        <!-- Bouton d'ajout -->
        <div class="mt-6 text-center d-flex justify-space-between">
          <v-btn
            v-if="questionnaires.length < 3"
            @click="addNewQuestionnaire"
            color="primary"
            variant="outlined"
            prepend-icon="mdi-plus"
          >
            Ajouter une nouvelle activité
          </v-btn>
        </div>
        <div>
          <v-btn color="primary" @click="submitAllQuestionnaires()">Valider ma selection</v-btn>
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
import { ref, Teleport, watch } from 'vue';
import { useKeywords } from '~/composables/professional-user/UseKeywords';
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
const { professionnalServices, keywords, professionalUser } = storeToRefs(userStore);
const { getSectors, loading, sendProfessionalServices } = useKeywords();
const { addSuccess, addError } = useToaster();
const { patchProfessionnalProfileDetails } = useProfessionalProfile();

const questionnaires = ref<QuestionnaireItem[]>([]);
const activityItems = ref(ACTIVITY_ITEMS);
const payloadArray = ref<ProfessionalServiceUuid[]>([]);
const isProfilUpdate = ref(false);

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
    const filteredKeywords = keywords.value.filter(
      (keyword: Keywords) =>
        keyword.category === category &&
        (keyword.sector.toLowerCase() === sector.toLowerCase() || !keyword.sector)
    );

    // Supprimer les doublons basés sur l'UUID
    grouped[category] = filteredKeywords.filter(
      (keyword, index, arr) => arr.findIndex((k) => k.uuid === keyword.uuid) === index
    );
  });

  return grouped;
};

const createQuestionnaire = (sector: string): QuestionnaireItem => {
  const questionnaireData = questionnairePresta.find(
    (q) => q.sector.toLowerCase() === sector.toLowerCase()
  );

  return {
    id: generateId(),
    sector: sector,
    questionnaireData: questionnaireData,
    services: [...(professionnalServices.value || [])],
    keywordsByCategory: calculateKeywordsByCategory(questionnaireData, sector),
    selectedServiceUuid: null,
    selectedKeywords: new Set<string>(),
  };
};

const selectService = (service: Services, questionnaire: QuestionnaireItem) => {
  if (questionnaire.selectedServiceUuid === service.uuid) {
    questionnaire.selectedServiceUuid = null;
  } else {
    questionnaire.selectedServiceUuid = service.uuid;
  }
  updatePayloadArray();
};

const selectKeyword = (keyword: Keywords, questionnaire: QuestionnaireItem) => {
  if (questionnaire.selectedKeywords.has(keyword.uuid)) {
    questionnaire.selectedKeywords.delete(keyword.uuid);
  } else {
    questionnaire.selectedKeywords.add(keyword.uuid);
  }
  updatePayloadArray();
};

const updateQuestionnaireSector = async (questionnaire: QuestionnaireItem, newSector: string) => {
  if (!newSector) return;

  questionnaire.questionnaireData = null;
  questionnaire.services = [];
  questionnaire.keywordsByCategory = {};
  questionnaire.selectedServiceUuid = null;
  questionnaire.selectedKeywords.clear();

  await getSectors(newSector);

  const stopWatching = watch(
    [professionnalServices, keywords],
    ([newServices, newKeywords]) => {
      if (newServices?.length && newKeywords?.length) {
        const questionnaireData = questionnairePresta.find(
          (q) => q.sector.toLowerCase() === newSector.toLowerCase()
        );

        questionnaire.sector = newSector;
        questionnaire.questionnaireData = questionnaireData;
        questionnaire.services = [...newServices];
        questionnaire.keywordsByCategory = calculateKeywordsByCategory(
          questionnaireData,
          newSector
        );
        stopWatching();
      }
    },
    { immediate: true }
  );
};

const addNewQuestionnaire = () => {
  const newQuestionnaire: QuestionnaireItem = {
    id: generateId(),
    sector: '',
    questionnaireData: null,
    services: [],
    keywordsByCategory: {},
    selectedServiceUuid: null,
    selectedKeywords: new Set<string>(),
  };

  questionnaires.value.push(newQuestionnaire);
};

const updatePayloadArray = () => {
  payloadArray.value = [];

  questionnaires.value.forEach((questionnaire) => {
    if (questionnaire.selectedServiceUuid && professionalUser.value?.uuid) {
      payloadArray.value.push({
        serviceUuid: questionnaire.selectedServiceUuid,
        professionalUuid: professionalUser.value.uuid,
        keywordsUuid: Array.from(questionnaire.selectedKeywords),
      });
    }
  });
};

const submitAllQuestionnaires = async () => {
  // Debug pour comprendre le problème

  // Forcer la mise à jour du payload
  updatePayloadArray();

  // Vérifier si au moins un service est sélectionné
  const hasSelectedServices = questionnaires.value.some((q) => q.selectedServiceUuid);

  if (!hasSelectedServices) {
    addError({ message: 'Veuillez sélectionner au moins un service' });
    return;
  }

  if (payloadArray.value.length === 0) {
    addError({ message: 'Erreur: UUID professionnel manquant' });
    return;
  }

  try {
    const selectedActivities = questionnaires.value
      .filter((q) => q.sector && q.selectedServiceUuid)
      .map((q) => q.sector);

    // Mettre à jour le profil professionnel avec les activités secondaires
    await patchProfessionnalProfileDetails({
      ...professionalUser.value,
      faq:
        typeof professionalUser.value?.faq === 'string'
          ? JSON.parse(professionalUser.value.faq || '{}')
          : professionalUser.value?.faq || {},
      secondActivity: selectedActivities[0] || '',
      thirdActivity: selectedActivities[1] || '',
    } as ProfessionalProfile);

    const promises = payloadArray.value.map((serviceData: ProfessionalServiceUuid) =>
      sendProfessionalServices(serviceData)
    );
    await Promise.all(promises);

    addSuccess(`${payloadArray.value.length} service(s) créé(s) avec succès !`);
    serviceModal.value = false;
    isProfilUpdate.value = true;
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    addError({ message: "Erreur lors de l'envoi des services" });
  }
};

// Watcher pour initialiser le premier questionnaire
watch(
  () => professionalUser.value,
  async (user) => {
    if (user?.mainActivity && user?.uuid && questionnaires.value.length === 0) {
      try {
        await getSectors(user.mainActivity);
        const firstQuestionnaire = createQuestionnaire(user.mainActivity);
        questionnaires.value.push(firstQuestionnaire);
      } catch (error) {
        console.error('Erreur lors du chargement initial:', error);
        addError({ message: 'Erreur lors du chargement des données' });
      }
    }
  },
  { immediate: true, deep: true }
);

// Watcher pour mettre à jour le premier questionnaire quand les données sont chargées
watch([professionnalServices, keywords], ([newServices, newKeywords]) => {
  if (newServices?.length && newKeywords?.length && questionnaires.value.length > 0) {
    const firstQuestionnaire = questionnaires.value[0];
    if (firstQuestionnaire && professionalUser.value?.mainActivity) {
      firstQuestionnaire.services = [...newServices];
      firstQuestionnaire.keywordsByCategory = calculateKeywordsByCategory(
        firstQuestionnaire.questionnaireData,
        professionalUser.value.mainActivity
      );
    }
  }
});
</script>

<style scoped>
.questionnaire-section {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #fafafa;
}

.service-chips,
.keyword-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.selected-chip {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.questionnaires-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
