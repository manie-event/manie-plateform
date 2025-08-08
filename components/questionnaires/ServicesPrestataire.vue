<template>
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
                v-for="serviceQuestion in questionnaire.questionnaireData.servicesSection.questions"
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
                      :class="{ 'selected-chip': questionnaire.selectedKeywords.has(keyword.uuid) }"
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
                      v-for="keyword in questionnaire.keywordsByCategory[habitude.category] || []"
                      :key="keyword.uuid"
                      variant="outlined"
                      class="ma-1"
                      :color="
                        questionnaire.selectedKeywords.has(keyword.uuid) ? 'success' : 'default'
                      "
                      @click="selectKeyword(keyword, questionnaire)"
                      :class="{ 'selected-chip': questionnaire.selectedKeywords.has(keyword.uuid) }"
                    >
                      {{ keyword.value }}
                    </v-chip>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>

        <!-- Résumé des sélections -->
        <div
          v-if="questionnaire.selectedServiceUuid || questionnaire.selectedKeywords.size > 0"
          class="mt-6"
        >
          <v-card variant="outlined" class="pa-4">
            <v-card-title class="text-subtitle-1">Résumé de vos sélections</v-card-title>
            <v-card-text>
              <div v-if="questionnaire.selectedServiceUuid" class="mb-2">
                <strong>Service sélectionné :</strong>
                {{ getServiceName(questionnaire.selectedServiceUuid, questionnaire.services) }}
              </div>
              <div v-if="questionnaire.selectedKeywords.size > 0">
                <strong
                  >Mots-clés sélectionnés ({{ questionnaire.selectedKeywords.size }}) :</strong
                >
                <div class="mt-1">
                  <v-chip
                    v-for="keywordUuid in Array.from(questionnaire.selectedKeywords)"
                    :key="keywordUuid"
                    size="small"
                    color="success"
                    class="ma-1"
                  >
                    {{ getKeywordName(keywordUuid, questionnaire.keywordsByCategory) }}
                  </v-chip>
                </div>
              </div>
            </v-card-text>
          </v-card>
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
    <div class="mt-6 text-center">
      <v-btn
        @click="addNewQuestionnaire"
        color="primary"
        variant="outlined"
        prepend-icon="mdi-plus"
      >
        Ajouter une activité secondaire
      </v-btn>
    </div>

    <!-- Actions finales -->
    <div class="mt-8 text-center">
      <v-btn
        @click="generatePayloadPreview"
        color="info"
        variant="outlined"
        class="ma-2"
        :disabled="!hasAnySelection"
      >
        Aperçu des données
      </v-btn>
      <v-btn
        @click="submitAllQuestionnaires"
        color="success"
        :disabled="!hasAnySelection || loading"
        :loading="loading"
        class="ma-2"
      >
        Envoyer les services
      </v-btn>
    </div>

    <!-- Dialog de prévisualisation -->
    <v-dialog v-model="previewDialog" max-width="600px">
      <v-card>
        <v-card-title>Aperçu des données à envoyer</v-card-title>
        <v-card-text>
          <pre class="bg-grey-lighten-4 pa-4 rounded">{{
            JSON.stringify(generatedPayload, null, 2)
          }}</pre>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="previewDialog = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import questionnairePresta from '@/data/questionnairePresta.json';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useKeywords } from '~/composables/UseKeywords';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { Services } from '~/models/professionalService/Services';

// Props
const props = defineProps<{
  sector: string;
  currentPage: number;
}>();

// Composables
const userStore = useUserStore();
const { professionnalServices, keywords, professionalUser } = storeToRefs(userStore);
const { getSectors, loading } = useKeywords();
const { addSuccess, addError } = useToaster();

// Types
interface QuestionnaireItem {
  id: string;
  sector: string;
  questionnaireData: any;
  services: Services[];
  keywordsByCategory: Record<string, Keywords[]>;
  selectedServiceUuid: string | null;
  selectedKeywords: Set<string>;
}

interface ProfessionalServicePayload {
  serviceUuid: string;
  professionalUuid: string;
  keywordsUuid: string[];
}

// État
const questionnaires = ref<QuestionnaireItem[]>([]);
const activityItems = ref(ACTIVITY_ITEMS);
const previewDialog = ref(false);
const generatedPayload = ref<ProfessionalServicePayload[]>([]);

// Computed
const hasAnySelection = computed(() => {
  return questionnaires.value.some((q) => q.selectedServiceUuid || q.selectedKeywords.size > 0);
});

// Fonctions utilitaires
const generateId = () => Math.random().toString(36).substr(2, 9);

const getServiceName = (uuid: string, services: Services[]) => {
  return services.find((s) => s.uuid === uuid)?.name || 'Service inconnu';
};

const getKeywordName = (uuid: string, keywordsByCategory: Record<string, Keywords[]>) => {
  for (const category in keywordsByCategory) {
    const keyword = keywordsByCategory[category].find((k) => k.uuid === uuid);
    if (keyword) return keyword.value;
  }
  return 'Mot-clé inconnu';
};

