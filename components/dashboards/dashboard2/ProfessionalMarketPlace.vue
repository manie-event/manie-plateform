<template>
  <v-dialog v-model="openPropositionPro" max-width="800">
    <v-card>
      <v-card-title class="text-h5">Professional Market Place</v-card-title>
      <v-card-text>
        <div v-if="props.propositionFiltered.length > 0 && paginatedEvents.length > 0">
          <v-card v-for="proposition in paginatedEvents">
            <v-card-text>
              {{ proposition }}
              <v-btn
                color="success"
                @click="openPropositionAcceptedModal(proposition.proposition.uuid)"
                >Je souhaite me positionner sur cette annonce</v-btn
              >
            </v-card-text>
          </v-card>
        </div>
        <div v-else-if="paginatedEvents.length < 1" class="position-relative">
          <v-col cols="12" class="mt-6">
            <BaseEmptyState
              :style="{
                position: 'relative',
              }"
            >
              <template #image>
                <img :src="EmptyState" alt="Empty State" />
              </template>
              <template #description>
                <p class="text-subtitle-1">Aucune nouvelle annonce qui correspond à vos critères</p>
              </template>
            </BaseEmptyState>
          </v-col>
        </div>
      </v-card-text>
      <div class="text-center">
        <v-pagination
          v-if="paginatedEvents.length > 3"
          v-model="currentPage"
          :length="getPropositionBy3"
          next-icon="mdi-menu-right"
          prev-icon="mdi-menu-left"
        ></v-pagination>
      </div>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="openPropositionPro = false">Fermer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <Teleport to="body">
    <PropositionAccepted v-model:is-proposition-accepted="isAccepted" :uuid="propositionUuid" />
  </Teleport>
</template>

<script setup lang="ts">
import BaseEmptyState from '@/components/common/BaseEmptyState.vue';
import EmptyState from '@/public/images/empty-state/profil-vide.png';
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import { usePropositionStore } from '~/stores/propositionStore';
import PropositionAccepted from './PropositionAccepted.vue';

const props = defineProps<{ propositionFiltered: EventModelForProposition[] }>();
const openPropositionPro = defineModel<boolean>('openPropositionPro', { default: false });

const { serviceEventProposition } = storeToRefs(usePropositionStore());
const propositionUuid = ref('');
const isAccepted = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(3);

const getPropositionBy3 = computed(() =>
  Math.ceil(props.propositionFiltered.length / itemsPerPage.value)
);

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;

  const end = start + itemsPerPage.value;

  return props.propositionFiltered.slice(start, end);
});

const openPropositionAcceptedModal = (uuid: string) => {
  propositionUuid.value = uuid;
  isAccepted.value = true;
};
</script>
