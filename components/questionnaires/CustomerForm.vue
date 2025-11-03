<template>
  <v-dialog v-model="openCustomerForm" transition="dialog-bottom-transition" max-width="800">
    <v-card class="pa-6 rounded-2xl elevation-3 bg-grey-lighten-5">
      <div v-if="currentPage === 1" key="page1">
        <h2 class="text-h5 font-weight-bold mb-4">
          {{ questionnaire.general[0].title }}
        </h2>

        <!-- Type d'utilisateur -->
        <div class="d-flex flex-wrap gap-2 mb-6">
          <v-chip
            v-for="userType in getQuestionOptions(0)"
            :key="userType.value"
            :color="name === userType.value ? '#293b57' : 'default'"
            :variant="name === userType.value ? 'flat' : 'outlined'"
            size="large"
            class="rounded-xl transition-all"
            @click="name = userType.value"
          >
            {{ userType.label }}
          </v-chip>
        </div>

        <!-- Dates -->
        <h3 class="text-h6 mb-2">📅 À quelle date ?</h3>
        <v-row dense>
          <v-col cols="12" sm="6">
            <v-text-field
              type="date"
              v-model="dateStart"
              :min="today"
              label="Date de début"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              type="date"
              v-model="dateEnd"
              :min="dateStart"
              label="Date de fin"
              variant="outlined"
            />
          </v-col>
        </v-row>

        <!-- Localisation -->
        <h3 class="text-h6 mt-6 mb-2">{{ questionnaire.general[1].title }}</h3>
        <v-select
          :items="questionnaire.general[1].reponses"
          item-title="label"
          item-value="value"
          v-model="location"
          label="Localisation souhaitée"
          variant="outlined"
        />

        <!-- Type de groupe -->
        <div class="mt-6">
          <h3 class="text-h6 mb-2">{{ questionnaire.general[2].title }}</h3>
          <v-radio-group v-model="group_type" inline>
            <v-radio
              v-for="invite in getQuestionOptions(2)"
              :key="invite.value"
              :label="invite.label"
              :value="invite.value"
            ></v-radio>
          </v-radio-group>
        </div>

        <!-- Durée -->
        <div class="mt-6">
          <h3 class="text-h6 mb-2">{{ questionnaire.general[3].title }}</h3>
          <v-radio-group v-model="duration" inline>
            <v-radio
              v-for="duree in getQuestionOptions(3)"
              :key="duree.value"
              :label="duree.label"
              :value="duree.value"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>

      <!-- PAGE 2 -->

      <div v-if="currentPage === 2" key="page2">
        <h2 class="text-h5 font-weight-bold mb-4">Détails de votre événement 🎉</h2>

        <v-radio-group v-model="organized_for" class="mb-4">
          <h3 class="text-h6">{{ questionnaire.general[4].title }}</h3>
          <v-radio
            v-for="orga in getQuestionOptions(4)"
            :key="orga.value"
            :label="orga.label"
            :value="orga.value"
          />
        </v-radio-group>

        <v-text-field
          v-model="theme"
          label="Thème de l'événement"
          control-variant="hidden"
          class="mb-4"
        />

        <v-number-input
          v-model="people"
          type="number"
          control-variant="hidden"
          label="Nombre d'invités"
          class="mb-4"
        />

        <v-radio-group v-model="isBudgetGlobale" class="mb-2">
          <h3 class="text-h6 mb-1">💰 Votre budget</h3>
          <v-radio label="Par personne" :value="false"></v-radio>
          <v-radio label="Global" :value="true"></v-radio>
        </v-radio-group>

        <v-number-input
          v-model="budgetInput"
          label="Montant"
          control-variant="hidden"
          color="primary"
          variant="outlined"
        />
      </div>

      <!-- PAGE 3 -->

      <div v-if="currentPage === 3" key="page3" class="pa-3">
        <v-alert
          color="rgb(var(--v-theme-darkbg))"
          style="color: rgb(var(--v-theme-background))"
          class="mb-6"
        >
          ⚠️ Chaque secteur sélectionné ne pourra pas être modifié une fois la mise en relation
          commencée.
        </v-alert>

        <div
          v-for="(service, serviceIndex) in selectedServices"
          :key="serviceIndex"
          class="mb-8 pa-6 bg-white rounded-xl shadow-sm"
        >
          <div class="d-flex justify-space-between align-center mb-3">
            <h3 class="font-weight-bold">Choisissez un univers</h3>
            <Icon
              icon="solar:trash-bin-trash-line-duotone"
              height="24"
              style="cursor: pointer"
              class="me-2"
              v-if="selectedServices.length > 1"
              @click="removeService(serviceIndex)"
            />
          </div>

          <v-select
            v-model="service.selectedSector"
            :items="sectorFiltered"
            item-title="label"
            item-value="value"
            placeholder="Sélectionnez un secteur"
            variant="outlined"
            :disabled="isLockedService(service)"
            @update:modelValue="updateServiceSector(serviceIndex, service.selectedSector)"
          />

          <div
            v-for="question in getFilteredQuestionsForService(service.selectedSector)"
            :key="question.sector + question.category"
            v-if="service.selectedSector"
            class="mt-4"
          >
            <h4 class="mb-2">{{ question.question }}</h4>
            <div v-if="question.isService">
              <v-btn
                v-for="answer in question.answers"
                :key="answer.uuid"
                :color="baseColor"
                :variant="service.selectedServiceId === answer.uuid ? 'flat' : 'outlined'"
                class="transition-all"
                @click="selectServiceForIndex(serviceIndex, answer.uuid)"
              >
                {{ answer.name }}
              </v-btn>
            </div>
            <div v-else>
              <v-chip
                v-for="answer in question.answers"
                :key="answer.id"
                :color="service.selectedKeywords.includes(answer.uuid) ? '#293b57' : 'default'"
                :variant="service.selectedKeywords.includes(answer.uuid) ? 'flat' : 'outlined'"
                class="ma-1"
                @click="toggleKeywordForService(serviceIndex, answer.uuid)"
              >
                {{ answer.value }}
              </v-chip>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="d-flex justify-space-between mt-8">
        <v-btn v-if="currentPage === 3" color="#293b57" variant="outlined" @click="addNewService">
          Ajouter un nouveau service
        </v-btn>
        <v-btn v-if="currentPage === 2" variant="text" @click="currentPage--"> Précédent</v-btn>

        <v-btn v-if="currentPage < 3" color="primary" variant="flat" @click="nextPage">
          Suivant
        </v-btn>

        <v-btn
          v-if="currentPage === 3"
          color="#f39454"
          style="color: white"
          variant="flat"
          @click="handleSubmit"
        >
          Envoyer
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import questionnaire from '@/data/questionnaire-client-refonte.json';
import { eventsStore } from '@/stores/events';
import { Icon } from '@iconify/vue';
import { UseEvent } from '~/composables/event/UseEvent';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import type { SectorsDto } from '~/models/dto/sectorsDto';
import type { QuestionnaireClient } from '~/models/questionnaire/QuestionnaireClientModel';

