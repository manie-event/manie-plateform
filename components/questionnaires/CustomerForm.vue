<template>
  <v-dialog v-model="openCustomerForm">
    <v-card class="pa-4">
      <div v-if="currentPage === 1">
        <h3>{{ questionnaire.general[0].title }}</h3>
        <div>
          <v-chip
            v-for="userType in getQuestionOptions(0)"
            :key="userType.value"
            :color="eventName === userType.value ? 'primary' : 'default'"
            :variant="eventName === userType.value ? 'flat' : 'outlined'"
            clickable
            @click="eventName = userType.value"
          >
            {{ userType.label }}
          </v-chip>
        </div>
        <h3>A quelle date ?</h3>
        <v-radio-group v-model="isFlexible">
          <v-radio label="J'ai une date précise" :value="false"></v-radio>
          <v-radio label="Je suis flexible" :value="true"></v-radio>
        </v-radio-group>

        <div v-if="!isFlexible" class="d-flex">
          <v-text-field type="date" v-model="dateStart" />
          <v-text-field type="date" v-model="dateEnd" />
        </div>
        <div v-else>
          <v-chip
            :color="flexibleDate === 'semaine' ? 'primary' : 'default'"
            :variant="flexibleDate === 'semaine' ? 'flat' : 'outlined'"
            clickable
            @click="flexibleDate = 'semaine'"
          >
            En semaine
          </v-chip>
          <v-chip
            :color="flexibleDate === 'week-end' ? 'primary' : 'default'"
            :variant="flexibleDate === 'week-end' ? 'flat' : 'outlined'"
            clickable
            @click="flexibleDate = 'week-end'"
          >
            En week-end
          </v-chip>
        </div>
        <div>
          <h3>{{ questionnaire.general[1].title }}</h3>
          <v-select
            :items="questionnaire.general[1].reponses"
            item-title="label"
            item-value="value"
            label="localisation souhaitée"
            v-model="location"
          ></v-select>
        </div>
        <div class="mt-4 d-flex">
          <h3>{{ questionnaire.general[2].title }}</h3>
          <v-radio-group v-model="invites">
            <v-radio
              v-for="invite in getQuestionOptions(2)"
              :key="invite.value"
              :label="invite.label"
              :value="invite.value"
            ></v-radio>
          </v-radio-group>
        </div>
        <div class="mt-4 d-flex">
          <h3>{{ questionnaire.general[3].title }}</h3>
          <v-radio-group v-model="duration">
            <v-radio
              v-for="duree in getQuestionOptions(3)"
              :key="duree.value"
              :label="duree.label"
              :value="duree.value"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>

      <div v-if="currentPage === 2">
        <div class="mt-4 d-flex">
          <h3>{{ questionnaire.general[4].title }}</h3>
          <v-radio-group v-model="organisation">
            <v-radio
              v-for="orga in getQuestionOptions(4)"
              :key="orga.value"
              :label="orga.label"
              :value="orga.value"
            ></v-radio>
          </v-radio-group>
        </div>
        <div class="mt-4 d-flex">
          <h3>Avez-vous un thème ?</h3>
          <v-text-field type="text" v-model="theme" label="Avez-vous un thème"> </v-text-field>
        </div>
        <div class="mt-4 d-flex">
          <h3>Combien d'invités sont prévus ?</h3>
          <v-text-field v-model="people" />
        </div>
        <div>
          <h3>Vous avez un budget ?</h3>
          <v-radio-group v-model="isBudgetGlobale">
            <v-radio label="Par personne" :value="false"></v-radio>
            <v-radio label="Global" :value="true"></v-radio>
          </v-radio-group>

          <v-text-field v-model="budgetInput" type="number" />
        </div>
      </div>

      <div v-if="currentPage == 3">
        <!-- Services existants -->
        <v-alert color="warning" class="w-auto p-5 mb-5"
          >Chaque secteur sélectionné ne pourra pas être modifié une fois la mise en relation
          commencée
        </v-alert>
        <div v-for="(service, serviceIndex) in selectedServices" :key="serviceIndex" class="mb-6">
          <div class="d-flex justify-space-between align-center mb-2">
            <h3>Service {{ serviceIndex + 1 }}</h3>
            <v-btn
              v-if="selectedServices.length > 1 && !hasAlreadyCreatedService"
              size="small"
              color="red"
              variant="outlined"
              @click="removeService(serviceIndex)"
            >
              Supprimer
            </v-btn>
          </div>

          <div>
            <h4>De quoi avez-vous besoin ?</h4>
            <v-select
              v-model="service.selectedSector"
              :items="sectorFiltered"
              item-title="label"
              item-value="value"
              @update:modelValue="updateServiceSector(serviceIndex, service.selectedSector)"
              clearable
              :disabled="isLockedService(service)"
              placeholder="Sélectionnez un secteur"
            ></v-select>
          </div>

          <div
            v-for="question in getFilteredQuestionsForService(service.selectedSector)"
            :key="question.sector + question.category"
            v-if="service.selectedSector"
            class="mt-4"
          >
            <h4>{{ question.question }}</h4>
            <div v-if="question.isService">
              <v-btn
                v-for="answer in question.answers"
                :key="answer.uuid"
                :color="service.selectedServiceId === answer.uuid ? 'primary' : 'default'"
                :variant="service.selectedServiceId === answer.uuid ? 'flat' : 'outlined'"
                clickable
                :disabled="isLockedService(service)"
                @click="selectServiceForIndex(serviceIndex, answer.uuid)"
              >
                <v-icon
                  v-if="service.selectedServiceId === answer.uuid"
                  start
                  icon="mdi-check"
                ></v-icon>
                {{ answer.name }}
              </v-btn>
            </div>
            <div v-else>
              <v-chip
                v-for="answer in question.answers"
                :key="answer.id"
                :color="service.selectedKeywords.includes(answer.uuid) ? 'green' : 'grey'"
                :variant="service.selectedKeywords.includes(answer.uuid) ? 'flat' : 'outlined'"
                clickable
                :disabled="isLockedService(service)"
                @click="toggleKeywordForService(serviceIndex, answer.uuid)"
              >
                {{ answer.value }}
              </v-chip>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <v-btn
            color="primary"
            variant="outlined"
            @click="addNewService"
            prepend-icon="mdi-plus"
            v-if="!hasAlreadyCreatedService"
          >
            Ajouter un nouveau service
          </v-btn>
        </div>
      </div>

      <div class="d-flex justify-space-between mt-4">
        <v-btn v-if="currentPage > 1" @click="currentPage--">Précédent</v-btn>
        <v-btn v-if="currentPage < 3" @click="currentPage++">Suivant</v-btn>
        <v-btn
          v-if="currentPage === 3 && !hasAlreadyCreatedService"
          :color="!getMinimumResponse ? 'success' : 'primary'"
          :variant="!getMinimumResponse ? 'plain' : 'outlined'"
          :disabled="!getMinimumResponse"
          @click="createEventService(customerResponse)"
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
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import type { SectorsDto } from '~/models/dto/sectorsDto';
import type { QuestionnaireClient } from '~/models/questionnaire/QuestionnaireClientModel';
import { useEventService } from '~/services/UseEventService';

