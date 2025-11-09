<template>
  <div v-if="props.events.length > 0">
    <div class="d-flex gap-3">
      <div v-for="event in props.events" :key="event.uuid" class="d-flex">
        <v-btn @click="selectedEvent(event.uuid)" class="event-dashboard__btn mb-6">
          {{ event.name }}
        </v-btn>
      </div>
    </div>
    <div class="d-flex align-center justify-center flex-column">
      <v-btn @click="openPricingModal = true" color="primary" class="w-100 mb-4" variant="tonal">
        <v-icon start>mdi-page-last</v-icon>
        Me faire accompagner
      </v-btn>
      <v-btn
        @click="isEventModificationOpen = true"
        color="primary"
        class="w-100 mb-4"
        variant="tonal"
      >
        <v-icon start>mdi-pencil</v-icon>
        Modifier l'événement
      </v-btn>
      <v-btn @click="isAddingServiceOpen = true" color="success" class="w-100" variant="flat">
        <v-icon start>mdi-plus</v-icon>
        Ajouter des services
      </v-btn>
    </div>

    <div v-if="currentEvent">
      <v-row>
        <v-col cols="12" lg="4">
          <DateCounter :event-date="currentEvent.date[0]" />
        </v-col>
        <v-col cols="12" lg="4">
          <LatestDeals
            :proposition="getPropositionsByEvent"
            :current-event-service="currentEvent.eventServices"
          />
        </v-col>
        <v-col cols="12" lg="4">
          <Product :current-event="currentEvent" />
        </v-col>
        <v-col cols="12" lg="6">
          <Notes :event="currentEvent" />
        </v-col>
        <v-col cols="12" lg="6">
          <CheckList :event="currentEvent" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <PropositionsPresta :current-propositions="getPropositionsByEvent" />
        </v-col>
      </v-row>
    </div>
  </div>
  <div v-else>
    <BaseEmptyState>
      <template #image style="height: 500px">
        <LightEmptyState
          v-if="customizer.actTheme !== 'DARK_BLUE_THEME'"
          style="width: 150px; height: auto; margin-bottom: 10px"
        />
        <DarkIcon v-else style="width: 150px; height: auto; margin-bottom: 10px" />
      </template>
      <template #description>
        <p class="text-subtitle-1">
          Veuillez créer un évènement pour avoir accès à tous les outils de gestion
        </p>
      </template>
    </BaseEmptyState>
  </div>
  <Teleport to="body">
    <CustomerForm
      v-model:open-customer-form="isEventModificationOpen"
      :answers="formAnswersForEvent"
    />
    <AddEventService
      v-model:add-service-open="isAddingServiceOpen"
      :answers="formAnswersForServices"
    />
    <PricingChoice
      v-if="currentEvent"
      v-model:test="openPricingModal"
      :selectedEventUuid="currentEvent?.uuid"
      :event="currentEvent"
    />
  </Teleport>
</template>
<script setup lang="ts">
import BaseEmptyState from '@/components/common/BaseEmptyState.vue';
import CheckList from '@/components/dashboards/dashboard-client/CheckList.vue';
import DateCounter from '@/components/dashboards/dashboard-client/DateCounter.vue';
import LatestDeals from '@/components/dashboards/dashboard-client/LatestDeals.vue';
import PropositionsPresta from '@/components/dashboards/dashboard-client/PropositionsPresta.vue';
import Notes from '@/pages/apps/notes/index.vue';
import LightEmptyState from '@/public/images/svgs/empty-state.svg';
import Product from '~/components/dashboards/dashboard-client/EventBudget.vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';
import type { eventModel } from '~/models/events/eventModel';
import { useEventService } from '~/services/UseEventService';
import AddEventService from './AddEventService.vue';
import PricingChoice from './PricingChoice.vue';

const props = defineProps<{
  events: eventModel[];
}>();

const isEventModificationOpen = ref(false);
const isAddingServiceOpen = ref(false);
const openPricingModal = ref(false);
const formAnswersForEvent = ref();
const formAnswersForServices = ref();
const { professionalResponseProposition } = storeToRefs(usePropositionStore());
const { getEventsInstance } = useEventService();

const currentEvent = ref<eventModel>();

const selectedEvent = (uuid: string) => {
  currentEvent.value = props.events.find((event) => event.uuid === uuid);
  if (currentEvent.value?.uuid) {
    getAnswers(currentEvent.value.uuid);
  }
};

const getPropositionsByEvent = computed(() => {
  if (!currentEvent.value) return [];

  return professionalResponseProposition.value.filter(
    (proposition) => proposition.eventUuid === currentEvent.value?.uuid
  );
});

const getAnswers = async (uuid: string) => {
  const responses = await getEventsInstance(uuid);

  formAnswersForEvent.value = responses.$original;
  formAnswersForServices.value = responses.$preloaded;
};

onMounted(() => {
  getAnswers(props.events[0].uuid);
});
</script>
<style lang="scss" scoped>
.event-dashboard {
  &__btn {
    width: fit-content;
    padding: 0.2rem 1.5rem;
  }
}
</style>
