<template>
  <v-dialog v-model="event" width="auto">
    <v-card
      max-width="800"
      style="padding: 2rem"
      prepend-icon="mdi-update"
      text="Pas de panique, séléctionnez un secteur, un service et tout ce qui
      vous ferez plaisir"
      title="Oups, vous avez oublié un service pour votre évènement.."
    >
      <Loader v-if="loading"></Loader>
      <v-select
        v-if="currentPage === 1"
        v-model="sector"
        label="Le secteur du prochain service ?"
        :items="activityItems"
        item-title="label"
        item-value="value"
      />
      <div v-if="currentPage === 2 && !loading">
        <h4>Défénissez votre service à rajouter</h4>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
          <div v-for="service in professionnalServices">
            <v-chip
              style="width: fit-content"
              :class="selectedService?.id === service.id ? 'success' : 'warning'"
              @click="serviceSelector(service)"
              >{{ service.name }}</v-chip
            >
          </div>
        </div>
      </div>
      <div v-if="currentPage === 2 && !loading">
        <h4>Défénissez vos trucs à rajouter</h4>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
          <div v-for="keyword in keywords" v-if="currentPage === 2">
            <v-chip style="width: fit-content">{{ keyword.value }}</v-chip>
          </div>
        </div>
      </div>
      <template v-slot:actions>
        <v-btn
          v-if="currentPage === 1"
          class="ms-auto"
          color="primary"
          text="valider mon secteur d'activité"
          @click="updateSector(sector)"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import Loader from '~/components/common/Loader.vue';
import { useKeywords } from '~/composables/professional-user/UseKeywords';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import type { Services } from '~/models/professionalService/Services';

const { getSectors, loading } = useKeywords();
const { professionnalServices, keywords } = storeToRefs(useUserStore());

const event = defineModel();

const currentPage = ref(1);
const sector = ref();
const activityItems = ref(ACTIVITY_ITEMS);
const selectedService = ref();

const updateSector = (sector: string) => {
  console.log(sector, 'SECTOR');
  getSectors(sector);
  currentPage.value++;
};

const serviceSelector = (newService: Services) => {
  selectedService.value = newService;
  console.log(selectedService.value, 'SELECTED SERVICE');
};
</script>
