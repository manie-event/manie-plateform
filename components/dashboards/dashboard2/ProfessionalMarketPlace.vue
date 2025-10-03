<template>
  <v-dialog v-model="openPropositionPro" max-width="800">
    <v-card>
      <v-card-title class="text-h5">Professional Market Place</v-card-title>
      <v-card-text>
        <div v-if="isPropositionStillAvailable.length > 0">
          <v-card v-for="proposition in isPropositionStillAvailable">
            <v-card-text>
              {{ proposition }}
              <v-btn color="success" @click="openPropositionAcceptedModal(proposition.serviceUuid)"
                >Je souhaite me positionner sur cette annonce</v-btn
              >
            </v-card-text>
          </v-card>
        </div>
        <div v-else>
          <p>Aucune event aujourd'hui</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="openPropositionPro = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <Teleport to="body">
    <PropositionAccepted v-model:is-proposition-accepted="isAccepted" :uuid="propositionUuid" />
  </Teleport>
</template>

<script setup lang="ts">
import PropositionAccepted from './PropositionAccepted.vue';
const openPropositionPro = defineModel<boolean>('openPropositionPro', { default: false });

const { serviceEventProposition } = storeToRefs(propositionStore());
const propositionUuid = ref('');
const isAccepted = ref(false);

const isPropositionStillAvailable = computed(() => {
  console.log('ici');

  const test = serviceEventProposition.value.filter((proposition) =>
    isEventDone(proposition.date[1])
  );
  console.log(test, 'test');
  return test;
});

const openPropositionAcceptedModal = (uuid: string) => {
  propositionUuid.value = uuid;
  isAccepted.value = true;
};
</script>
