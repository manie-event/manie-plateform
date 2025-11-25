<template>
  <div class="packages">
    <v-container class="max-width-1218 package py-0" id="pricing">
      <div class="pb-6 text-center">
        <h2 class="display-1 font-weight-bold textPrimary">Votre formule sera la nôtre.</h2>
        <p class="text-grey100 pt-4 text-17 lh-32">
          Que vous souhaitiez organiser votre événement en autonomie ou être accompagné(e), vous
          trouverez ici chaussure à votre pied !
        </p>
      </div>

      <v-row>
        <v-col cols="12">
          <v-card
            elevation="0"
            class="rounded-16 pa-4 border pricing-free-card text-center transition-all"
          >
            <v-row>
              <v-col cols="12" md="6" class="d-flex align-center flex-column justify-center">
                <div class="pb-4">
                  <h4 class="text-22 font-weight-bold mb-2">LIBERTE</h4>
                  <p class="text-15 text-grey100 font-weight-medium mb-0">
                    Vous souhaitez planifier votre événement en autonomie.
                  </p>
                </div>

                <!-- Prix -->
                <div class="d-flex align-center justify-center flex-column">
                  <h2
                    class="display-2 font-weight-bold mb-1"
                    style="color: rgb(var(--v-theme-peach))"
                  >
                    GRATUIT
                  </h2>
                  <div class="separator my-3" style="background: rgb(var(--v-theme-peach))"></div>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="d-flex"
                ><v-list class="mb-0 pl-0 pt-0 packages__features-list">
                  <v-list-item
                    v-for="desc in firstPlanList"
                    :key="desc.listtitle"
                    class="pa-0 packages__feature-item"
                  >
                    <v-list-item-title
                      class="text-15 font-weight-medium text-grey-dark d-flex align-center"
                    >
                      <span class="divider" style="color: rgb(var(--v-theme-darkbg))">|</span>
                      <span v-html="desc.listtitle" class="pl-2"></span>
                    </v-list-item-title>
                  </v-list-item> </v-list
              ></v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col cols="12" lg="3" sm="6" v-for="card in Packages" :key="card.caption">
          <v-card elevation="0" class="rounded-16 pa-6 border card packages__card">
            <div class="pb-4">
              <div class="d-flex ga-2 align-center">
                <h4 class="text-20 w-100 font-weight-semibold textPrimary mb-4 text-center">
                  {{ card.caption.toUpperCase() }}
                </h4>
                <v-chip
                  v-if="card.tagtext"
                  size="small"
                  class="mt-sm-n4 font-weight-bold"
                  rounded="md"
                  color="primary"
                  >Popular</v-chip
                >
              </div>
              <v-tooltip :text="card.subtext" location="top" content-class="custom-tooltip">
                <template #activator="{ props }" class="d-flex">
                  <div class="d-flex">
                    <p
                      v-bind="props"
                      class="text-14 text-grey100 font-weight-medium cursor-pointer"
                    >
                      {{ troncateDescription(card.subtext) }}
                    </p>
                  </div>
                </template>
              </v-tooltip>
            </div>

            <div class="d-flex align-center mt-3 flex-column justify-space-between">
              <h2
                class="display-2 font-weight-bold position-relative"
                style="z-index: 10; color: rgb(var(--v-theme-peach))"
              >
                {{ card.price }}
              </h2>
              <span class="text-subtitle2 font-weight-thin opacity-60 text-center">{{
                card.subprice
              }}</span>
            </div>

            <v-btn
              color="rgb(var(--v-theme-acier))"
              style="color: rgb(var(--v-theme-background))"
              class="font-weight-medium mt-5 w-100"
              target="_blank"
              flat
              @click="selectedFormule(card.index)"
            >
              {{ card.buttontext }}
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="detailsDialog" max-width="700">
      <v-card class="pa-6 rounded-16">
        <h3 class="font-weight-bold mb-4 text-center" style="color: rgb(var(--v-theme-peach))">
          {{ formule?.caption.toUpperCase() }}
        </h3>
        <h5 class="text-center">{{ formule?.subtext }}</h5>

        <v-divider class="my-4" />

        <div v-for="(desc, i) in formule?.list" :key="i" class="mb-3 d-flex align-start">
          <v-icon
            icon="mdi-check-circle-outline"
            color="rgb(var(--v-theme-darkbg))"
            size="18"
            class="me-2 mt-1"
          />
          <p class="text-14 text-grey-dark mb-0" v-html="desc.listtitle"></p>
        </div>

        <span class="custom-alert"
          >Pour choisir votre formule, rendez-vous sur le tableau de bord de votre événement.</span
        >

        <div class="text-end mt-6">
          <v-btn color="rgb(var(--v-theme-darkbg))" variant="text" @click="detailsDialog = false">
            Fermer
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { Packages } from '@/_mockApis/front-pages/PagesData';
import { useDisplay } from 'vuetify';
import type { PackageType } from '~/types/components/front-pages';