const props = defineProps<{
  answers?: QuestionnaireClient;
}>();

const openCustomerForm = defineModel<boolean>('openCustomerForm', { default: false });

const { sectors, servicesFiltered } = storeToRefs(eventsStore());
const { clientProfile } = storeToRefs(useUserStore());
const { keywords } = stroreToRefs(useKeywordsStore());
const { submitEvent, isLoading, error } = UseEvent();
//ref generale
const eventType = ref<'particulier' | 'professionnel'>('particulier');
const name = ref('');
const location = ref('Veuillez choisir un département');
const duration = ref('');
const group_type = ref('');
const theme = ref('');
const organized_for = ref('');
const people = ref(0);
//ref de budget
const isBudgetGlobale = ref(false);
const currentPage = ref(1);
const budgetInput = ref(0);
//ref de date
// const isFlexible = ref(false);
// const flexibleDate = ref<string | undefined>(undefined);
const today = new Date().toISOString().split('T')[0];
const dateStart = ref('');
const dateEnd = ref('');

const baseColor = '#5d79a4';

const selectedServices = ref([
  {
    selectedSector: undefined,
    selectedServiceId: '',
    selectedKeywords: [],
  },
]);

const finalDateSelection = computed(() => {
  // if (isFlexible.value) {
  //   return flexibleDate.value;
  // } else {
  return [dateStart.value, dateEnd.value];
});

