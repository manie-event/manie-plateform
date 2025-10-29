<template>
  <div class="pt-96 packages">
    <v-container class="max-width-1218 package py-0" id="pricing">
      <div class="pb-12 text-center">
        <h2 class="display-1 font-weight-bold textPrimary">Fair pricing for everyone.</h2>
        <p class="text-grey100 pt-4 text-17 lh-32">
          Our robust analytics offer rich insights into the information buyers want, informing where
          teams.
        </p>
      </div>

      <v-row>
        <v-col cols="12">
          <v-card
            elevation="0"
            class="rounded-16 pa-10 border packages__pricing-card text-center transition-all"
          >
            <!-- Titre & sous-texte -->
            <div class="pb-4">
              <h4 class="text-22 font-weight-bold textPrimary mb-2">Liberté</h4>
              <p class="text-15 text-grey100 font-weight-medium mb-0">
                Tu souhaites organiser ton événement seul(e), comme un(e) grand(e) !
              </p>
            </div>

            <!-- Prix -->
            <div class="d-flex align-center justify-center flex-column mt-6 mb-8">
              <h2 class="display-2 text-primary font-weight-bold mb-1">Gratuit</h2>
              <div class="separator my-3"></div>
            </div>

            <!-- Liste des avantages -->
            <v-list
              class="mb-0 pl-0 pt-0 d-flex flex-wrap justify-center gap-4 packages__features-list"
            >
              <v-list-item
                v-for="desc in firstPlanList"
                :key="desc.listtitle"
                class="pa-0 packages__feature-item"
              >
                <v-list-item-title
                  class="text-15 font-weight-medium text-grey-dark d-flex align-center"
                >
                  <span class="divider">|</span>
                  <span v-html="desc.listtitle" class="pl-2"></span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="my-10 opacity-60"> Nos offres d'accompagnement personnalisées</v-divider>
      <v-row class="d-flex justify-center">
        <v-col cols="12" lg="3" sm="6" v-for="card in Packages" :key="card.caption">
          <v-card elevation="0" class="rounded-16 pa-6 border card">
            <div class="pb-4">
              <div class="d-flex ga-2 align-center">
                <h4 class="text-20 font-weight-semibold textPrimary mb-4">{{ card.caption }}</h4>
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

            <div class="d-flex align-center mt-3 flex-column">
              <h2 class="display-2 text-primary font-weight-bold">{{ card.price }}</h2>
              <span class="text-h6 font-weight-thin opacity-60 text-center">{{
                card.subprice
              }}</span>
            </div>

            <v-list class="mb-0 pl-0 bg-transparent pt-5">
              <v-list-item class="pa-0" v-for="desc in card.list" :key="desc.listtitle">
                <v-list-item-title
                  :class="{ 'opacity-50': desc.disable }"
                  class="text-14 font-weight-medium break-text bullet-line"
                >
                  <span class="packages__custom-dot"></span>
                  <span v-html="desc.listtitle" class="packages__text-wrap"></span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
            <div class="packages__background-shaded">
              <v-btn
                color="primary"
                class="font-weight-medium packages__more"
                target="_blank"
                flat
                @click="selectedFormule(card.index)"
              >
                {{ card.buttontext }}
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="detailsDialog" max-width="700">
      <v-card class="pa-6 rounded-16">
        <h3 class="text-primary font-weight-bold mb-4 text-center">
          {{ formule?.caption }}
        </h3>
        <h5 class="text-center">{{ formule?.subtext }}</h5>

        <v-divider class="my-4" />

        <div v-for="(desc, i) in formule?.list" :key="i" class="mb-3 d-flex align-start">
          <v-icon icon="mdi-check-circle-outline" color="primary" size="18" class="me-2 mt-1" />
          <p class="text-14 text-grey-dark mb-0" v-html="desc.listtitle"></p>
        </div>

        <div class="text-end mt-6">
          <v-btn color="primary" variant="text" @click="detailsDialog = false"> Fermer </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { Packages } from '@/_mockApis/front-pages/PagesData';
import type { PackageType } from '~/types/components/front-pages';

const firstPlanList = [
  {
    listtitle: 'Création espace client',
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
    listtitle: 'Mise en relation prestataire',
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

const troncateDescription = (desc: string) => {
  const shortDescription = desc.slice(0, 60);
  return `${shortDescription} ...`;
};

const selectedFormule = (index: number) => {
  detailsDialog.value = true;
  formule.value = Packages.find((pack) => pack.index === index);
};
</script>

<style lang="scss" scoped>
.packages {
  background: rgb(var(--v-theme-background));

  &__text-wrap {
    white-space: normal;
    word-break: break-word;
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

  &__features-list {
    max-width: 800px;
    margin: 0 auto;
  }

  &__feature-item {
    flex: 1 1 auto;
    min-width: 200px;
    text-align: center;
  }
  &__background-shaded {
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(237, 221, 83, 0) 100%);
    height: 200px;
    width: 100%;
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

.v-card {
  border: 3px solid rgb(var(--v-theme-darkbg));
  max-height: 600px;
  h2 {
    color: rgb(var(--v-theme-textSecondary));
  }
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

@media (max-width: 960px) {
  .feature-item {
    min-width: 100%;
    text-align: left;
  }
  .divider {
    display: none;
  }
}
</style>