const firstPlanList = [
  {
    listtitle: 'Création de votre compte, identité et tableau de bord',
    status: false,
    icon: true,
    disable: false,
  },
  {
    listtitle: 'Accès à l’outil de définition de projet intégré',
    status: false,
    icon: true,
    disable: false,
  },
  {
    listtitle: 'Mise en relation avec vos futurs prestataires',
    status: false,
    icon: true,
    disable: false,
  },
  {
    listtitle: 'Accès aux outils de gestion de projet classiques',
    status: false,
    icon: true,
    disable: false,
  },
];

const detailsDialog = ref(false);
const formule = ref<PackageType>();
const { mdAndDown } = useDisplay();

const troncateDescription = (desc: string) => {
  if (!mdAndDown.value) {
    const shortDescription = desc.slice(0, 50);
    return `${shortDescription} ...`;
  } else {
    return desc;
  }
};

const selectedFormule = (index: number) => {
  detailsDialog.value = true;
  formule.value = Packages.find((pack) => pack.index === index);
};
</script>

<style lang="scss" scoped>
.packages {
  position: relative;
  background: rgb(var(--v-theme-background));

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__text-wrap {
    white-space: normal;
    padding-top: 105px;
    word-break: break-word;
  }

  &__features-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  &__custom-dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #007bff;
    margin-top: 5px; /* petit ajustement visuel pour un alignement parfait */
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    .custom-dot {
      width: 6px;
      height: 6px;
      margin-top: 4px;
    }
  }

  &__pricing-card {
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: #fff;
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
      transform: translateY(-4px);
      border-color: var(--v-theme-primary);
      box-shadow: 0 10px 24px rgba(0, 123, 255, 0.1);
    }
  }

  &__feature-item {
    flex: 1 1 auto;
    min-width: 200px;
    min-height: 30px !important;
    text-align: center;
  }
  &__background-shaded {
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(237, 221, 83, 0) 100%);
    height: 200px;
    width: 100%;
    z-index: 3;
    display: flex;
    justify-content: center; /* centre horizontalement */
    align-items: flex-end; /* colle le bouton en bas */
    padding-bottom: 20px;
  }
  &__more {
    position: relative;
    z-index: 9999;
    bottom: 20px;
    width: 80%;
  }
  &__card {
    height: 100%;
    h2 {
      color: rgb(var(--v-theme-textSecondary));
    }
  }
}

/* ✅ Le point reste aligné avec la première ligne du texte */
.bullet-line {
  display: flex;
  align-items: flex-start; /* point aligné en haut */
  gap: 10px;
  line-height: 1.5;
}

.divider {
  font-weight: 600;
  color: #007bff;
}

.break-text {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
}

.separator {
  height: 3px;
  width: 40px;
  border-radius: 2px;
  background-color: #007bff;
}

:deep(.custom-tooltip) {
  max-width: 250px !important;
  background-color: rgba(30, 30, 30, 0.9) !important;
  color: #fff !important;
  border-radius: 8px;
  white-space: normal !important;
  word-break: break-word !important;
  padding: 8px 12px !important;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.custom-alert {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  text-align: center;
  border-radius: 5px;
  background-color: rgb(var(--v-theme-darkbg)) !important;
  color: rgb(var(--v-theme-background)) !important; // pour le texte
}

@media (max-width: 960px) {
  .packages {
    &__features-list {
      display: flex;
      align-items: center;
      max-width: 800px;
      margin: 0 auto;
    }

    &__feature-item span {
      white-space: normal !important;
      word-break: break-word !important;
      display: inline-block;
      max-width: 100%;
    }

    .feature-item {
      min-width: 100%;
      text-align: left;
    }
    .pricing-free-card {
      max-height: none;
      height: auto;
    }
  }
}
</style>