const props = defineProps<{
  answers?: QuestionnaireClient;
}>();

const openCustomerForm = defineModel<boolean>('openCustomerForm', { default: false });

const { sectors, servicesFiltered } = storeToRefs(eventsStore());
const { keywords, clientProfile } = storeToRefs(useUserStore());
const { createEventService } = useEventService();

//ref generale
const eventType = ref<'particulier' | 'professionnel'>('particulier');
const eventName = ref('');
const location = ref('');
const duration = ref('');
const invites = ref('');
const theme = ref('');
const organisation = ref('');
const people = ref('');
//ref de budget
const isBudgetGlobale = ref(false);
const currentPage = ref(1);
const budgetInput = ref(0);
//ref de date
const isFlexible = ref(false);
const flexibleDate = ref<string | undefined>(undefined);
const dateStart = ref('');
const dateEnd = ref('');

const selectedServices = ref([
  {
    selectedSector: undefined,
    selectedServiceId: '',
    selectedKeywords: [],
  },
]);

const finalDateSelection = computed(() => {
  if (isFlexible.value) {
    return flexibleDate.value;
  } else {
    return [dateStart.value, dateEnd.value];
  }
});

const budgetCalculation = computed(() => {
  return isBudgetGlobale.value ? budgetInput.value : budgetInput.value * Number(people.value);
});

