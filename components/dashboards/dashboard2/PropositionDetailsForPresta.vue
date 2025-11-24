<template>
  <v-dialog v-model="openPropositionDetail" max-width="800">
    <v-card>
      <div class="d-flex flex-column gap-4 proposition-presta-card">
        <!-- Image de fond basée sur le nom de l'événement -->
        <div
          :style="getBackgroundStyle(selectedProposition.name)"
          class="proposition-presta-card__img"
        />

        <div class="d-flex">
          <v-card-text
            class="w-50 py-4"
            style="
              min-height: 300px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              gap: 35px;
            "
          >
            <div>
              <p></p>
              <p><b>Type d'évènement :</b> {{ selectedProposition.name }}</p>
              <p><b>Nombre de personne :</b> {{ selectedProposition.people }}</p>
              <p><b>Date de l'évènement :</b> {{ formatDate(selectedProposition.date) }}</p>
              <p><b>Pour un budget total de:</b> {{ selectedProposition.budget }}€</p>
              <p><b>Type de prestation :</b> {{ serviceName }}</p>
              <p>
                <b>Proposition commerciale :</b>
                {{ getProfessionalMessage(selectedProposition.proposition.professionalMessage) }}
              </p>
              <p>
                <b>Prix de la prestation :</b>
                {{ getPriceFromMessage(selectedProposition.proposition.professionalMessage) }}
              </p>
              <p><b>Jetons mis en jeu :</b> {{ selectedProposition.proposition.tokens }}</p>
            </div>

            <!-- Bouton de fermeture -->
            <div>
              <v-btn
                color="rgb(var(--v-theme-darkbg))"
                style="color: rgb(var(--v-theme-background))"
                @click="openPropositionDetail = false"
                >Fermer</v-btn
              >
            </div>
          </v-card-text>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import { getEventBackground } from '~/utils/card-utils';

// Réception de la proposition sélectionnée depuis le parent
const props = defineProps<{
  selectedProposition: EventModelForProposition;
}>();

// État d'ouverture/fermeture de la modale
const openPropositionDetail = defineModel('openPropositionDetail', { default: false });

// Accès aux services professionnels pour obtenir le nom du service
const { professionalServices } = storeToRefs(useProfessionalStore());

// Recherche du nom du service correspondant à professionalServiceUuid
const serviceName = computed(() => {
  const srv = professionalServices.value.find(
    (s) => s.uuid === props.selectedProposition.professionalServiceUuid
  );
  return srv?.name || 'Service inconnu';
});

// Récupération d'une image en fonction du type d'événement (nom)
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

// Nettoie un message professionnel (affiche seulement la partie avant “fourchette basse”)
const getProfessionalMessage = (message?: string) => {
  if (!message) return 'Aucune proposition reçue';
  const cleanMessage = message.split('fourchette basse')[0].trim();
  return cleanMessage.length <= 80 ? cleanMessage : cleanMessage.substring(0, 80) + '...';
};

// Extrait et formate les prix à partir d'un message du pro
const getPriceFromMessage = (message?: string) => {
  if (!message) return 'À définir par le prestataire';
  const fourchetteBasse = message
    .split('fourchette basse')[1]
    ?.split('fourchette haute')[0]
    ?.trim();
  const fourchetteHaute = message.split('fourchette haute')[1]?.trim();
  if (!fourchetteHaute) return `À partir de ${fourchetteBasse}€`;
  return `Entre ${fourchetteBasse}€ et ${fourchetteHaute}€`;
};
</script>

<style scoped lang="scss">
.proposition-presta-card {
  &__img {
    height: 300px;
  }
}
</style>
