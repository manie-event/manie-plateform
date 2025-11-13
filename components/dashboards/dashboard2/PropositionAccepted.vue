<template>
  <v-dialog v-model="isOpen" max-width="600">
    <v-card>
      <v-card-text>
        <h4>Présentez votre offre au client:</h4>
        <v-form ref="form" v-model="isValid" @submit.prevent>
          <v-textarea
            v-model="message.description"
            label="Votre offre ici"
            placeholder="Veuillez renseigner votre offre et votre proposition de prix"
            counter="255"
            :rules="[rules.required, rules.max255]"
          ></v-textarea>
          <p>
            Votre fourchette de prix se trouve entre
            <v-number-input
              control-variant="hidden"
              :min="1"
              v-model="message.fourchetteB"
              :step="1"
              inset
            ></v-number-input>
            et
            <v-number-input
              control-variant="hidden"
              :min="2"
              v-model="message.fourchetteH"
              :step="1"
              inset
            ></v-number-input>
          </p>
          <div class="p-3">
            <v-alert
              density="compact"
              border-color="warning"
              color="rgb(var(--v-theme-thirdy))"
              style="color: rgb(var(--v-theme-background))"
              elevation="2"
              ><b>{{ props.token }} jetons</b> sont mis en jeu pour cette annonce. Ils seront
              débités si vous gagné, remboursé si ce n'est pas le cas.
            </v-alert>
          </div>
          <v-btn class="mt-2 propoposition__btn" type="submit" block @click="sendMessage()"
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
  token: number;
  uuid: string;
}>();

const { addSuccess } = useToaster();

const emit = defineEmits(['message-sent']);

const isOpen = defineModel<boolean>('is-proposition-accepted', { default: false });
const isValid = ref(false);
const form = ref();

const { getServicePropositionForProfessional } = useEventServiceProposition();
const { updateProfessionalMessage } = useProfessionalProposition();
const message = ref({
  description: '',
  fourchetteH: 1,
  fourchetteB: 1,
});

const rules = {
  required: (v: string) => !!v || 'Ce champ est obligatoire',
  max255: (v: string) =>
    (v && v.length <= 255) || 'Votre texte ne doit pas dépasser 255 caractères',
};

const sendMessage = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  const messageAllTogether = message.value.description.concat(
    ' fourchette basse ' + message.value.fourchetteB,
    ' fourchette haute ' + message.value.fourchetteH
  );

  const response = await updateProfessionalMessage(props.uuid, messageAllTogether);

  if (response) {
    emit('message-sent', props.uuid);
    await getServicePropositionForProfessional();

    addSuccess('Félications, vous venez de vous positionner sur une offre');
    isOpen.value = false;
  }
};
</script>
<style lang="scss" scoped>
.propoposition {
  &__btn {
    background: rgb(var(--v-theme-darkbg));
    color: rgb(var(--v-theme-background));
  }
}
</style>
