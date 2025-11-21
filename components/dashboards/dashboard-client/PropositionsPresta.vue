<template>
  <div class="proposition-presta">
    <div>
      <div class="d-flex align-center justify-space-between">
        <div>
          <h4 class="text-subtitle-1 font-weight-semibold">Vos propositions en cours</h4>
        </div>
      </div>
      <div class="month-table" v-if="filteredPropositionByStatus.length > 0">
        <v-table class="mt-5 mb-0 proposition-presta__table gap-2">
          <template v-slot:default>
            <thead>
              <tr>
                <!-- A voir pour changer avec nom de la personne -->
                <th class="text-subtitle-1 text-grey200 text-no-wrap pa-0">Nom</th>
                <th class="text-subtitle-1 text-grey200 text-no-wrap" v-if="!isMobile">Service</th>
                <th class="text-subtitle-1 text-grey200 text-no-wrap pa-0 text-center">
                  Proposition commerciale
                </th>
                <th
                  class="text-subtitle-1 text-grey200 text-no-wrap pa-0 text-center"
                  v-if="!isMobile"
                >
                  Prix
                </th>
                <th
                  class="text-subtitle-1 text-grey200 text-no-wrap pa-0 text-center"
                  v-if="!isMobile"
                >
                  Status
                </th>
                <th
                  class="text-subtitle-1 text-grey200 text-no-wrap pa-0 text-center"
                  v-if="!isMobile"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in filteredPropositionByStatus"
                :key="index"
                class="month-item"
                style="border: 2px solid black"
              >
                <td class="pa-0">
                  <div class="d-flex align-center">
                    <div class="mr-4">
                      <h4
                        class="text-subtitle-1 font-weight-bold text-no-wrap text-grey200 pa-0 text-center"
                      >
                        {{ item.eventName }}
                      </h4>
                    </div>
                  </div>
                </td>

                <td v-if="!isMobile">
                  <v-chip
                    variant="outlined"
                    color="primary"
                    size="x-small"
                    class="text-subtitle-1 font-weight-medium bg-light"
                  >
                    <h4>{{ item.serviceEngage }}</h4>
                  </v-chip>
                </td>

                <!-- 💡 Proposition commerciale -->
                <td class="pa-0 text-center" v-if="!isMobile">
                  <v-tooltip
                    :text="getTooltipText(item.professionalMessage)"
                    interactive
                    location="top"
                    transition="fade-transition"
                    content-class="tooltip-modern"
                    open-delay="100"
                    close-delay="50"
                  >
                    <template #activator="{ props: activatorProps }">
                      <h4 class="text-subtitle-1 text-no-wrap text-grey200" v-bind="activatorProps">
                        <span style="cursor: pointer">
                          {{ getProfessionalMessage(item.professionalMessage) }}
                        </span>
                      </h4>
                    </template>
                  </v-tooltip>
                </td>

                <!-- 💡 Bouton "Voir plus de détails" en mobile -->
                <td v-else class="text-center">
                  <v-btn
                    color="primary"
                    variant="outlined"
                    size="small"
                    @click="openPropositionDetail(item)"
                  >
                    Voir plus de détails
                  </v-btn>
                </td>

                <td class="pa-0 text-center" v-if="!isMobile">
                  <h5 class="text-subtitle-1 text-no-wrap text-grey200">
                    {{ getPriceFromMessage(item.professionalMessage) }}
                  </h5>
                </td>

                <td class="pa-0 text-center" v-if="!isMobile">
                  <v-chip
                    class="text-subtitle-1 font-weight-medium bg-light"
                    variant="outlined"
                    size="x-small"
                    :color="getStatusColor(item.propositionStatus)"
                  >
                    {{ getStatusName(item.propositionStatus) }}
                  </v-chip>
                </td>

                <td
                  v-if="item.propositionStatus === 'completed' && !isMobile"
                  @click="confirmedProposition(item.eventServiceUuid)"
                  class="d-flex justify-end align-center"
                >
                  <v-btn
                    color="rgb(var(--v-theme-darkbg))"
                    class="pa-3"
                    style="color: rgb(var(--v-theme-background))"
                  >
                    Profil du prestataire
                  </v-btn>
                </td>

                <td v-else-if="item.propositionStatus !== 'completed' && !isMobile">
                  <div class="d-flex align-center gap-4">
                    <v-btn
                      variant="outlined"
                      color="success"
                      @click="propositionAcceptedByClient(item.propositionUuid)"
                    >
                      <Icon
                        icon="material-symbols-light:check-rounded"
                        height="24"
                        width="24"
                        class="text-success"
                      />
                    </v-btn>
                    <v-btn
                      variant="outlined"
                      color="error"
                      @click="propositionDeclinedByClient(item.propositionUuid)"
                    >
                      <Icon icon="iconoir:cancel" height="24" width="24" class="text-error" />
                    </v-btn>
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
                Aucun prestataire ne s’est positionné sur votre événement pour l’instant.
              </p>
            </template>
          </BaseEmptyState>
        </v-col>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <PropositionDetailsForClient
      v-if="selectedPropositionDetail"
      v-model:open-proposition-detail="openMarketModal"
      :selectedProposition="selectedPropositionDetail"
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
import LigthIcon from '@/public/images/empty-state/no-proposition-presta.svg';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { computed, ref, Teleport } from 'vue';
import { useEventServiceProposition } from '~/composables/event-service-propositions/UseEventServiceProposition';
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import type { ClientServiceProposition } from '~/models/propositions/client-service-proposition';
import { useProfessionalProfileService } from '~/services/UseProfessionalProfileService';
import { useCustomizerStore } from '../../../stores/customizer';
import ProfessionalProfil from './ProfessionalProfil.vue';
import PropositionDetailsForClient from './PropositionDetailsForClient.vue';

