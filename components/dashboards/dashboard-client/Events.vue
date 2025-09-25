<template>
  <v-card elevation="10" class="roun-">
    <v-card-text class="position-relative events__container">
      <div class="d-flex justify-space-between d-block align-center">
        <div class="mb-6">
          <h5 class="text-h5 mb-1 font-weight-semibold">Créez un évenènement</h5>
        </div>
      </div>

      <button @click="openModal = !openModal" class="events__add-button">+</button>
      <!-- <client-questionnaire v-if="openModal" v-model:open-modal="openModal"></client-questionnaire> -->
      <!-- <DynamicFormDialog
        v-if="openModal"
        v-model:open-modal="openModal"
        :sections="sections"
        v-model="answers"
        @submit="onSubmit"
      /> -->
      <CustomerForm v-if="openModal" v-model:open-customer-form="openModal" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import ClientQuestionnaire from '@/data/questionnaire-client.json';
import { ref } from 'vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';
import type {
  EventCreatePayload,
  SectionSchema,
} from '~/models/questionnaire/QuestionnaireClientModel';
import { useEventService } from '~/services/UseEventService';

const eventService = useEventService();

const sections = ClientQuestionnaire.sections as SectionSchema[];
const openModal = ref(false);
const answers = ref<Record<string, any>>({});
const { createEventService } = eventService;

const onSubmit = (payload: EventCreatePayload) => {
  createEventService(payload);
};
</script>
<style lang="scss" scoped>
.events {
  &__container {
    position: relative;
    min-height: 300px;
  }
  &__add-button {
    border-radius: 11%;
    color: rgb(255, 255, 255);
    font-weight: 900;
    width: 80px;
    height: 80px;
    background: black;
    position: absolute;
    bottom: 20px;
    right: 20px;
    transition: all 0.4s ease-in;
    &:hover {
      background: linear-gradient(310deg, rgba(235, 247, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
      width: 100px;
      border: 1px solid black;
      color: black;
      height: 100px;
      transition: all 0.4s ease-out;
    }
  }
}
</style>
