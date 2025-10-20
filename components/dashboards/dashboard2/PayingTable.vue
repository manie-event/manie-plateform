<template>
  <VCard elevation="10" class="mb-16">
    <v-card-text>
      <div class="d-flex align-center justify-space-between">
        <div>
          <h5 class="v-card-title">Vos propositions en cours</h5>
        </div>
      </div>
      <div class="month-table" v-if="selectedProposition.length > 0">
        <v-table class="mt-5 mb-0">
          <template v-slot:default>
            <thead>
              <tr>
                <!-- A voir pour changer avec nom de la personne -->
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Nom de l'évènement
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Date de la prestation
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Localisation
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Nombre d'invités
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Status de la demande
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in selectedProposition" :key="item.id" class="month-item">
                <td>
                  <div class="d-flex align-center">
                    <div class="mr-4">
                      <h4 class="text-subtitle-1 font-weight-bold text-no-wrap text-grey200">
                        {{ item.name }}
                      </h4>
                    </div>
                  </div>
                </td>
                <td>
                  <h5
                    class="text-subtitle-1 font-weight-medium text-no-wrap text-grey200"
                    v-if="Array.isArray(item.date) && item.date.length"
                  >
                    Du <b>{{ getDate(item.date)[0] }}</b> au <b>{{ getDate(item.date)[1] }}</b>
                  </h5>
                  <h5 class="text-subtitle-1 font-weight-medium text-no-wrap text-grey200" v-else>
                    {{ item.date ? `Plutôt en ${item.date}` : 'A définir' }}
                  </h5>
                </td>
                <td>
                  <h4 class="text-subtitle-1 text-no-wrap font-weight-medium text-grey200">
                    {{ item.location.toUpperCase() }}
                  </h4>
                </td>
                <td>
                  <h4 class="text-subtitle-1 text-no-wrap font-weight-medium text-grey200">
                    <span>{{ item.people }} pers.</span>
                  </h4>
                </td>
                <td>
                  <v-chip
                    :class="'text-subtitle-1 font-weight-medium bg-light'"
                    variant="outlined"
                    size="x-small"
                    :color="getStatusColor(item.proposition.status)"
                    >{{ getStatusName(item.proposition.status) }}</v-chip
                  >
                </td>
                <td>
                  <v-btn color="primary" @click="findSelectedProposition(item.proposition.uuid)"
                    >voir plus+</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </div>
      <div v-else class="position-relative">
        <v-col cols="12" class="mt-6">
          <BaseEmptyState
            :style="{
              position: 'relative',
            }"
          >
            <template #image>
              <EmptyState :style="{ color: svgColor }" class="transition-colors duration-300" />
            </template>
            <template #description>
              <p class="text-subtitle-1">
                Veuillez vous positionner sur au moins une proposition pour accéder à cette section
              </p>
            </template>
          </BaseEmptyState>
        </v-col>
      </div>
    </v-card-text>
  </VCard>
  <Teleport to="body">
    <PropositionDetails
      v-if="selectedPropositionInformation"
      v-model:open-proposition-detail="openMarketModal"
      :selectedProposition="selectedPropositionInformation"
    />
    <errorToaster></errorToaster>
  </Teleport>
</template>
<script setup lang="ts">
import BaseEmptyState from '@/components/common/BaseEmptyState.vue';
import errorToaster from '@/components/common/errorToaster.vue';
import EmptyState from '@/public/images/empty-state/profil-vides.svg';
import { Teleport } from 'vue';
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import { usePropositionStore } from '~/stores/propositionStore';
import PropositionDetails from './PropositionDetails.vue';

const { setPropositions } = usePropositionStore();
const { serviceEventProposition } = storeToRefs(usePropositionStore());

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'warning';
    case 'reviewing':
      return 'primary';
    case 'completed':
      return 'success';
    case 'cancelled':
      return 'error';
    default:
      return 'grey';
  }
};

const getStatusName = (status: string) => {
  switch (status) {
    case 'pending':
      return 'En attente';
    case 'reviewing':
      return 'En cours d’examen';
    case 'completed':
      return 'Accepté';
    case 'cancelled':
      return 'Refusé';
  }
};

const getDate = (date: string[]) => (Array.isArray(date) ? formatDate(date) : undefined);
const customizer = useCustomizerStore();
const selectedPropositionInformation = ref<EventModelForProposition>();
const openMarketModal = ref(false);

const svgColor = computed(() => {
  return customizer.actTheme === 'DARK_BLUE_THEME' ? '#FFFFFF' : '#000000';
});

const findSelectedProposition = (propositionUuid: string) => {
  selectedPropositionInformation.value = serviceEventProposition.value.find(
    (p) => p.proposition.uuid === propositionUuid
  );

  openMarketModal.value = true;
};
const selectedProposition = computed(() => {
  return serviceEventProposition.value.filter(
    (proposition: EventModelForProposition) => proposition.proposition.professionalMessage
  );
});
</script>