const props = defineProps<{
  currentPropositions: ClientServiceProposition[];
}>();
const windowWidth = ref(window.innerWidth);
const isMobile = ref(window.innerWidth < 1280);

const { getServicePropositionForClient, propositionAcceptedByClient, propositionDeclinedByClient } =
  useEventServiceProposition();
const { preloadServices } = useKeywordsStore();
const { getProfessionalProfileForCustomer } = useProfessionalProfileService();
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
      return 'En attente de votre réponse';
    case 'completed':
      return 'Accepté';
    case 'cancelled':
      return 'Refusé';
  }
};

const customizer = useCustomizerStore();
const selectedPropositionInformation = ref<EventModelForProposition>();
const openMarketModal = ref(false);
const selectedPropositionDetail = ref<ClientServiceProposition>();

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

const openPropositionDetail = (item: ClientServiceProposition) => {
  openMarketModal.value = true;
  selectedPropositionDetail.value = props.currentPropositions.find(
    (proposition) => proposition.id === item.id
  );
};

const filteredPropositionByStatus = computed<ClientServiceProposition[]>(() => {
  return props.currentPropositions.filter(
    (professionalProposition) => professionalProposition.propositionStatus !== 'pending'
  );
});

const handleResize = () => {
  isMobile.value = window.innerWidth < 1280;
};

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

onMounted(async () => {
  await preloadServices();
  getServicePropositionForClient();
  handleResize();
  window.addEventListener('resize', handleResize);
});
</script>
<style lang="scss" scoped>
.proposition-presta {
  border-radius: 15px;
  box-shadow: 5px 5px 5px 5px rgb(var(--v-theme-darkBg));
  padding: 1rem;
  background: rgb(var(--v-theme-containerBg));

  &__table {
    background: rgb(var(--v-theme-containerBg));
    font-size: 0.85rem;
    border-collapse: collapse;
    width: 100%;
  }
}

/* Supprime les marges inutiles des cartes parentes */
.v-card-text {
  padding: 1rem 0rem !important;
}

h4,
h5 {
  margin: 0 !important;
  line-height: 1.3 !important;
}

:deep(.tooltip-modern) {
  background: linear-gradient(145deg, #2b3a55, #1f2a3d);
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.4;
  border-radius: 10px;
  padding: 10px 14px;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.25),
    0 2px 6px rgba(0, 0, 0, 0.2);
  width: 320px;
  white-space: normal;
  word-wrap: break-word;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  animation: tooltipFade 0.15s ease-out;
}

/* Ce bloc n’a pas besoin de :deep(), car il cible ton contenu interne */
.tooltip-modern__content {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

@keyframes tooltipFade {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
