<template>
  <v-dialog v-model="openPropositionPro" max-width="800">
    <v-card>
      <v-card-text>
        <div v-if="props.propositionFiltered.length > 0 && paginatedEvents.length > 0">
          <v-card v-for="proposition in paginatedEvents" class="d-flex proposition__card">
            <div :style="getBackgroundStyle(proposition.name)" alt="" />
            <v-card-text class="w-50">
              <p><b>Type d'évènement:</b> {{ proposition.name }}</p>
              <p>
                <b>Type de prestation:</b>
                {{ getPropositionServiceValue(proposition.professionalServiceUuid) }}
              </p>

              <p><b>Nombre de convives:</b> {{ proposition.people }} personnes</p>
              <p><b>Dans quel département:</b> {{ proposition.location }}</p>

              <p></p>
              <p><b>A quelle date:</b> {{ formatDate(proposition.date) }}</p>
              <p><b>Le budget global:</b> {{ proposition.budget }}€</p>
              <v-chip
                v-for="word in getKeywordValues(proposition.keywordsUuids)"
                :key="word"
                class="ma-1"
              >
                {{ word }}
              </v-chip>

              <v-btn
                class="mt-3"
                @click="
                  openPropositionAcceptedModal(
                    proposition.proposition.uuid,
                    proposition.proposition.tokens
                  )
                "
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
                <p class="text-subtitle-1">Aucune nouvelle annonce ne correspond à vos critères.</p>
              </template>
            </BaseEmptyState>
          </v-col>
        </div>
      </v-card-text>
      <div class="text-center">
        <v-pagination
          v-if="paginatedEvents.length > 5"
          v-model="currentPage"
          :length="getPropositionBy3"
          next-icon="mdi-menu-right"
          prev-icon="mdi-menu-left"
        ></v-pagination>
      </div>
      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          @click="openPropositionPro = false"
          style="background: rgb(var(--v-theme-darkbg)); color: white"
          >Fermer</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
  <Teleport to="body">
    <PropositionAccepted
      v-model:is-proposition-accepted="isAccepted"
      :uuid="propositionUuid"
      :token
    />
  </Teleport>
</template>

<script setup lang="ts">
import BaseEmptyState from '@/components/common/BaseEmptyState.vue';
import EmptyState from '@/public/images/empty-state/profil-vide.png';
import { getEventBackground } from '@/utils/card-utils';
import { formatDate } from '@/utils/date-utils';
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import PropositionAccepted from './PropositionAccepted.vue';

const props = defineProps<{ propositionFiltered: EventModelForProposition[] }>();
const openPropositionPro = defineModel<boolean>('openPropositionPro', { default: false });

const { professionalServices } = storeToRefs(useProfessionalStore());
const { keywords } = storeToRefs(useSectorStore());
const propositionUuid = ref('');
const isAccepted = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(5);
const token = ref(0);

const getPropositionBy3 = computed(() =>
  Math.ceil(props.propositionFiltered.length / itemsPerPage.value)
);

const getKeywordValues = (keywordUuids: string[]) => {
  if (!keywordUuids?.length) return [];

  return keywords.value
    .filter((stored) => keywordUuids.includes(stored.uuid))
    .map((match) => match.value);
};

const getBackgroundStyle = (eventName: string) => {
  const imageUrl = getEventBackground(eventName as any);

  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    width: '100%',
    margin: '15px',
  };
};

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;

  const end = start + itemsPerPage.value;

  return props.propositionFiltered.slice(start, end);
});

const getPropositionServiceValue = (serviceUuid: string) => {
  return professionalServices.value.find((service) => service.uuid === serviceUuid)?.name;
};

const openPropositionAcceptedModal = (uuid: string, tokens: number) => {
  propositionUuid.value = uuid;
  isAccepted.value = true;
  token.value = tokens;
};
</script>
<style lang="scss" scoped>
.proposition {
  background: red;
  width: 100%;
  &__image {
    width: 30%;
    height: auto;
  }
  &__card {
    max-height: 250px;

    .v-btn {
      background: rgb(var(--v-theme-darkbg));
      color: rgb(var(--v-theme-background));
    }
  }
}
</style>
