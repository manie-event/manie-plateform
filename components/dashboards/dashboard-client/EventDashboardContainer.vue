<template>
  <div v-if="props.events.length > 0">
    <div class="d-flex gap-3">
      <div v-for="event in props.events" :key="event.uuid" class="d-flex">
        <v-btn @click="selectedEvent(event.uuid)" class="event-dashboard__btn mb-6">
          {{ event.name }}
        </v-btn>
      </div>
    </div>
    <div class="d-flex flex-column flex-md-row align-center justify-space-between gap-3 w-100 my-6">
      <v-btn
        @click="openPricingModal = true"
        class="flex-grow-1"
        variant="flat"
        style="
          background: rgb(var(--v-theme-darkbg));
          color: rgb(var(--v-theme-background));
          text-decoration: none;
        "
      >
        Me faire accompagner
      </v-btn>

      <v-btn
        @click="isEventModificationOpen = true"
        class="flex-grow-1"
        variant="flat"
        style="
          background: rgb(var(--v-theme-darkbg));
          color: rgb(var(--v-theme-background));
          text-decoration: none;
        "
      >
        Modifier l'événement
      </v-btn>
      <v-btn
        @click="isAddingServiceOpen = true"
        class="flex-grow-1"
        variant="flat"
        style="
          background: rgb(var(--v-theme-darkbg));
          color: rgb(var(--v-theme-background));
          text-decoration: none;
        "
      >
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
      v-if="currentEvent"
      v-model:open-customer-form="isEventModificationOpen"
      :event="currentEvent"
    />
    <AddEventService
      v-if="currentEvent"
      v-model:add-service-open="isAddingServiceOpen"
      :event="currentEvent"
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
import AddEventService from '@/components/dashboards/dashboard-client/AddEventService.vue';
import CheckList from '@/components/dashboards/dashboard-client/CheckList.vue';
import DateCounter from '@/components/dashboards/dashboard-client/DateCounter.vue';
import LatestDeals from '@/components/dashboards/dashboard-client/LatestDeals.vue';
import PropositionsPresta from '@/components/dashboards/dashboard-client/PropositionsPresta.vue';
import Notes from '@/pages/apps/notes/index.vue';
import LightEmptyState from '@/public/images/svgs/empty-state.svg';
import Product from '~/components/dashboards/dashboard-client/EventBudget.vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';
import type { eventModel } from '~/models/events/eventModel';
import { useProfessionalService } from '~/services/UseProfessionalService';
import PricingChoice from './PricingChoice.vue';
const props = defineProps<{
  events: eventModel[];
}>();

const isEventModificationOpen = ref(false);
const isAddingServiceOpen = ref(false);
const openPricingModal = ref(false);
const { professionalResponseProposition } = storeToRefs(usePropositionStore());
const { getAllSectors, getKeywords } = useKeywordsStore();
const { getProfessionalService } = useProfessionalService();

const currentEvent = ref<eventModel>();

const selectedEvent = (uuid: string) => {
  currentEvent.value = props.events.find((event) => event.uuid === uuid);
};

const getPropositionsByEvent = computed(() => {
  if (!currentEvent.value) return [];

  const eventUuid = currentEvent.value.uuid;

  return professionalResponseProposition.value.filter((proposition) => {
    const p = proposition as unknown as Record<string, any>;

    // If proposition explicitly references the event UUID
    if ('eventUuid' in p) {
      return p.eventUuid === eventUuid;
    }

    // Otherwise, if proposition references an event service, match against current event's services
    if ('eventServiceUuid' in p && Array.isArray(currentEvent.value?.eventServices)) {
      return currentEvent.value?.eventServices.some((es: any) => es.uuid === p.eventServiceUuid);
    }

    return false;
  });
});

onMounted(async () => {
  await Promise.all([getAllSectors(), getKeywords(), getProfessionalService()]);

  if (props.events.length > 0) {
    selectedEvent(props.events[0].uuid);
  }
});
</script>
<style lang="scss" scoped>
.event-dashboard {
  &__btn {
    width: fit-content;
    padding: 0.2rem 1.5rem;
  }
}
@media (max-width: 959px) {
  .v-btn {
    width: 100%;
  }
}
</style>