const hasAlreadyCreatedService = computed(() => props.answers?.isAlreadyCreated ?? false);

const customerResponse = computed(() => {
  return {
    organisatorUuid: localStorage.getItem('client-uuid'),
    eventType: eventType.value,
    eventName: eventName.value,
    date: finalDateSelection.value,
    location: location.value,
    duration: duration.value,
    invites: invites.value,
    name: theme.value,
    organisation: organisation.value,
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

const getMinimumResponse = computed(() => {
  return selectedServices.value.every((service) => {
    // on "mappe" les sections pour ce secteur
    const mappedSections = mapSectionsWithServices(service.selectedSector);
    const sectionMappedWithoutService = mappedSections.filter((section) => !section.isService);

    // chaque section doit avoir au moins un answer sélectionné
    const minimumKeyword = sectionMappedWithoutService.every((section) =>
      section.answers.some((answer) => service.selectedKeywords.includes(answer.uuid))
    );
    const minimumServiceSelected = service.selectedServiceId.length > 1;

    return minimumKeyword && minimumServiceSelected;
  });
});

// 2. Mise à jour de la fonction getQuestionOptions
const getQuestionOptions = (sectionIndex: number) => {
  if (sectionIndex === 0) {
    // Pour la première question, filtrer selon le profil client automatiquement
    const eventTypeValue = clientProfile.value.isBusiness ? 'professionnel' : 'particulier';
    const eventTypes = questionnaire.general[0].reponses.find(
      (type) => type['event-type'] === eventTypeValue
    );
    return eventTypes?.type || [];
  }

  // Pour les autres questions, garder la logique existante
  const section = questionnaire.general[sectionIndex];
  const hasEventType = section.reponses.some((r) => 'event-type' in r);

  if (hasEventType) {
    return (
      section.reponses.find((reponse) => reponse['event-type'] === customerResponse.value.eventType)
        ?.type || []
    );
  }
  return section.reponses;
};

onMounted(() => {
  if (!props.answers) return;

  const normalizedAnswer = props.answers.$attributes;
  console.log(normalizedAnswer, 'normalizedAnswer');

  eventType.value = normalizedAnswer.eventType || 'particulier';
  eventName.value = normalizedAnswer.eventName || '';
  location.value = normalizedAnswer.location || '';
  duration.value = normalizedAnswer.duration || '';
  invites.value = normalizedAnswer.invites || '';
  theme.value = normalizedAnswer.name || '';
  organisation.value = normalizedAnswer.organisation || '';
  people.value = normalizedAnswer.people || '';
  budgetInput.value = normalizedAnswer.budget || 0;

  if (Array.isArray(normalizedAnswer.date)) {
    isFlexible.value = false;
    dateStart.value = normalizedAnswer.date[0] || '';
    dateEnd.value = normalizedAnswer.date[1] || '';
  } else {
    isFlexible.value = true;
    flexibleDate.value = normalizedAnswer.date as string;
  }

  if (props.answers.$preloaded?.eventServices?.length > 0) {
    selectedServices.value = props.answers.$preloaded.eventServices.map((srv: any) => {
      // retrouver le secteur correspondant au serviceUuid
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