const nextPage = () => {
  if (currentPage.value < 3) currentPage.value++;
};

const budgetCalculation = computed(() => {
  return isBudgetGlobale.value ? budgetInput.value : budgetInput.value * people.value;
});

const chooseEventTypeDependingOnUserCategory = computed(() => {
  return clientProfile.value?.isBusiness ? 'professionnel' : 'particulier';
});

const customerResponse = computed(() => {
  return {
    organisatorUuid: clientProfile.value?.uuid,
    event_type: chooseEventTypeDependingOnUserCategory.value,
    name: name.value,
    date: finalDateSelection.value,
    location: location.value,
    duration: duration.value,
    formule: 'gratuit',
    group_type: group_type.value,
    theme: theme.value,
    organized_for: organized_for.value,
    people: people.value,
    budget: budgetCalculation.value,
    services: selectedServices.value.map((service) => ({
      serviceUuid: service.selectedServiceId,
      keywordsUuid: service.selectedKeywords,
    })),
  };
});

const addNewService = () => {
  selectedServices.value.push({
    selectedSector: undefined,
    selectedServiceId: '',
    selectedKeywords: [],
  });
};

const removeService = (index: number) => {
  if (selectedServices.value.length > 1) {
    selectedServices.value.splice(index, 1);
  }
};

const isLockedService = (service: any) => {
  // Un service est "verrouillé" seulement s'il a déjà un serviceId sélectionné
  // ET que tous les keywords requis sont sélectionnés (service complet)
  if (!service.selectedServiceId || !service.selectedSector) {
    return false; // Pas verrouillé si pas de service ou secteur sélectionné
  }

  // Vérifier si le service est complet (a tous les keywords requis)
  const mappedSections = mapSectionsWithServices(service.selectedSector);
  const keywordSections = mappedSections.filter((section) => !section.isService);

  // Un service est verrouillé seulement s'il est complet
  const isComplete = keywordSections.every((section) =>
    section.answers.some((answer) => service.selectedKeywords.includes(answer.uuid))
  );

  return isComplete;
};

const selectServiceForIndex = (serviceIndex: number, serviceUuid: string) => {
  const service = selectedServices.value[serviceIndex];
  if (service.selectedServiceId === serviceUuid) {
    service.selectedServiceId = '';
  } else {
    service.selectedServiceId = serviceUuid;
  }
};

// Fonction pour toggle un keyword pour un service spécifique
const toggleKeywordForService = (serviceIndex: number, keywordUuid: string) => {
  const service = selectedServices.value[serviceIndex];
  const keywordIndex = service.selectedKeywords.indexOf(keywordUuid);

  if (keywordIndex > -1) {
    service.selectedKeywords.splice(keywordIndex, 1);
  } else {
    service.selectedKeywords.push(keywordUuid);
  }
};

const updateServiceSector = (serviceIndex: number, selectedSector: any) => {
  const service = selectedServices.value[serviceIndex];
  service.selectedSector = selectedSector;
  service.selectedServiceId = '';
  service.selectedKeywords = [];
};

const getFilteredQuestionsForService = (selectedSector: any) => {
  if (!selectedSector) return [];
  return mapSectionsWithServices(selectedSector);
};

