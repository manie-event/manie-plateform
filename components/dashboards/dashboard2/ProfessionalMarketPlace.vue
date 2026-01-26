<template>
  <v-dialog v-model="openPropositionPro" max-width="800">
    <v-card>
      <v-card-text>
        <!-- Tabs en dehors de la boucle v-for -->
        <v-tabs v-model="tab">
          <v-tab
            v-for="service in professionalServices"
            :key="service.uuid"
            :value="service.uuid"
            @click="propositionByServiceUuid(service.uuid)"
          >
            {{ service.name }}
          </v-tab>
        </v-tabs>

        <!-- Windows pour chaque service -->
        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="service in professionalServices"
            :key="service.uuid"
            :value="service.uuid"
          >
            <!-- ✅ Afficher le contenu si propositionsByService a des éléments -->
            <div v-if="propositionsByService.length > 0">
              <v-sheet class="pa-5">
                <v-card
                  v-for="(proposition, index) in paginatedEvents"
                  :key="proposition.uuid"
                  class="proposition__card mb-3"
                  @mouseenter="hoveredProposition = index"
                  @mouseleave="hoveredProposition = null"
                >
                  <div class="d-flex position-relative">
                    <div :style="getBackgroundStyle(proposition.name)" alt="" height="100" />
                    <v-card-text class="w-50">
                      <p><b>Type d'évènement:</b> {{ proposition.name }}</p>
                      <p>
                        <b>Type de prestation:</b>
                        {{ getPropositionServiceValue(proposition.professionalServiceUuid) }}
                      </p>

                      <p><b>Nombre de convives:</b> {{ proposition.people }} personnes</p>
                      <p><b>Dans quel département:</b> {{ proposition.location }}</p>

                      <p><b>A quelle date:</b> {{ formatDate(proposition.date) }}</p>
                      <p><b>Le budget global:</b> {{ proposition.budget }}€</p>
                      <v-chip
                        v-for="word in getKeywordValues(proposition.keywordsUuids)"
                        :key="word"
                        class="ma-1"
                      >
                        {{ word }}
                      </v-chip>
                    </v-card-text>

                    <transition name="fade">
                      <div v-if="hoveredProposition === index" class="proposition__overlay">
                        <v-btn
                          size="medium"
                          color="rgb(var(--v-theme-darkbg))"
                          class="pa-3"
                          elevation="2"
                          @click="
                            openPropositionAcceptedModal(
                              proposition.proposition.uuid,
                              proposition.proposition.tokens
                            )
                          "
                        >
                          Me positionner sur cette annonce
                        </v-btn>
                      </div>
                    </transition>
                  </div>
                </v-card>
              </v-sheet>

              <!-- ✅ Pagination dans le v-if -->
              <div class="text-center mt-4" v-if="propositionsByService.length > itemsPerPage">
                <v-pagination
                  v-model="currentPage"
                  :length="getPropositionBy3"
                  next-icon="mdi-menu-right"
                  prev-icon="mdi-menu-left"
                ></v-pagination>
              </div>
            </div>

            <!-- ✅ Empty state quand aucune proposition pour ce service -->
            <div v-else class="position-relative">
              <v-col cols="12" class="mt-6">
                <BaseEmptyState
                  :style="{
                    position: 'relative',
                  }"
                >
                  <template #image>
                    <EmptyState alt="Empty State" height="150" width="150" />
                  </template>
                  <template #description>
                    <p class="text-subtitle-1">
                      Aucune nouvelle annonce ne correspond à vos critères pour ce service.
                    </p>
                  </template>
                </BaseEmptyState>
              </v-col>
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          @click="openPropositionPro = false"
          style="background: rgb(var(--v-theme-darkbg)); color: white"
        >
          Fermer
        </v-btn>
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
import EmptyState from '@/public/images/empty-state/no-proposition-presta.svg';
import { getEventBackground } from '@/utils/card-utils';
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import PropositionAccepted from './PropositionAccepted.vue';

const props = defineProps<{ propositionFiltered: EventModelForProposition[] }>();
const openPropositionPro = defineModel<boolean>('openPropositionPro', { default: false });

const { professionalServices } = storeToRefs(useProfessionalStore());
const { keywords } = storeToRefs(useSectorStore());
const propositionUuid = ref('');
const isAccepted = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(3);
const token = ref(0);
const hoveredProposition = ref<number | null>(null);

const tab = ref(professionalServices.value[0]?.uuid || '');
const propositionsByService = ref<EventModelForProposition[]>([]);

const getPropositionBy3 = computed(() =>
  Math.ceil(propositionsByService.value.length / itemsPerPage.value)
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
    width: '40%',
    margin: '15px',
  };
};

const propositionByServiceUuid = (serviceUuid: string) => {
  currentPage.value = 1;

  propositionsByService.value = props.propositionFiltered.filter(
    (proposition) => proposition.professionalServiceUuid === serviceUuid
  );
  return propositionsByService.value;
};

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return propositionsByService.value.slice(start, end);
});

const getPropositionServiceValue = (serviceUuid: string) => {
  return professionalServices.value.find((service) => service.uuid === serviceUuid)?.name;
};

const openPropositionAcceptedModal = (uuid: string, tokens: number) => {
  propositionUuid.value = uuid;
  isAccepted.value = true;
  token.value = tokens;
};

onMounted(() => {
  console.log(props.propositionFiltered, 'Propositions');

  if (professionalServices.value[0]?.uuid) {
    propositionsByService.value = propositionByServiceUuid(professionalServices.value[0].uuid);
  }
});
</script>

<style lang="scss" scoped>
.proposition {
  width: 100%;

  &__card {
    max-height: 250px;
    overflow: hidden;
    cursor: pointer;

    .v-btn {
      background: rgb(var(--v-theme-darkbg));
      color: rgb(var(--v-theme-background));
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    backdrop-filter: blur(0.7px);
  }
}

// ✅ Animation de transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
