<template>
  <v-dialog v-model="openCustomerForm">
    <v-card class="pa-4">
      <div v-if="currentPage === 1">
        <h3>{{ questionnaire.general[0].title }}</h3>
        <div class="d-flex w-50 h-50">
          <v-btn value="particulier" @click="customerResponse.eventType = 'particulier'"
            >Je suis un particulier</v-btn
          >
          <v-btn @click="customerResponse.eventType = 'professionnel'"
            >Je suis un professionnel</v-btn
          >
        </div>
        <div>
          <v-chip
            v-for="userType in getQuestionOptions(0)"
            :key="userType.value"
            :color="customerResponse.eventName === userType.value ? 'primary' : 'default'"
            :variant="customerResponse.eventName === userType.value ? 'flat' : 'outlined'"
            clickable
            @click="customerResponse.eventName = userType.value"
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
            v-model="customerResponse.location"
          ></v-select>
        </div>
        <div class="mt-4 d-flex">
          <h3>{{ questionnaire.general[2].title }}</h3>
          <v-radio-group v-model="customerResponse.invites" v-for="invite in getQuestionOptions(2)">
            <v-radio :label="invite.label" :value="invite.value"></v-radio>
          </v-radio-group>
        </div>
        <div class="mt-4 d-flex">
          <h3>{{ questionnaire.general[3].title }}</h3>
          <v-radio-group v-model="customerResponse.duration" v-for="duree in getQuestionOptions(3)">
            <v-radio :label="duree.label" :value="duree.value"></v-radio>
          </v-radio-group>
        </div>
      </div>
      <div v-if="currentPage === 2">
        <div class="mt-4 d-flex">
          <h3>{{ questionnaire.general[4].title }}</h3>
          <v-radio-group v-model="customerResponse.duration" v-for="orga in getQuestionOptions(4)">
            <v-radio :label="orga.label" :value="orga.value"></v-radio>
          </v-radio-group>
        </div>
        <div class="mt-4 d-flex">
          <h3>Avez-vous un thème ?</h3>
          <v-text-field type="text" v-model="customerResponse.theme" label="Avez-vous un thème">
          </v-text-field>
        </div>
        <div class="mt-4 d-flex">
          <h3>Combien d'invités sont prévus ?</h3>
          <v-number-input v-model="customerResponse.people" :min="1" :max="100" controls />
        </div>
        <div>
          <h3>Vous avez un budget ?</h3>
          <v-radio-group v-model="isBudgetGlobale">
            <v-radio label="Par personne" :value="false"></v-radio>
            <v-radio label="Global" :value="true"></v-radio>
          </v-radio-group>

          <v-text-field v-model="budgetCalculation" />
        </div>
      </div>
      <div v-if="currentPage == 3">
        <div>
          <h3>De quoi avez-vous besoin ?</h3>
          <v-select
            v-model="selectedSector"
            :items="sectorFiltered"
            item-title="label"
            item-value="value"
            @update:modelValue="mapSectionsWithServices(selectedSector)"
            clearable
            placeholder="Sélectionnez un secteur"
          ></v-select>
        </div>
        <div
          v-for="question in filteredQuestions"
          :key="question.sector + question.category"
          v-if="selectedSector"
        >
          <h2>{{ question.question }}</h2>
          <div v-if="question.isService">
            <v-btn
              v-for="answer in question.answers"
              :key="answer.uuid"
              :color="selectedService === answer.uuid ? 'primary' : 'default'"
              :variant="selectedService === answer.uuid ? 'flat' : 'outlined'"
              clickable
              @click="selectService(answer.uuid)"
            >
              <v-icon v-if="selectedService === answer.uuid" start icon="mdi-check"></v-icon>
              {{ answer.name }}
            </v-btn>
          </div>
          <div v-else>
            <v-chip
              v-for="answer in question.answers"
              :key="answer.id"
              :color="service.selectedKeywords.includes(answer.uuid) ? 'green' : 'grey'"
              :variant="selectedKeywords.includes(answer.uuid) ? 'flat' : 'outlined'"
              clickable
              @click="toggleKeyword(answer.uuid)"
            >
              {{ answer.value }}
            </v-chip>
          </div>
        </div>
        <div class="mt-4">
          <v-btn color="primary" variant="outlined" @click="addNewService" prepend-icon="mdi-plus">
            Ajouter un nouveau service
          </v-btn>
        </div>
      </div>
      <div class="d-flex justify-space-between mt-4">
        <v-btn v-if="currentPage > 1" @click="currentPage--">Précédent</v-btn>
        <v-btn v-if="currentPage < 3" @click="currentPage++">Suivant</v-btn>
        <v-btn v-if="currentPage === 3" color="primary"> Envoyer</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import questionnaire from '@/data/questionnaire-client-refonte.json';
import { eventsStore } from '@/stores/events';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import type { SectorsDto } from '~/models/dto/sectorsDto';
const openCustomerForm = defineModel<boolean>('openCustomerForm', { default: false });

const { sectors, servicesFiltered } = storeToRefs(eventsStore());
const { keywords } = storeToRefs(useUserStore());

const isFlexible = ref(false);
const flexibleDate = ref<string | undefined>(undefined);
const dateStart = ref('');
const dateEnd = ref('');
const isBudgetGlobale = ref(false);
const currentPage = ref(1);
const selectedSector = ref<SectorsDto>();
const selectedServices = ref([
  {
    selectedService: '',
    selectedKeywords: [],
  },
]);

const finalDateSelection = computed(() => {
  if (isFlexible.value) {
    return { type: 'flexible', value: flexibleDate.value };
  } else {
    return { type: 'precise', value: [dateStart.value, dateEnd.value] };
  }
});

const budgetCalculation = computed<number>(() => {
  if (isBudgetGlobale.value) {
    return customerResponse.value.budget;
  } else {
    return customerResponse.value.budget * customerResponse.value.people;
  }
});

const customerResponse = computed(() => ({
  eventType: 'particulier',
  eventName: '',
  date: finalDateSelection.value,
  location: '',
  duration: '',
  invites: '',
  theme: '',
  organisation: '',
  people: 0,
  budget: 0,
  services: selectedServices.value.map((service) => ({
    serviceUuid: service.selectedService,
    keywordsUuid: service.selectedKeywords,
  })),
}));

const addNewService = () => {
  selectedServices.value.push({
    selectedService: '',
    selectedKeywords: [],
  });
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

const filteredQuestions = computed(() => {
  if (!selectedSector.value) return [];

  return mapSectionsWithServices(selectedSector.value);
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

const selectService = (serviceUuid: string) => {
  if (selectedService.value === serviceUuid) {
    selectedService.value = '';
  } else {
    selectedService.value = serviceUuid;
  }
};

const toggleKeyword = (keywordUuid: string) => {
  if (selectedKeywords.value.includes(keywordUuid)) {
    selectedKeywords.value = selectedKeywords.value.filter((uuid) => uuid !== keywordUuid);
  } else {
    selectedKeywords.value.push(keywordUuid);
  }
};

const getQuestionOptions = (sectionIndex: number) => {
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
</script>
