<template>
  <!-- 🔹 Modale principale -->
  <v-dialog v-model="openPricingChoice" max-width="900">
    <v-card class="pricing-choice pa-6 rounded-16">
      <h3 class="text-center textPrimary font-weight-bold mb-8">Choisis ta formule</h3>
      <v-divider class="mb-4"
        ><p class="mb-4">
          Aujourd'hui vous avez une formule : {{ props.event.formule }}
        </p></v-divider
      >
      <v-list class="bg-transparent">
        <v-list-item v-for="(formule, index) in Packages" :key="index" class="pa-0 mb-4">
          <v-card
            class="pricing-choice__card d-flex flex-column flex-md-row align-center justify-between pa-6 border rounded-12 hover:elevate"
            :class="{
              'pricing-choice__card--selected': props.event.formule === formule.subCaption,
            }"
          >
            <!-- Bloc gauche : titre + sous-texte -->
            <div class="flex-1 text-start pe-md-6">
              <h5 class="text-18 font-weight-semibold mb-2">
                {{ formule.caption }}
              </h5>
              <p class="text-14 text-grey100 mb-0 line-clamp-2" style="max-width: 500px">
                {{ formule.subtext }}
              </p>
            </div>

            <!-- Bloc centre : prix -->
            <div class="text-center mt-4 mt-md-0 mx-md-6 w-25">
              <h4 class="text-primary font-weight-bold mb-1">
                {{ formule.price }}
              </h4>
              <span v-if="formule.subprice" class="text-grey100 text-13">
                {{ formule.subprice }}
              </span>
            </div>

            <!-- Bloc droit : boutons -->
            <div class="d-flex flex-column ga-2 pa-3">
              <v-btn
                variant="outlined"
                color="primary"
                size="small"
                :class="{
                  'pricing-choice__card--selected': props.event.formule === formule.subCaption,
                }"
                @click="openDetails(formule)"
              >
                En savoir +
              </v-btn>
              <v-btn
                color="primary"
                size="small"
                class="pa-3"
                :class="{
                  'pricing-choice__card--selected': props.event.formule === formule.subCaption,
                }"
                @click="
                  {
                    (changeEventFormule(formule.subCaption, props.selectedEventUuid),
                      (openPricingChoice = false));
                  }
                "
              >
                Je change de formule
              </v-btn>
            </div>
          </v-card>
        </v-list-item>
      </v-list>

      <!-- Bouton fermeture -->
      <div class="text-center mt-6">
        <v-btn variant="text" color="grey" @click="openPricingChoice = false"> Fermer </v-btn>
      </div>
    </v-card>
  </v-dialog>

  <!-- 🔹 Modale secondaire (détails) -->
  <v-dialog v-model="detailsDialog" max-width="700">
    <v-card class="pa-6 rounded-16">
      <h3 class="text-primary font-weight-bold mb-4 text-center">
        {{ selectedFormule?.caption }}
      </h3>
      <h5 class="text-center">{{ selectedFormule.subtext }}</h5>

      <v-divider class="my-4" />

      <div v-for="(desc, i) in selectedFormule?.list" :key="i" class="mb-3 d-flex align-start">
        <v-icon icon="mdi-check-circle-outline" color="primary" size="18" class="me-2 mt-1" />
        <p class="text-14 text-grey-dark mb-0" v-html="desc.listtitle"></p>
      </div>

      <div class="text-end mt-6">
        <v-btn color="primary" variant="text" @click="detailsDialog = false" class="pa-3">
          Fermer
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { Packages } from '@/_mockApis/front-pages/PagesData';
import { ref } from 'vue';
import { UseEvent } from '~/composables/event/UseEvent';
import type { eventModel } from '~/models/events/eventModel';

const props = defineProps<{
  selectedEventUuid: string;
  event: eventModel;
}>();

const openPricingChoice = defineModel<boolean>('test', { default: false });

const detailsDialog = ref(false);
const selectedFormule = ref<any>(null);

const { changeEventFormule } = UseEvent();
const openDetails = (formule: any) => {
  selectedFormule.value = formule;
  detailsDialog.value = true;
};
</script>

<style lang="scss" scoped>
.pricing-choice {
  background: rgb(var(--v-theme-background));
  max-height: 90vh;
  overflow-y: auto;

  &__card {
    min-height: 160px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background-color: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-textPrimary));
    border-radius: 12px;
    transition: all 0.3s ease;
    width: 90%;
    margin: 0 auto;
    cursor: pointer;

    &:hover {
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
      border-color: rgb(var(--v-theme-primary));
    }

    &--selected {
      background: rgb(var(--v-theme-darkbg));
      color: rgb(var(--v-theme-bglight));
      // box-shadow: 0 6px 20px rgba(var(--v-theme-primary), 0.3);

      h5 {
        color: rgb(var(--v-theme-bglight));
      }
      .v-btn {
        border-color: rgb(var(--v-theme-bglight));
        color: rgb(var(--v-theme-bglight));
        &:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }
  }

  /* 🔹 Harmonisation des boutons */
  .v-btn {
    transition: all 0.25s ease;
    font-weight: 500;
    border-radius: 8px;

    &.v-btn--outlined {
      border-color: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-primary));

      &:hover {
        background: rgba(var(--v-theme-primary), 0.08);
      }
    }

    &.v-btn--flat {
      background: rgb(var(--v-theme-primary));
      color: white;

      &:hover {
        background: rgba(var(--v-theme-primary), 0.85);
      }
    }
  }

  /* 🔹 Détails de la modale secondaire */
  .v-dialog .v-card {
    background: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-textPrimary));
  }

  /* 🔹 Petits utilitaires */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* 🔹 Responsive */
  @media (max-width: 960px) {
    &__card {
      flex-direction: column;
      text-align: center;
      gap: 1rem;

      .w-25 {
        width: 100% !important;
      }

      .v-btn {
        width: 100%;
      }
    }
  }
}
</style>
