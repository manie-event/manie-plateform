<template>
  <v-dialog v-model="openEventDetails" max-width="1200">
    <v-card>
      <h3>{{ event }}</h3>
      <v-btn @click="isEventModificationOpen = true" color="primary" class="w-50 my-6"
        >Je souhaite modifier mon évênement
      </v-btn>
      <v-btn @click="isAddingServiceOpen = true" color="success" class="w-50 my-6"
        >Je souhaite ajouter un/des service(s)
      </v-btn>
    </v-card>
  </v-dialog>

  <Teleport to="body">
    <CustomerForm v-model:open-customer-form="isEventModificationOpen" :answers />
    <AddEventService v-model:add-service-open="isAddingServiceOpen" :answers />
  </Teleport>
</template>
<script setup lang="ts">
import { Teleport } from 'vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';
import type { eventModel } from '~/models/events/eventModel';
import type { QuestionnaireClient } from '~/models/questionnaire/QuestionnaireClientModel';
import AddEventService from './AddEventService.vue';

const isEventModificationOpen = ref(false);
const isAddingServiceOpen = ref(false);
defineProps<{
  event: eventModel;
  answers: QuestionnaireClient;
}>();

const openEventDetails = defineModel<boolean>('modelValue', { default: false });
</script>
