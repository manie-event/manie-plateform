<template>
  <v-dialog v-model="event" width="800">
    <v-card class="pa-4">
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
            placeholder="Sélectionnez un secteur"
          ></v-select>
        </div>

        <div
          v-for="question in getFilteredQuestionsForService(service.selectedSector)"
          :key="question.sector + question.category"
          v-if="service.selectedSector"
          class="m-4"
        >
          <h4>{{ question.question }}</h4>
          <div v-if="question.isService">
            <v-btn
              v-for="answer in question.answers"
              :key="answer.uuid"
              :color="service.selectedServiceId === answer.uuid ? 'primary' : 'default'"
              :variant="service.selectedServiceId === answer.uuid ? 'flat' : 'outlined'"
              clickable
              @click="selectServiceForIndex(serviceIndex, answer.uuid)"
            >
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
              @click="toggleKeywordForService(serviceIndex, answer.uuid)"
            >
              {{ answer.value }}
            </v-chip>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <v-btn color="primary" variant="outlined" @click="addNewService">
          Ajouter un nouveau service
        </v-btn>
      </div>

      <div class="add-event">
        <v-btn @click="addNewEventService" color="primary"
          >Ajouter mes nouveaux services à mon évênement</v-btn
        >
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

const event = defineModel<boolean>('addServiceOpen', { default: false });

const { sectors, servicesFiltered } = storeToRefs(eventsStore());
const { keywords, clientProfile } = storeToRefs(useUserStore());
const { createEventServiceItem } = useEventService();

const selectedServices = ref([
  {
    selectedSector: undefined,
    selectedServiceId: '',
    selectedKeywords: [],
  },
]);

const hasAlreadyCreatedService = computed(() => props.answers?.isAlreadyCreated ?? false);

const addNewEventService = async () => {
  try {
    const newService = selectedServices.value.map((service) =>
      createEventServiceItem({
        serviceUuid: service.selectedServiceId,
        eventUuid: props.answers.eventServices[0].$original.eventUuid,
        keywordsUuid: service.selectedKeywords,
      })
    );

    await Promise.all(newService);

    event.value = false;
  } catch (error) {
    console.error('Impossible de créer le service', error);
  }
};

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

const selectServiceForIndex = (serviceIndex: number, serviceUuid: string) => {
  const service = selectedServices.value[serviceIndex];
  if (service.selectedServiceId === serviceUuid) {
    service.selectedServiceId = '';
  } else {
    service.selectedServiceId = serviceUuid;
  }
};

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
</script>
<style scoped>
.add-event {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
