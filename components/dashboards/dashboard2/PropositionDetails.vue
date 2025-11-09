<template>
  <v-dialog v-model="openPropositionDetail" max-width="800">
    <div>
      <v-card>
        <div class="d-flex flex-column proposition__card gap-4">
          <div
            :style="getBackgroundStyle(selectedProposition.eventName)"
            class="proposition__card-height"
            alt=""
          />
          <div class="d-flex">
            <v-card-text
              class="w-50"
              style="
                min-height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 35px;
              "
            >
              <div>
                <p>
                  Vous fêtez <b>un.e {{ selectedProposition.name }}</b> avec
                  <b>{{ selectedProposition.people }}</b> personnes
                  <b>{{ formatDate(selectedProposition.date) }}</b> pour un budget total de
                  <b>{{ selectedProposition.budget }}€</b>
                </p>
              </div>
              <div>
                <p>
                  <b>Type de prestation:</b>
                  {{ selectedProposition.serviceEngage }}
                </p>
                <p>
                  <b>Proposition commerciale:</b>
                  {{ getProfessionalMessage(selectedProposition.professionalMessage) }}
                </p>
                <p>
                  <b>Prix de la prestation:</b>
                  {{ getPriceFromMessage(selectedProposition.professionalMessage) }}
                </p>
              </div>
              <div>
                <td>
                  <div class="d-flex align-center flex-wrap gap-4">
                    <v-btn
                      variant="outlined"
                      color="success"
                      @click="propositionAcceptedByClient(selectedProposition.propositionUuid)"
                    >
                      J'accepte la proposition
                    </v-btn>
                    <v-btn
                      color="error"
                      @click="propositionDeclinedByClient(selectedProposition.propositionUuid)"
                    >
                      Je refuse la proposition
                    </v-btn>
                  </div>
                </td>
              </div>
              <p></p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                :style="{
                  backgroundColor: 'rgb(var(--v-theme-darkbg))',
                  color: 'rgb(var(--v-theme-background))',
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                }"
                @click="openPropositionDetail = false"
                >Fermer</v-btn
              >
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </div>
  </v-dialog>
</template>
<script setup lang="ts">
import { useEventServiceProposition } from '~/composables/event-service-propositions/UseEventServiceProposition';
import type { ClientServiceProposition } from '~/models/propositions/client-service-proposition';
import { getEventBackground } from '~/utils/card-utils';

const props = defineProps<{
  selectedProposition: ClientServiceProposition;
}>();

const { professionalServices } = storeToRefs(usePropositionStore());
const { propositionAcceptedByClient, propositionDeclinedByClient } = useEventServiceProposition();

const openPropositionDetail = defineModel('openPropositionDetail', { default: false });

const getBackgroundStyle = (eventName: string) => {
  const imageUrl = getEventBackground(eventName as any);

  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    margin: '15px',
  };
};

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

const getPropositionServiceValue = (serviceUuid: string) => {
  console.log(
    professionalServices.value.find((service) => service.uuid === serviceUuid)?.name,
    'PROUT'
  );

  return professionalServices.value.find((service) => service.uuid === serviceUuid)?.name;
};
</script>
<style lang="scss" scoped>
.proposition {
  &__card {
    &-height {
      height: 300px;
    }
  }
}
</style>
