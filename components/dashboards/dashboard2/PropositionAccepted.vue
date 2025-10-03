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
              >Une fois avoir présenter votre offre au clien, un jeton est mis en jeu. Si le client
              accepte votre offre alors un jeton sera débité. S'il décline le jeton sera recrédité
            </v-alert>
          </div>
          <v-btn class="mt-2" color="primary" type="submit" block @click="sendMessage()"
            >Présenter mon offre</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
  <Teleport to="body"> </Teleport>
</template>
<script setup lang="ts">
import { Teleport } from 'vue';
import { useProfessionalProposition } from '~/services/UseProfessionalProposition';

const props = defineProps<{
  uuid: string;
}>();
const isOpen = defineModel<boolean>('is-proposition-accepted', { default: false });

const { updateProfessionalMessage } = useProfessionalProposition();
const message = ref({
  description: '',
  fourchetteH: 1,
  fourchetteB: 1,
});

const sendMessage = () => {
  const messageAllTogether = message.value.description.concat(
    ' fourchette basse ' + message.value.fourchetteB,
    ' fourchette haute ' + message.value.fourchetteH
  );

  //PERMET DE RECUPERER LA FOURCHETTE
  // const basseMatch = messageAllTogether.match(/fourchette basse\s+(\d+)/);
  // const hauteMatch = messageAllTogether.match(/fourchette haute\s+(\d+)/);

  // const fourchetteBasse = basseMatch ? parseInt(basseMatch[1], 10) : null;
  // const fourchetteHaute = hauteMatch ? parseInt(hauteMatch[1], 10) : null;
  updateProfessionalMessage(props.uuid, messageAllTogether);
};
</script>
