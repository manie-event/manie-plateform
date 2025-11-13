<template>
  <v-dialog v-model="dialogOpen" width="800">
    <v-card class="pa-4">
      <Icon
        icon="ri:close-fill"
        size="22"
        class="text-grey100 cursor-pointer"
        :style="{ position: 'absolute', right: '20px', top: '20px' }"
        @click="dialogOpen = false"
      />
      <!-- Services existants -->
      <v-alert
        color="rgb(var(--v-theme-darkbg))"
        style="color: rgb(var(--v-theme-background)); min-height: 50px"
        class="w-auto p-5 mb-5"
      >
        Chaque secteur d'activité sélectionné ne pourra pas être modifié une fois la mise en
        relation commencée
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
          <h4>De quoi avez-vous besoin?</h4>
          <v-select
            v-model="service.selectedSector"
            :items="sectorFiltered"
            item-title="label"
            item-value="value"
            clearable
            class="my-3"
            placeholder="Sélectionnez un secteur"
            @update:modelValue="updateServiceSector(serviceIndex, service.selectedSector)"
          />
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
              :color="
                service.selectedServiceId === answer.uuid ? 'rgb(var(--v-theme-darkbg))' : 'default'
              "
              :style="{
                color: service.selectedServiceId === answer.uuid ? 'white' : 'black',
              }"
              :variant="service.selectedServiceId === answer.uuid ? 'flat' : 'outlined'"
              @click="selectServiceForIndex(serviceIndex, answer.uuid)"
            >
              {{ answer.name }}
            </v-btn>
          </div>
          <div v-else>
            <v-chip
              v-for="answer in question.answers"
              :key="answer.id"
              :color="service.selectedKeywords.includes(answer.uuid) ? '#f39454' : 'grey'"
              :style="{
                color: service.selectedKeywords.includes(answer.uuid) ? 'white' : 'black',
              }"
              :variant="service.selectedKeywords.includes(answer.uuid) ? 'flat' : 'outlined'"
              @click="toggleKeywordForService(serviceIndex, answer.uuid)"
            >
              {{ answer.value }}
            </v-chip>
          </div>
        </div>
      </div>

      <div class="d-flex justify-space-between align-center">
        <v-btn
          color="rgb(var(--v-theme-darkbg))"
          variant="outlined"
          class="w-auto"
          @click="addNewService"
        >
          Ajouter un nouveau service
        </v-btn>

        <v-btn
          @click="addNewEventService"
          color="rgb(var(--v-theme-darkbg))"
          style="color: rgb(var(--v-theme-background))"
          class="w-auto"
        >
          Ajouter mes nouveaux services à mon événement
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import questionnaire from '@/data/questionnaire-client-refonte.json';
import { eventsStore } from '@/stores/events';
import { Icon } from '@iconify/vue';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import type { SectorsDto } from '~/models/dto/sectorsDto';
import type { eventModel } from '~/models/events/eventModel';
import { useEventService } from '~/services/UseEventService';
import { useKeywordsStore } from '~/stores/keywordsStore';
const props = defineProps<{ event: eventModel }>();

// V-model pour contrôler l'ouverture du dialogue depuis le parent
const dialogOpen = defineModel<boolean>('addServiceOpen', { default: false });

const { sectors, servicesFiltered } = storeToRefs(eventsStore());
const { keywords } = storeToRefs(useKeywordsStore());
const { createEventServiceItem } = useEventService();

// Liste des services affichés dans le formulaire
const selectedServices = ref<
  Array<{ selectedSector?: string; selectedServiceId: string; selectedKeywords: string[] }>
>([]);

// Pré-remplir les services à l’ouverture du composant
onMounted(() => {
  if (props.event?.eventServices?.length) {
    selectedServices.value = props.event.eventServices.map((srv: any) => {
      const service = servicesFiltered.value.find((s) => s.uuid === srv.serviceUuid);
      const sector = sectors.value.find((sect) => sect.uuid === service?.sectorUuid);
      return {
        selectedSector: sector?.name ?? undefined,
        selectedServiceId: srv.serviceUuid,
        selectedKeywords: (srv.keywordsUuid ?? []).map((k: any) =>
          typeof k === 'string' ? k : k.uuid
        ),
      };
    });
  } else {
    // Aucun service existant : on initialise un bloc vierge
    selectedServices.value = [
      {
        selectedSector: undefined,
        selectedServiceId: '',
        selectedKeywords: [],
      },
    ];
  }
});

// Indique si l’événement comporte déjà des services créés (empêche la suppression)
const hasAlreadyCreatedService = computed(() => props.event?.eventServices?.length > 0);

// Envoi des nouveaux services à l'API
const addNewEventService = async () => {
  try {
    const createCalls = selectedServices.value.map((service) =>
      createEventServiceItem({
        serviceUuid: service.selectedServiceId,
        eventUuid: props.event.uuid,
        keywordsUuid: service.selectedKeywords,
      })
    );
    await Promise.all(createCalls);
    dialogOpen.value = false;
  } catch (error) {
    console.error('Impossible de créer les services', error);
  }
};

// Ajouter un nouveau bloc de service vide
const addNewService = () => {
  selectedServices.value.push({
    selectedSector: undefined,
    selectedServiceId: '',
    selectedKeywords: [],
  });
};

// Supprimer un bloc de service (si plus d'un)
const removeService = (index: number) => {
  if (selectedServices.value.length > 1) {
    selectedServices.value.splice(index, 1);
  }
};

// Sélectionner le service pour un index donné
const selectServiceForIndex = (serviceIndex: number, serviceUuid: string) => {
  const service = selectedServices.value[serviceIndex];
  if (service.selectedServiceId === serviceUuid) {
    service.selectedServiceId = '';
  } else {
    service.selectedServiceId = serviceUuid;
  }
};

// Ajouter ou retirer un mot-clé pour un service donné
const toggleKeywordForService = (serviceIndex: number, keywordUuid: string) => {
  const service = selectedServices.value[serviceIndex];
  const keywordIndex = service.selectedKeywords.indexOf(keywordUuid);
  if (keywordIndex > -1) {
    service.selectedKeywords.splice(keywordIndex, 1);
  } else {
    service.selectedKeywords.push(keywordUuid);
  }
};

// Mettre à jour le secteur d’un service et réinitialiser ses choix
const updateServiceSector = (serviceIndex: number, selectedSector: any) => {
  const service = selectedServices.value[serviceIndex];
  service.selectedSector = selectedSector;
  service.selectedServiceId = '';
  service.selectedKeywords = [];
};

// Questions et réponses disponibles pour un secteur donné
const getFilteredQuestionsForService = (selectedSector: any) => {
  if (!selectedSector) return [];
  return mapSectionsWithServices(selectedSector);
};

// Sectors disponibles en fonction des services autorisés
const sectorFiltered = computed(() => {
  const servicefiltered = servicesFiltered.value.map((s) => s.sectorUuid);
  const sectorList = sectors.value.filter((sector) => servicefiltered.includes(sector.uuid));
  const activityAvailable = ACTIVITY_ITEMS.map((activity) => {
    const matchingSector = sectorList.find((s) => s.name === activity.value);
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

// Association questions/services/keywords pour un secteur
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
