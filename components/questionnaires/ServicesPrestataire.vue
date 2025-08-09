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

        <!-- Tableau de payload en temps réel -->
        <div v-if="payloadArray.length > 0" class="mt-6">
          <v-card variant="outlined" color="success">
            <v-card-title class="text-h6 d-flex align-center">
              <v-icon class="mr-2">mdi-check-circle</v-icon>
              Services prêts à être envoyés ({{ payloadArray.length }})
            </v-card-title>
            <v-card-text>
              <div
                v-for="(payload, index) in payloadArray"
                :key="index"
                class="mb-3 pa-3 bg-grey-lighten-5 rounded"
              >
                <div class="text-subtitle-2 mb-2">Questionnaire {{ index + 1 }}</div>
                <div class="text-body-2">
                  <strong>Service:</strong> {{ getServiceNameFromUuid(payload.serviceUuid) }}<br />
                  <strong>Professional UUID:</strong> {{ payload.professionalUuid }}<br />
                  <strong>Mots-clés ({{ payload.keywordsUuid.length }}):</strong>
                  {{ getKeywordNamesFromUuids([payload.keywordsUuid]).join(', ') }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
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
    <div class="mt-6 text-center d-flex justify-space-between">
      <v-btn
        v-if="questionnaires.length < 2"
        @click="addNewQuestionnaire"
        color="primary"
        variant="outlined"
        prepend-icon="mdi-plus"
      >
        Ajouter une activité secondaire
      </v-btn>
    </div>

    <div>
      <v-btn @click="goPreviousPage()">Retour</v-btn>
      <v-btn color="primary" @click="submitAllQuestionnaires()">Valider ma selection</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import questionnairePresta from '@/data/questionnairePresta.json';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useKeywords } from '~/composables/UseKeywords';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';
import type { Services } from '~/models/professionalService/Services';

// Props
const props = defineProps<{
  sector: string;
}>();

const currentPage = defineModel<number>('pageActuelle');

// Composables
const userStore = useUserStore();
const { professionnalServices, keywords, professionalUser } = storeToRefs(userStore);
const { getSectors, loading, sendProfessionalServices } = useKeywords();
const { addSuccess, addError } = useToaster();
const { patchUserProfileDetails } = useUserProfile();

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

// État
const questionnaires = ref<QuestionnaireItem[]>([]);
const activityItems = ref(ACTIVITY_ITEMS);

// Tableau qui se met à jour automatiquement
const payloadArray = ref<ProfessionalServiceUuid[]>([]);

// Computed
const hasAnySelection = computed(() => {
  return questionnaires.value.some((q) => q.selectedServiceUuid || q.selectedKeywords.size > 0);
});

const goPreviousPage = () => {
  currentPage.value = currentPage.value - 1;
};

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

// Fonctions utilitaires pour le payload
const getServiceNameFromUuid = (uuid: string): string => {
  // Chercher dans tous les questionnaires
  for (const questionnaire of questionnaires.value) {
    const service = questionnaire.services.find((s) => s.uuid === uuid);
    if (service) return service.name;
  }
  return 'Service inconnu';
};

const getKeywordNamesFromUuids = (uuids: string[]): string[] => {
  const names: string[] = [];
  for (const questionnaire of questionnaires.value) {
    for (const uuid of uuids) {
      const name = getKeywordName(uuid, questionnaire.keywordsByCategory);
      if (name !== 'Mot-clé inconnu') {
        names.push(name);
      }
    }
  }
  return [...new Set(names)]; // Supprimer les doublons
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

  // Mettre à jour le payload automatiquement
  updatePayloadArray();
};

// Sélectionner/désélectionner un mot-clé
const selectKeyword = (keyword: Keywords, questionnaire: QuestionnaireItem) => {
  if (questionnaire.selectedKeywords.has(keyword.uuid)) {
    questionnaire.selectedKeywords.delete(keyword.uuid);
  } else {
    questionnaire.selectedKeywords.add(keyword.uuid);
  }

  // Mettre à jour le payload automatiquement
  updatePayloadArray();
};