const sectorFiltered = computed(() => {
  const servicefiltered = servicesFiltered.value.map((s) => s.sectorUuid);

  const sector = sectors.value.filter((sector) => servicefiltered.includes(sector.uuid));

  const activityAvailable = ACTIVITY_ITEMS.map((activity) => {
    const matchingSector = sector.find((s) => s.name === activity.value);

    if (matchingSector) {
      return {
        ...activity,
        sectorUuid: matchingSector.uuid,
      };
    }
    return null;
  }).filter(Boolean);
  return activityAvailable;
});

const mapSectionsWithServices = (selectedSector?: string | SectorsDto) => {
  const findSelectedSectorUuid = sectors.value.find((s) => s.name === selectedSector);

  const findServicesForSelectedSector = servicesFiltered.value.filter(
    (s) => s.sectorUuid === findSelectedSectorUuid?.uuid
  );

  const questionnaireSectorFiltering = questionnaire.sections.filter(
    (section) => section.sector === selectedSector
  );
  return questionnaireSectorFiltering.map((section) => {
    if (section.isService && section.sector === selectedSector) {
      return {
        ...section,
        answers: findServicesForSelectedSector.map((s) => ({
          id: s.id,
          name: s.name,
          uuid: s.uuid,
        })),
      };
    } else {
      const keywordsCategory = keywords.value.filter(
        (k) => k.category === section.category && k.sector === section.sector
      );

      return {
        ...section,
        answers: keywordsCategory,
      };
    }
  });
};

const getQuestionOptions = (sectionIndex: number) => {
  const eventTypeValue = clientProfile.value?.isBusiness ? 'professionnel' : 'particulier';

  if (sectionIndex === 0) {
    // Pour la première question, filtrer selon le profil client automatiquement
    const eventTypes = questionnaire.general[0].reponses.find(
      (type) => type['event-type'] === chooseEventTypeDependingOnUserCategory.value
    );
    return eventTypes?.type || [];
  }

  const section = questionnaire.general[sectionIndex];
  const hasEventType = section.reponses.some((r) => 'event-type' in r);

  if (hasEventType) {
    return (
      section.reponses.find(
        (reponse) => reponse['event-type'] === chooseEventTypeDependingOnUserCategory.value
      )?.type || []
    );
  }
  return section.reponses;
};

const handleSubmit = async () => {
  await submitEvent(customerResponse.value);

  // si tu n’as pas d’erreur (ou si submitEvent() ne renvoie pas de valeur utile),
  // tu fermes le formulaire et tu ouvres la modale pricing.
  if (!error.value) {
    openCustomerForm.value = false;
  }
};

onMounted(() => {
  if (!props.answers) return;

  const normalizedAnswer = props.answers.$attributes;

  eventType.value = normalizedAnswer.event_type || '';
  name.value = normalizedAnswer.name || '';
  location.value = normalizedAnswer.location || '';
  duration.value = normalizedAnswer.duration || '';
  group_type.value = normalizedAnswer.group_type || '';
  theme.value = normalizedAnswer.theme || '';
  organized_for.value = normalizedAnswer.organized_for || '';
  people.value = Number(normalizedAnswer.people) || 0;
  budgetInput.value = normalizedAnswer.budget || 0;
  dateStart.value = normalizedAnswer.date[0] || '';
  dateEnd.value = normalizedAnswer.date[1] || '';

  if (props.answers.$preloaded?.eventServices?.length > 0) {
    selectedServices.value = props.answers.$preloaded.eventServices.map((srv: any) => {
      const service = servicesFiltered.value.find((s) => s.uuid === srv.serviceUuid);
      const sector = sectors.value.find((sect) => sect.uuid === service?.sectorUuid);

      return {
        selectedSector: sector?.name ?? undefined,
        selectedServiceId: srv.serviceUuid,
        selectedKeywords:
          srv.keywordsUuid?.map((k: any) => (typeof k === 'string' ? k : k.uuid)) || [],
      };
    });
  }
});
</script>
