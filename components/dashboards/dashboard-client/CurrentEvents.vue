<template>
  <v-card elevation="10" class="roun-">
    <v-card-text class="position-relative current-events__container">
      <div class="d-flex justify-space-between d-block align-center">
        <div>
          <h5 class="text-h5 mb-1 font-weight-semibold">Evènements en cours</h5>
        </div>
      </div>
      <div>
        <div class="mt-10 mb-sm-12 mb-8 current-events__cards" v-if="events.length > 0">
          <div v-for="event in paginatedEvents" class="current-events__card">
            <div>
              <h4>{{ event.name }}</h4>
              <h5>{{ event.date }}</h5>
              <v-chip
                :color="event.status === 'cancelled' ? 'error' : 'success'"
                variant="flat"
                size="small"
                >{{ event.status == 'cancelled' ? 'rejetée' : 'acceptée' }}</v-chip
              >
            </div>
            <v-btn color="primary" @click="openDialog(event.uuid)">Ajouter un secteur</v-btn>
          </div>
        </div>
        <v-pagination
          v-if="totalPages >= 1"
          v-model="currentPage"
          :length="totalPages"
          :total-visible="5"
          class="mt-4 current-events__pagination"
        ></v-pagination>
      </div>
    </v-card-text>
  </v-card>
  <Teleport to="body">
    <DynamicFormDialog
      v-if="isDialogOpen"
      v-model:open-modal="isDialogOpen"
      :sections="sections"
      :model-value="formAnswers"
      :locked-sections="lockedSections"
      @submit="onSubmitEdit"
    />
  </Teleport>
</template>

<script setup lang="ts">
import DynamicFormDialog from '@/components/questionnaires/DynamicFormDialog.vue';
import ClientQuestionnaire from '@/data/questionnaire-client.json';
import type { SectionSchema, EventCreatePayload } from '~/models/questionnaire/QuestionnaireClientModel';
import { useEventPrefill } from '@/composables/questionnaire-client/UseEventPrefill';
import type { eventModel } from '~/models/events/eventModel';
import { useEventService } from '~/services/UseEventService';

const { clientProfile } = storeToRefs(useUserStore());
const { events, answers } = storeToRefs(eventsStore());
const { getEventsPerOrganisator, getEventsInstance } = useEventService();

const isDialogOpen = ref(false);
const currentPage = ref(1);
const itemsPerPage = 3;
const selectedEvent = ref<eventModel | null>(null);
const selectedEventUuid = ref<string | null>(null);
const formAnswers = ref<Record<string, any>>({});
const lockedSections = ref<Set<string>>(new Set());
const sections = (ClientQuestionnaire.sections as SectionSchema[]);
const { prefillFormFromEvent } = useEventPrefill();

const totalPages = computed(() => {
  return Math.ceil(events.value.length / itemsPerPage);
});

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return events.value.slice(start, end);
});

const openDialog = async (eventUuid: string) => {
  const findSelectedEvent = events.value.find((event) => event.uuid === eventUuid) || null;
  selectedEvent.value = findSelectedEvent;
  selectedEventUuid.value = eventUuid;
  if (findSelectedEvent) {
    await getEventsInstance(findSelectedEvent.uuid);
  }
  isDialogOpen.value = true;
};

const onSubmitEdit = async (payload: EventCreatePayload) => {
  // Placeholder: ici on pourrait appeler un service pour ajouter/mettre à jour les services
  // await addServicesToEvent(selectedEventUuid.value!, payload.services)
  isDialogOpen.value = false;
};

onMounted(async () => {
  console.log(clientProfile.value, 'CLIENT PROFILE');

  await getEventsPerOrganisator();
});

watch(
  () => answers.value,
  async (val) => {
    if (val) {
      const prefilled = await prefillFormFromEvent(val as eventModel, sections);
      formAnswers.value = prefilled.formState;
      lockedSections.value = prefilled.lockedSections;
    } else {
      formAnswers.value = {};
      lockedSections.value = new Set();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.current-events {
  &__container {
    position: relative;
    min-height: 300px;
  }
  &__cards {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
  }
  &__card {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    :deep(.v-pagination) {
      font-size: 0.5rem;
    }
    :deep(.v-pagination__item) {
      min-width: 32px;
      height: 32px;
      font-size: 0.75rem;
    }
  }
}
</style>