// Mettre à jour le secteur d'un questionnaire
const updateQuestionnaireSector = async (questionnaire: QuestionnaireItem, newSector: string) => {
  if (!newSector) return;

  // Marquer le questionnaire comme en cours de chargement
  questionnaire.questionnaireData = null;
  questionnaire.services = [];
  questionnaire.keywordsByCategory = {};
  questionnaire.selectedServiceUuid = null;
  questionnaire.selectedKeywords.clear();

  // Charger les données pour le nouveau secteur
  await getSectors(newSector);

  // Attendre que les données du store soient réellement mises à jour
  // On utilise un watcher temporaire au lieu de nextTick()
  const stopWatching = watch(
    [professionnalServices, keywords],
    ([newServices, newKeywords]) => {
      if (newServices?.length && newKeywords?.length) {
        // Maintenant les données sont vraiment à jour !
        const questionnaireData = questionnairePresta.find(
          (q) => q.sector.toLowerCase() === newSector.toLowerCase()
        );

        questionnaire.sector = newSector;
        questionnaire.questionnaireData = questionnaireData;
        questionnaire.services = [...newServices]; // Maintenant les services sont corrects
        questionnaire.keywordsByCategory = calculateKeywordsByCategory(
          questionnaireData,
          newSector
        );

        // Arrêter le watcher
        stopWatching();
      }
    },
    { immediate: true }
  );
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

// Mettre à jour automatiquement le tableau de payload
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

// Soumettre tous les questionnaires avec Promise.all()
const submitAllQuestionnaires = async () => {
  if (payloadArray.value.length === 0) {
    addError({ message: 'Aucun service sélectionné' });
    return;
  }

  try {
    // Envoyer tous les services en parallèle avec Promise.all()
    const promises = payloadArray.value.map((serviceData: ProfessionalServiceUuid) =>
      sendProfessionalServices(serviceData)
    );
    await Promise.all(promises);
    if (payloadArray.value.length === 2) {
      await patchUserProfileDetails({
        ...professionalUser.value,
        secondActivity: questionnairePresta[1].sector,
      });
    }
    addSuccess({ message: `${payloadArray.value.length} service(s) créé(s) avec succès !` });

    // Optionnel : vider les sélections après envoi
    // resetAllSelections();
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    addError({ message: "Erreur lors de l'envoi des services" });
  }
};

// Initialisation
onMounted(async () => {
  // Charger immédiatement les données du secteur de la page 1
  if (props.sector && props.sector !== 'Veuillez choisir votre activité') {
    console.log('Chargement initial des données pour le secteur:', props.sector);

    try {
      // Forcer le chargement des données
      await getSectors(props.sector);

      // Créer le premier questionnaire après le chargement
      await nextTick(); // Attendre que le DOM soit mis à jour

      // Utiliser un watcher temporaire pour attendre les données
      const stopWatching = watch(
        [professionnalServices, keywords],
        ([newServices, newKeywords]) => {
          if (newServices?.length && newKeywords?.length && questionnaires.value.length === 0) {
            console.log('Données chargées, création du premier questionnaire');
            const firstQuestionnaire = createQuestionnaire(props.sector);
            questionnaires.value.push(firstQuestionnaire);
            stopWatching();
          }
        },
        { immediate: true }
      );
    } catch (error) {
      console.error('Erreur lors du chargement initial:', error);
    }
  }
});

// Watcher de secours pour créer le premier questionnaire si les données arrivent plus tard
watch(
  [professionnalServices, keywords],
  () => {
    if (professionnalServices.value?.length && keywords.value?.length && props.sector) {
      // Créer le premier questionnaire seulement s'il n'existe pas
      if (questionnaires.value.length === 0) {
        console.log('Watcher de secours - création du questionnaire');
        const firstQuestionnaire = createQuestionnaire(props.sector);
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
