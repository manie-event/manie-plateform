<template>
  <div class="d-flex gap-3">
    <div v-for="event in events" :key="event.uuid" class="d-flex">
      <v-btn @click="selectedEvent(event.uuid)" class="event-dashboard__btn mb-6">
        {{ event.name }}
      </v-btn>
    </div>
  </div>

  <div v-if="currentEvent">
    <v-row>
      <v-col cols="4" xs="12" sm="12" lg="4">
        <DateCounter :event-date="currentEvent.date[0]" />
      </v-col>
      <v-col cols="4" xs="12" sm="12" lg="4">
        <LatestDeals
          :proposition="getPropositionsByEvent"
          :current-event-service="currentEvent.eventServices"
        />
      </v-col>
      <v-col cols="4" xs="12" sm="12" lg="4">
        <Product :current-event="currentEvent" />
      </v-col>
      <v-col cols="" xs="12" sm="12" lg="6">
        <Notes :event="currentEvent" />
      </v-col>
      <v-col cols="6" xs="12" sm="12" lg="6">
        <CheckList :event="currentEvent" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <PropositionsPresta :current-propositions="getPropositionsByEvent" />
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import CheckList from '@/components/dashboards/dashboard-client/CheckList.vue';
import DateCounter from '@/components/dashboards/dashboard-client/DateCounter.vue';
import LatestDeals from '@/components/dashboards/dashboard-client/LatestDeals.vue';
import PropositionsPresta from '@/components/dashboards/dashboard-client/PropositionsPresta.vue';
import Notes from '@/pages/apps/notes/index.vue';
import Product from '~/components/dashboards/dashboard-client/EventBudget.vue';
import { useEventServiceProposition } from '~/composables/event-service-propositions/UseEventServiceProposition';
import type { eventModel } from '~/models/events/eventModel';
import { useEventService } from '~/services/UseEventService';

const { events } = storeToRefs(eventsStore());
const { professionalResponseProposition } = storeToRefs(usePropositionStore());
const { getEventsPerOrganisator } = useEventService();
const { getServicePropositionForClient } = useEventServiceProposition();
const currentEvent = ref<eventModel>();
const currentPropositions = ref();
const selectedEvent = (uuid: string) => {
  currentEvent.value = events.value.find((event) => event.uuid === uuid);
};

const getPropositionsByEvent = computed(() => {
  if (!currentEvent.value) return [];

  return professionalResponseProposition.value.filter((proposition) =>
    proposition.eventServices.some(
      (eventService) => eventService.eventUuid === currentEvent.value?.uuid
    )
  );
});

onMounted(async () => {
  if (events.value.length > 0) {
    currentEvent.value = events.value[0];
  }
  await getEventsPerOrganisator();
  await getServicePropositionForClient();
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
