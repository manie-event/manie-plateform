<template>
  <v-dialog v-model="openEventDetails" max-width="1200">
    <v-card>
      <div class="d-flex flex-row" style="height: 100%">
        <!-- Colonne gauche : Liste des services -->
        <div class="flex-grow-1 pa-8" style="max-width: 60%">
          <h3 class="mb-4"></h3>
          <v-row>
            <div class="d-flex">
              <v-col
                cols="6"
                v-if="Array.isArray(event.date)"
                class="d-flex flex-column justify-md-space-between"
              >
                <DateCounter :eventDate="event.date[0]" />
                <LatestDeals :event="getEventProgression" />
              </v-col>
              <!-- <v-col cols="6">
              <LatestDeals :event="getEventProgression" />
            </v-col> -->
              <v-col cols="6">
                <Product :event />
              </v-col>
            </div>
            <v-col cols="12">
              <Notes :event />
            </v-col>
            <!-- <v-col cols="6"> <ContactList /> </v-col> -->
            <v-col cols="12">
              <CheckList :event />
            </v-col>
          </v-row>
        </div>

        <v-divider vertical></v-divider>

        <!-- Colonne droite : Infos et actions -->
        <div class="pa-8 d-flex flex-column" style="width: 40%; min-width: 350px">
          <div class="d-flex flex-column align-center flex-grow-1">
            <h2 class="mb-6">{{ event.name }}</h2>

            <!-- Informations de l'événement -->
            <div class="w-100 mb-6">
              <v-list density="compact">
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon>mdi-calendar</v-icon>
                  </template>
                  <v-list-item-title v-if="Array.isArray(event.date)">{{
                    event.date[0]
                  }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon>mdi-map-marker</v-icon>
                  </template>
                  <v-list-item-title>{{ event.location }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon>mdi-account-group</v-icon>
                  </template>
                  <v-list-item-title>{{ event.people }} personnes</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon>mdi-currency-eur</v-icon>
                  </template>
                  <v-list-item-title>Budget : {{ event.budget }}€</v-list-item-title>
                </v-list-item>
              </v-list>
            </div>

            <!-- Actions -->
            <v-btn
              @click="openPricingModal = true"
              color="primary"
              class="w-100 mb-4"
              variant="tonal"
            >
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
        </div>
      </div>
    </v-card>
  </v-dialog>

  <Teleport to="body">
    <CustomerForm v-model:open-customer-form="isEventModificationOpen" :answers />
    <AddEventService v-model:add-service-open="isAddingServiceOpen" :answers />
    <PricingChoice v-model:test="openPricingModal" :selectedEventUuid="event.uuid" :event />
  </Teleport>
</template>
<script setup lang="ts">
import PricingChoice from '@/components/dashboards/dashboard-client/PricingChoice.vue';
import Product from '@/components/dashboards/dashboard-client/ProductsChart.vue';
import Notes from '@/pages/apps/notes/index.vue';
import { Teleport } from 'vue';
import LatestDeals from '~/components/dashboards/dashboard-client/LatestDeals.vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';
import type { eventModel, eventService } from '~/models/events/eventModel';
import type { EventModelForProposition } from '~/models/events/eventModelForProgression';
import type { QuestionnaireClient } from '~/models/questionnaire/QuestionnaireClientModel';
import { usePropositionStore } from '../../../stores/propositionStore';
import AddEventService from './AddEventService.vue';
import CheckList from './CheckList.vue';
import DateCounter from './DateCounter.vue';

const props = defineProps<{
  event: eventModel;
  answers: QuestionnaireClient;
}>();

const { professionalResponseProposition } = storeToRefs(usePropositionStore());
const isEventModificationOpen = ref(false);
const isAddingServiceOpen = ref(false);

const openEventDetails = defineModel<boolean>('modelValue', { default: false });

const openPricingModal = ref(false);

const getEventProgression = computed(() => {
  // Les propositions complété vs. le total de services engagés

  //Récupérer l'event
  // Regarder combien

  console.log(props.event, 'EVENT');

  const uniqueEventServices = props.event.eventServices.reduce((acc: eventService[], current) => {
    const existing = acc.find((es: eventService) => es.serviceUuid === current.serviceUuid);

    console.log(current, 'current');

    if (!existing) {
      acc.push(current);
    } else if (current.status === 'completed' && existing.status !== 'completed') {
      const index = acc.indexOf(existing);
      acc[index] = current;
    }

    console.log(acc, 'ACC');

    return acc;
  }, [] as eventService[]);

  const totalServices = uniqueEventServices.length;

  // const getCompletedProposition = async () => serviceEventProposition

  const getProfesionalProposition = () => {
    professionalResponseProposition.value.filter(
      (response) => response.uuid === props.event.eventServices
    );
  };
  console.log(professionalResponseProposition.value, 'serviceEventProposition');

  const completedServices = props.event.eventServices.filter(
    (es) => es.status === 'completed'
  ).length;
  const progression = totalServices > 0 ? Math.round((completedServices / totalServices) * 100) : 0;
  return {
    ...props.event,
    progression: progression,
    completedServices: completedServices,
    totalServices: totalServices,
  } as EventModelForProposition;
});
</script>
