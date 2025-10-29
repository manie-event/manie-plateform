<template>
  <VCard elevation="10" class="proposition-presta">
    <v-card-text>
      <div class="d-flex align-center justify-space-between">
        <div>
          <h5 class="v-card-title">Vos propositions en cours</h5>
        </div>
      </div>
      <div class="month-table" v-if="filteredPropositionByStatus.length > 0">
        <v-table class="mt-5 mb-0 proposition-presta__table">
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
              <tr
                v-for="item in filteredPropositionByStatus"
                :key="item.id"
                class="month-item"
                style="border: 2px solid black"
              >
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
                  <v-chip
                    variant="outlined"
                    color="primary"
                    size="x-small"
                    :class="'text-subtitle-1 font-weight-medium bg-light'"
                  >
                    <h4>{{ item.serviceEngage }}</h4></v-chip
                  >
                </td>
                <td>
                  <v-tooltip
                    :text="getTooltipText(item.professionalMessage)"
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
                    :color="getStatusColor(item.propositionStatus)"
                    >{{ getStatusName(item.propositionStatus) }}</v-chip
                  >
                </td>
                <td
                  v-if="item.propositionStatus === 'completed'"
                  @click="confirmedProposition(item.eventServiceUuid)"
                >
                  <v-btn color="primary">Voir le profil du prestataire</v-btn>
                </td>
                <td v-else-if="item.propositionStatus === 'pending'">
                  En attente de la réponse du prestataire
                </td>
                <td v-else>
                  <div class="d-flex align-center gap-4">
                    <v-btn
                      variant="outlined"
                      color="success"
                      @click="
                        {
                          propositionAcceptedByClient(item.propositionUuid);
                        }
                      "
                      ><Icon
                        icon="material-symbols-light:check-rounded"
                        height="24"
                        width="24"
                        class="text-success"
                    /></v-btn>
                    <v-btn
                      variant="outlined"
                      color="error"
                      @click="propositionDeclinedByClient(item.propositionUuid)"
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
              <LigthIcon
                v-if="customizer.actTheme !== 'DARK_BLUE_THEME'"
                style="width: 150px; height: auto; margin-bottom: 10px"
              />
              <DarkIcon v-else style="width: 150px; height: auto; margin-bottom: 10px" />
            </template>
            <template #description>
              <p class="text-subtitle-1">
                Aucun prestataire n'a, pour l'instant, répondu à votre annonce.
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
      :selectedProposition="selectedPropositionInformation!"
    />
    <ProfessionalProfil
      v-if="professionalProfileForCustomer"
      v-model:professional-profile="isAcceptedByClient"
      :pprofile="professionalProfileForCustomer"
    />
    <errorToaster></errorToaster>
  </Teleport>
</template>
<script setup lang="ts">
import BaseEmptyState from '@/components/common/BaseEmptyState.vue';
import errorToaster from '@/components/common/errorToaster.vue';
import DarkIcon from '@/public/images/empty-state/dark-profil-vide.svg';
import LigthIcon from '@/public/images/empty-state/profil-vide.svg';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { computed, ref, Teleport } from 'vue';
import { useEventServiceProposition } from '~/composables/event-service-propositions/UseEventServiceProposition';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import type { ClientServiceProposition } from '~/models/propositions/client-service-proposition';
import { useCustomizerStore } from '../../../stores/customizer';
import PropositionDetails from '../dashboard2/PropositionDetails.vue';
import ProfessionalProfil from './ProfessionalProfil.vue';

const { getServicePropositionForClient, propositionAcceptedByClient, propositionDeclinedByClient } =
  useEventServiceProposition();
const { getProfessionalProfileForCustomer } = useProfessionalProfile();
const { professionalResponseProposition } = storeToRefs(usePropositionStore());
const { professionalProfileForCustomer } = storeToRefs(useUserStore());

const isAcceptedByClient = ref(false);

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

const getProfessionalMessage = (message?: string) => {
  if (!message) return 'Aucune proposition reçue';
  const cleanMessage = message.split('fourchette basse')[0].trim();
  return cleanMessage.length <= 30 ? cleanMessage : cleanMessage.substring(0, 30) + '...';
};

const getTooltipText = (message?: string) => {
  if (!message || typeof message !== 'string') return 'Aucune proposition reçue';
  const part = message.split('fourchette basse')[0]?.trim();
  return part || message;
};

const getPriceFromMessage = (message?: string) => {
  if (!message) return 'A définir par le prestataire';
  const fourchetteBasse = message
    .split('fourchette basse')[1]
    ?.split('fourchette haute')[0]
    ?.trim();
  const fourchetteHaute = message.split('fourchette haute')[1]?.trim();
  if (!fourchetteHaute) return `À partir de ${fourchetteBasse}`;
  return `Entre ${fourchetteBasse}€ et ${fourchetteHaute}€`;
};

const confirmedProposition = async (eventServiceUuid: string) => {
  ((isAcceptedByClient.value = true), await getProfessionalProfileForCustomer(eventServiceUuid));
};

const filteredPropositionByStatus = computed<ClientServiceProposition[]>(() => {
  return professionalResponseProposition.value.filter(
    (professionalProposition) => professionalProposition.propositionStatus === 'reviewing'
  );
});

onMounted(() => {
  getServicePropositionForClient();
});
</script>
<style lang="scss" scoped>
.proposition-presta {
  background: rgb(var(--v-theme-background));

  &__table {
    background: rgb(var(--v-theme-background));
  }
}
:deep(.tooltip-custom) {
  max-width: 450px !important;
  white-space: normal !important;
  word-wrap: break-word !important;
  text-align: left !important;
  line-height: 1.4 !important;
  padding: 8px 12px !important;
}
</style>
