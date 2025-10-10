<template>
  <v-dialog v-model="openEventDetails" max-width="1200">
    <v-card>
      <div class="d-flex flex-row" style="height: 100%">
        <!-- Colonne gauche : Liste des services -->
        <div class="flex-grow-1 pa-8" style="max-width: 60%">
          <h3 class="mb-4">Services de l'événement</h3>
          <v-row>
            <v-col cols="6">
              <LatestDeals />
            </v-col>
            <v-col cols="6">
              <Product />
            </v-col>
            <v-col cols="12">
              <CheckList />
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
                  <v-list-item-title>{{ event.date[0] }}</v-list-item-title>
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

            <!-- Progression -->
            <div class="w-100 mb-6">
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption">Progression</span>
                <span class="text-caption font-weight-bold">{{ event.progressPercentage }}%</span>
              </div>
              <v-progress-linear
                :model-value="event.progressPercentage"
                color="success"
                height="8"
                rounded
              />
            </div>

            <!-- Spacer pour pousser les boutons en bas -->
            <div class="flex-grow-1"></div>

            <!-- Actions -->
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
  </Teleport>
</template>
<script setup lang="ts">
import Product from '@/components/dashboards/dashboard-client/ProductsChart.vue';
import { Teleport } from 'vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';
import type { eventModel } from '~/models/events/eventModel';
import type { QuestionnaireClient } from '~/models/questionnaire/QuestionnaireClientModel';
import AddEventService from './AddEventService.vue';
import CheckList from './CheckList.vue';
import LatestDeals from './LatestDeals.vue';

const isEventModificationOpen = ref(false);
const isAddingServiceOpen = ref(false);
defineProps<{
  event: eventModel;
  answers: QuestionnaireClient;
}>();

const openEventDetails = defineModel<boolean>('modelValue', { default: false });
</script>