// Calculer les mots-clés par catégorie
const calculateKeywordsByCategory = (
  questionnaireData: any,
  sector: string
): Record<string, Keywords[]> => {
  if (!questionnaireData || !keywords.value?.length) return {};

  const grouped: Record<string, Keywords[]> = {};
  const categories: string[] = [];

  // Récupérer toutes les catégories
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

  // Filtrer les mots-clés pour chaque catégorie
  categories.forEach((category) => {
    grouped[category] = keywords.value.filter(
      (keyword: Keywords) =>
        keyword.category === category &&
        (keyword.sector.toLowerCase() === sector.toLowerCase() || !keyword.sector)
    );
  });

  return grouped;
};

// Créer un nouveau questionnaire
const createQuestionnaire = (sector: string): QuestionnaireItem => {
  const questionnaireData = questionnairePresta.find(
    (q) => q.sector.toLowerCase() === sector.toLowerCase()
  );

  return {
    id: generateId(),
    sector: sector,
    questionnaireData: questionnaireData,
    services: [...(professionnalServices.value || [])], // Copie des services
    keywordsByCategory: calculateKeywordsByCategory(questionnaireData, sector),
    selectedServiceUuid: null,
    selectedKeywords: new Set<string>(),
  };
};

// Sélectionner un service
const selectService = (service: Services, questionnaire: QuestionnaireItem) => {
  // Un seul service par questionnaire
  if (questionnaire.selectedServiceUuid === service.uuid) {
    questionnaire.selectedServiceUuid = null;
  } else {
    questionnaire.selectedServiceUuid = service.uuid;
  }
};

// Sélectionner/désélectionner un mot-clé
const selectKeyword = (keyword: Keywords, questionnaire: QuestionnaireItem) => {
  if (questionnaire.selectedKeywords.has(keyword.uuid)) {
    questionnaire.selectedKeywords.delete(keyword.uuid);
  } else {
    questionnaire.selectedKeywords.add(keyword.uuid);
  }
};

// Mettre à jour le secteur d'un questionnaire
const updateQuestionnaireSector = async (questionnaire: QuestionnaireItem, newSector: string) => {
  if (!newSector) return;

  // Charger les données pour le nouveau secteur
  await getSectors(newSector);

  // Attendre que les données soient mises à jour
  await nextTick();

  // Mettre à jour le questionnaire
  const questionnaireData = questionnairePresta.find(
    (q) => q.sector.toLowerCase() === newSector.toLowerCase()
  );

  questionnaire.sector = newSector;
  questionnaire.questionnaireData = questionnaireData;
  questionnaire.services = [...(professionnalServices.value || [])];
  questionnaire.keywordsByCategory = calculateKeywordsByCategory(questionnaireData, newSector);

  // Réinitialiser les sélections
  questionnaire.selectedServiceUuid = null;
  questionnaire.selectedKeywords.clear();
};

// Ajouter un nouveau questionnaire
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

// Générer le payload pour l'API
const generatePayload = (): ProfessionalServicePayload[] => {
  const payload: ProfessionalServicePayload[] = [];

  questionnaires.value.forEach((questionnaire) => {
    if (questionnaire.selectedServiceUuid && professionalUser.value?.uuid) {
      payload.push({
        serviceUuid: questionnaire.selectedServiceUuid,
        professionalUuid: professionalUser.value.uuid,
        keywordsUuid: Array.from(questionnaire.selectedKeywords),
      });
    }
  });

  return payload;
};

// Prévisualiser le payload
const generatePayloadPreview = () => {
  generatedPayload.value = generatePayload();
  previewDialog.value = true;
};

// Soumettre tous les questionnaires
const submitAllQuestionnaires = async () => {
  const payload = generatePayload();

  if (payload.length === 0) {
    addError({ message: 'Aucun service sélectionné' });
    return;
  }

  try {
    // Envoyer chaque service séparément
    for (const serviceData of payload) {
      // Utiliser la fonction du composable useKeywords
      await $fetch('/api/professional-service/create', {
        method: 'POST',
        body: serviceData,
      });
    }

    addSuccess('service(s) créé(s) avec succès !');
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    addError({ message: "Erreur lors de l'envoi des services" });
  }
};

// Initialisation
onMounted(() => {
  // Le premier questionnaire est créé automatiquement quand les données arrivent
});

// Watcher pour créer le premier questionnaire quand les données arrivent
watch(
  [professionnalServices, keywords],
  () => {
    if (professionnalServices.value?.length && keywords.value?.length && props.sector) {
      // Créer le premier questionnaire seulement s'il n'existe pas
      if (questionnaires.value.length === 0) {
        const firstQuestionnaire = createQuestionnaire(props.sector);
        console.log(firstQuestionnaire, 'firstQuestionnaire');
        questionnaires.value.push(firstQuestionnaire);
      }
    }
  },
  { immediate: true }
);
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
