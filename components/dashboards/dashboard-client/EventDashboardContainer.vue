<template>
  <div v-if="props.events.length > 0">
    <div class="d-flex gap-3 overflow-scroll">
      <div v-for="event in props.events" :key="event.uuid" class="d-flex">
        <v-btn
          @click="selectedEvent(event.uuid)"
          class="event-dashboard__btn mb-6"
          :style="
            currentEvent?.uuid === event.uuid
              ? {
                  background: 'rgb(var(--v-theme-darkbg))',
                  color: 'rgb(var(--v-theme-background))',
                }
              : {
                  background: 'rgb(var(--v-theme-background))',
                  color: 'rgb(var(--v-theme-darkbg))',
                }
          "
        >
          {{ event.typeEvent }}
        </v-btn>
      </div>
    </div>

    <v-row>
      <v-col cols="12" md="4">
        <v-btn
          @click="openPricingModal = true"
          class="btn-item w-100"
          variant="flat"
          style="background: rgb(var(--v-theme-darkbg)); color: rgb(var(--v-theme-background))"
        >
          Me faire accompagner
        </v-btn>
      </v-col>

      <v-col cols="12" md="4">
        <template v-if="getCurrentEventLocked">
          <v-tooltip text="Modification impossible : demande de prestataire en cours">
            <template #activator="{ props }">
              <span v-bind="props" class="btn-item">
                <v-btn
                  disabled
                  class="inner-btn w-100"
                  variant="flat"
                  style="
                    background: rgb(var(--v-theme-darkbg));
                    color: rgb(var(--v-theme-background));
                  "
                >
                  Modifier l'événement
                </v-btn>
              </span>
            </template>
          </v-tooltip>
        </template>

        <template v-else>
          <v-btn
            class="btn-item w-100"
            variant="flat"
            @click="isEventModificationOpen = true"
            style="background: rgb(var(--v-theme-darkbg)); color: rgb(var(--v-theme-background))"
          >
            Modifier l'événement
          </v-btn>
        </template>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn
          @click="isAddingServiceOpen = true"
          class="btn-item w-100"
          variant="flat"
          style="background: rgb(var(--v-theme-darkbg)); color: rgb(var(--v-theme-background))"
        >
          Ajouter des prestataires
        </v-btn>
      </v-col>
    </v-row>

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
    <EditEventForm
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
import { useProfessionalServiceService } from '@/services/useProfessionalServiceService';
import Product from '~/components/dashboards/dashboard-client/EventBudget.vue';
import EditEventForm from '~/components/questionnaires/EditEventForm.vue';
import { useSector } from '~/composables/sector/UseSector';
import type { eventModel } from '~/models/events/eventModel';
import { useProfessionalProposition } from '~/services/UseProfessionalProposition';
import PricingChoice from './PricingChoice.vue';
const props = defineProps<{
  events: eventModel[];
}>();

const isEventModificationOpen = ref(false);
const isAddingServiceOpen = ref(false);
const openPricingModal = ref(false);
const { professionalResponseProposition } = storeToRefs(usePropositionStore());
const { getListSector } = useSector();
const { getProfessionalService } = useProfessionalServiceService();
const { getListPropositionByEventService } = useProfessionalProposition();

const currentEvent = ref<eventModel>();
const selectedEvent = (uuid: string) => {
  currentEvent.value = props.events.find((event) => event.uuid === uuid);
};

const getCurrentEventLocked = ref(false);

watch(
  () => currentEvent.value,
  async (event) => {
    if (!event || !event.eventServices) {
      getCurrentEventLocked.value = false;
      return;
    }

    const serviceNotPending = event.eventServices.some((srv) => srv.status !== 'pending');

    const currentProposition = await Promise.all(
      event.eventServices.map((service) => getListPropositionByEventService(service.uuid))
    );

    const hasNonPendingProposition = currentProposition.some(
      (list) => Array.isArray(list) && list.some((p) => p.status !== 'pending')
    );

    getCurrentEventLocked.value = serviceNotPending || hasNonPendingProposition;
  },
  { immediate: true }
);

const getPropositionsByEvent = computed(() => {
  if (!currentEvent.value) return [];

  const eventUuid = currentEvent.value.uuid;

  return professionalResponseProposition.value.filter((proposition) => {
    const p = proposition as unknown as Record<string, any>;

    if ('eventUuid' in p) {
      return p.eventUuid === eventUuid;
    }
    if ('eventServiceUuid' in p && Array.isArray(currentEvent.value?.eventServices)) {
      return currentEvent.value?.eventServices.some((es: any) => es.uuid === p.eventServiceUuid);
    }

    return false;
  });
});

onMounted(async () => {
  await Promise.all([getListSector(), getProfessionalService()]);

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
.button-row {
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;
}

.btn-item {
  flex: 1 1 0;
  display: flex;
}

.inner-btn {
  flex: 1 1 0;
  width: 100%;
}

@media (max-width: 959px) {
  .v-btn {
    width: 100%;
  }
}
</style>
