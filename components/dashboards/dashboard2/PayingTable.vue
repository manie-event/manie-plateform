<template>
  <v-card elevation="2" class="mb-16">
    <v-card-text>
      <div class="d-flex align-center justify-space-between">
        <div>
          <h5 class="text-h6 mb-1 font-weight-semibold">Vos propositions en cours</h5>
        </div>
      </div>

      <!-- Table des propositions -->
      <div class="month-table" v-if="selectedProposition.length > 0">
        <v-table class="mt-5 mb-0">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Nom de l'évènement
                </th>
                <th
                  class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"
                  v-if="!mdAndDown"
                >
                  Date de la prestation
                </th>
                <th
                  class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"
                  v-if="!mdAndDown"
                >
                  Localisation
                </th>
                <th
                  class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"
                  v-if="!mdAndDown"
                >
                  Nombre d'invités
                </th>
                <th
                  class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"
                  v-if="!mdAndDown"
                >
                  Status de la demande
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in selectedProposition" :key="item.uuid" class="month-item">
                <td>
                  <div class="d-flex align-center">
                    <div class="mr-4">
                      <h4 class="text-subtitle-1 font-weight-bold text-no-wrap text-grey200">
                        {{ item.name }}
                      </h4>
                    </div>
                  </div>
                </td>
                <td v-if="!mdAndDown">
                  <h5
                    class="text-subtitle-1 font-weight-medium text-no-wrap text-grey200"
                    v-if="Array.isArray(item.date) && item.date.length"
                  >
                    {{ formatDate(item.date) }}
                  </h5>
                </td>
                <td v-if="!mdAndDown">
                  <h4 class="text-subtitle-1 text-no-wrap font-weight-medium text-grey200">
                    {{ item.location.toUpperCase() }}
                  </h4>
                </td>
                <td v-if="!mdAndDown">
                  <h4 class="text-subtitle-1 text-no-wrap font-weight-medium text-grey200">
                    <span>{{ item.people }} pers.</span>
                  </h4>
                </td>
                <td v-if="!mdAndDown">
                  <v-chip
                    :class="'text-subtitle-1 font-weight-medium bg-light'"
                    variant="outlined"
                    size="x-small"
                    :color="getStatusColor(item.proposition.status)"
                  >
                    {{ getStatusName(item.proposition.status) }}
                  </v-chip>
                </td>
                <td>
                  <v-btn
                    color="rgb(var(--v-theme-darkbg))"
                    style="color: rgb(var(--v-theme-background))"
                    @click="findSelectedProposition(item.proposition.uuid)"
                  >
                    voir plus
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </div>

      <!-- État vide -->
      <div v-else class="position-relative">
        <v-col cols="12" class="mt-6">
          <BaseEmptyState :style="{ position: 'relative' }">
            <template #image>
              <EmptyState
                :style="{ color: svgColor }"
                height="150"
                width="150"
                class="transition-colors duration-300 pb-6"
              />
            </template>
            <template #description>
              <p class="text-subtitle-1">
                Veuillez vous positionner sur au moins une annonce, pour accéder à cette section.
              </p>
            </template>
          </BaseEmptyState>
        </v-col>
      </div>
    </v-card-text>
  </v-card>

  <!-- Modale de détails de proposition -->
  <Teleport to="body">
    <PropositionDetailsForPresta
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
import EmptyState from '@/public/images/empty-state/no-proposition-presta.svg';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useDisplay } from 'vuetify';
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import { useCustomizerStore } from '~/stores/customizer';
import { usePropositionStore } from '~/stores/propositionStore';
import PropositionDetailsForPresta from './PropositionDetailsForPresta.vue';

const customizer = useCustomizerStore();
const svgColor = computed(() => {
  return customizer.actTheme === 'DARK_BLUE_THEME' ? '#FFFFFF' : '#000000';
});

// Récupération des propositions depuis le store
const { serviceEventProposition } = storeToRefs(usePropositionStore());
const { mdAndDown } = useDisplay();

// Sélection de propositions ayant un message de la part du pro
const selectedProposition = computed(() =>
  serviceEventProposition.value.filter((p) => p.proposition?.professionalMessage)
);

// Gère l'ouverture de la modale de détail
const selectedPropositionInformation = ref<EventModelForProposition>();
const openMarketModal = ref(false);

const findSelectedProposition = (propositionUuid: string) => {
  selectedPropositionInformation.value = serviceEventProposition.value.find(
    (p) => p.proposition.uuid === propositionUuid
  );
  openMarketModal.value = true;
};

// Fonctions auxiliaires pour le statut
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
    default:
      return '';
  }
};
</script>
