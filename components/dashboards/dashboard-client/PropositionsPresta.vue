<template>
  <VCard elevation="10" class="mb-16">
    <v-card-text>
      <div class="d-flex align-center justify-space-between">
        <div>
          <h5 class="text-h5 mb-1 font-weight-semibold">Vos propositions en cours</h5>
        </div>
      </div>
      <div class="month-table" v-if="professionalResponseProposition.length > 0">
        <v-table class="mt-5 mb-0">
          <template v-slot:default>
            <thead>
              <tr>
                <!-- A voir pour changer avec nom de la personne -->
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Nom de l'évènement
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Service engagé
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Proposition commerciale
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Prix de la prestation
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Status de la demande
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  J'accepte/Refuse la proposition
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in professionalResponseProposition" :key="item.id" class="month-item">
                <td>
                  <div class="d-flex align-center">
                    <div class="mr-4">
                      <h4 class="text-subtitle-1 font-weight-bold text-no-wrap text-grey200">
                        {{ item.eventName }}
                      </h4>
                    </div>
                  </div>
                </td>
                <td>
                  <v-chip
                    variant="outlined"
                    color="primary"
                    size="x-small"
                    :class="'text-subtitle-1 font-weight-medium bg-light'"
                  >
                    <h4>{{ item.serviceName }}</h4></v-chip
                  >
                </td>
                <td>
                  <v-tooltip
                    :text="item.professionalMessage.split('fourchette basse')[0].trim()"
                    interactive
                    content-class="tooltip-custom"
                    target="cursor"
                    class="max-w-50"
                  >
                    <template v-slot:activator="{ props: activatorProps }">
                      <h4
                        class="text-subtitle-1 text-no-wrap font-weight-medium text-grey200"
                        v-bind="activatorProps"
                      >
                        <span
                          ><b>{{ getProfessionalMessage(item.professionalMessage) }}</b></span
                        >
                      </h4>
                    </template>
                  </v-tooltip>
                </td>
                <td>
                  <h5 class="text-subtitle-1 font-weight-medium text-no-wrap text-grey200">
                    <b>{{ getPriceFromMessage(item.professionalMessage) }}</b>
                  </h5>
                </td>
                <td>
                  <v-chip
                    :class="'text-subtitle-1 font-weight-medium bg-light'"
                    variant="outlined"
                    size="x-small"
                    :color="getStatusColor(item.status)"
                    >{{ getStatusName(item.status) }}</v-chip
                  >
                </td>
                <td v-if="item.status === 'completed'">
                  <v-btn color="primary">Voir le profil du prestataire</v-btn>
                </td>
                <td v-else>
                  <div class="d-flex align-center gap-4">
                    <v-btn variant="outlined" color="success"
                      ><Icon
                        icon="material-symbols-light:check-rounded"
                        height="24"
                        width="24"
                        class="text-success"
                    /></v-btn>
                    <v-btn variant="outlined" color="error"
                      ><Icon icon="iconoir:cancel" height="24" width="24" class="text-error"
                    /></v-btn>
                  </div>
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
      v-model:open-proposition-detail="openMarketModal"
      :selectedProposition="selectedPropositionInformation"
    />
    <errorToaster></errorToaster>
  </Teleport>
</template>
<script setup lang="ts">
import errorToaster from '@/components/common/errorToaster.vue';
import { Icon } from '@iconify/vue';
import { Teleport } from 'vue';
import { useEventServiceProposition } from '~/composables/event-service-propositions/UseEventServiceProposition';
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';

const { getServicePropositionForClient } = useEventServiceProposition();
const { professionalResponseProposition } = storeToRefs(usePropositionStore());

const getStatusColor = (status: string) => {
  switch (status) {
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
      return "Dans l'attente de votre réponse";
    case 'completed':
      return 'Accepté';
    case 'cancelled':
      return 'Refusé';
  }
};

const customizer = useCustomizerStore();
const selectedPropositionInformation = ref<EventModelForProposition>();
const openMarketModal = ref(false);

const svgColor = computed(() => {
  return customizer.actTheme === 'DARK_BLUE_THEME' ? '#FFFFFF' : '#000000';
});

const getProfessionalMessage = (message: string) => {
  const cleanMessage = message.split('fourchette basse')[0].trim();

  if (cleanMessage.length <= 30) {
    return cleanMessage;
  } else {
    return cleanMessage.substring(0, 30) + '...';
  }
};

const getPriceFromMessage = (message: string) => {
  const fourchetteBasse = message
    .split('fourchette basse')[1]
    ?.split('fourchette haute')[0]
    ?.trim();

  const fourchetteHaute = message.split('fourchette haute')[1]?.trim();
  if (!fourchetteHaute) {
    return `À partir de ${fourchetteBasse}`;
  } else {
    return `Entre ${fourchetteBasse}€ et ${fourchetteHaute}€`;
  }
};

onMounted(() => {
  getServicePropositionForClient();
});
</script>
<style lang="scss" scoped>
:deep(.tooltip-custom) {
  max-width: 450px !important;
  white-space: normal !important;
  word-wrap: break-word !important;
  text-align: left !important;
  line-height: 1.4 !important;
  padding: 8px 12px !important;
}
</style>
