<template>
  <v-dialog v-model="isOpen" max-width="600">
    <v-card>
      <v-card-text>
        <h4>Présentez votre offre au client:</h4>
        <v-form @submit.prevent>
          <v-textarea
            v-model="message.description"
            label="Votre offre ici"
            placeholder="Veuillez renseigner votre offre et votre proposition de prix"
          ></v-textarea>
          <p>
            Votre fourchette de prix se trouve entre
            <v-number-input
              controlVariant="stacked"
              :min="1"
              v-model="message.fourchetteB"
              :step="1"
              inset
            ></v-number-input>
            et
            <v-number-input
              controlVariant="stacked"
              :min="2"
              v-model="message.fourchetteH"
              :step="1"
              inset
            ></v-number-input>
          </p>
          <div class="p-3">
            <v-alert density="compact" border-color="warning" color="warning" elevation="2"
              ><b>1 jeton(s)</b> est mis en jeu pour cette annonce. Il sera débité si vous gagné,
              remboursé si ce n'est pas le cas.
            </v-alert>
          </div>
          <v-btn class="mt-2" color="primary" type="submit" block @click="sendMessage()"
            >Présenter mon offre</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { useEventServiceProposition } from '~/composables/event-service-propositions/UseEventServiceProposition';
import { useProfessionalProposition } from '~/services/UseProfessionalProposition';

const props = defineProps<{
  uuid: string;
}>();

const emit = defineEmits(['message-sent']);

const isOpen = defineModel<boolean>('is-proposition-accepted', { default: false });

const { getServicePropositionForProfessional } = useEventServiceProposition();
const { updateProfessionalMessage } = useProfessionalProposition();
const message = ref({
  description: '',
  fourchetteH: 1,
  fourchetteB: 1,
});

const sendMessage = async () => {
  const messageAllTogether = message.value.description.concat(
    ' fourchette basse ' + message.value.fourchetteB,
    ' fourchette haute ' + message.value.fourchetteH
  );

  const response = await updateProfessionalMessage(props.uuid, messageAllTogether);

  if (response?.status === 200) {
    emit('message-sent', props.uuid);
    await getServicePropositionForProfessional();

    isOpen.value = false;
  }
};
</script>
