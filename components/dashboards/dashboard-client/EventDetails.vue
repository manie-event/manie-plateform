<template>
  <v-dialog v-model="openEventDetails" max-width="1200">
    <v-card>
      <h3>{{ event }}</h3>
      <v-btn @click="isOpen = true" color="primary" class="w-50 my-6"
        >Vous avez besoin d'un nouveau service ?</v-btn
      >
    </v-card>
  </v-dialog>

  <Teleport to="body">
    <CustomerForm v-model:open-customer-form="isOpen" :answers />
  </Teleport>
</template>
<script setup lang="ts">
import { Teleport } from 'vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';
import type { eventModel } from '~/models/events/eventModel';
import type { QuestionnaireClient } from '~/models/questionnaire/QuestionnaireClientModel';

const isOpen = ref(false);
defineProps<{
  event: eventModel;
  answers: QuestionnaireClient;
}>();

const openEventDetails = defineModel<boolean>('modelValue', { default: false });
</script>
