<script setup lang="ts">
import { Packages } from '@/_mockApis/front-pages/PagesData';

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
</script>

<template>
  <div class="pt-96 bg-surface">
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
            class="rounded-16 pa-10 border pricing-card text-center transition-all"
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
            <v-list class="mb-0 pl-0 pt-0 d-flex flex-wrap justify-center gap-4 features-list">
              <v-list-item
                v-for="desc in firstPlanList"
                :key="desc.listtitle"
                class="pa-0 feature-item"
              >
                <v-list-item-title
                  class="text-15 font-weight-medium text-grey-dark d-flex align-center"
                >
                  <span class="divider">|</span>
                  <span v-html="desc.listtitle" class="pl-2"></span>
                </v-list-item-title>
              </v-list-item>
            </v-list>

            <!-- Bouton CTA -->
            <v-btn
              color="primary"
              size="small"
              class="mt-8 w-50 d-flex align-center mx-auto font-weight-medium rounded-pill px-10 py-6 shadow-sm hover:shadow-md transition-all"
              href="/"
              flat
            >
              Je me lance
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="my-10 opacity-60"> Nos offres d'accompagnement personnalisées</v-divider>
      <v-row class="d-flex justify-center">
        <v-col cols="12" lg="3" sm="6" v-for="card in Packages" :key="card.caption">
          <v-card elevation="0" class="rounded-16 pa-6 border">
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
              <p class="text-14 text-grey100 font-weight-medium">{{ card.subtext }}</p>
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
                  <span class="custom-dot"></span>
                  <span v-html="desc.listtitle" class="text-wrap"></span>
                </v-list-item-title>
              </v-list-item>
            </v-list>

            <v-btn
              color="primary"
              size="large"
              class="mt-4 font-weight-medium"
              rounded="pill"
              :href="card.url"
              target="_blank"
              flat
              block
            >
              {{ card.buttontext }}
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.break-text {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
}

.text-wrap {
  white-space: normal;
  word-break: break-word;
}

/* ✅ Le point reste aligné avec la première ligne du texte */
.bullet-line {
  display: flex;
  align-items: flex-start; /* point aligné en haut */
  gap: 10px;
  line-height: 1.5;
}

.custom-dot {
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

pricing-card {
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

.features-list {
  max-width: 800px;
  margin: 0 auto;
}

.feature-item {
  flex: 1 1 auto;
  min-width: 200px;
  text-align: center;
}

.divider {
  color: #007bff;
  font-weight: 600;
}

.separator {
  width: 40px;
  height: 3px;
  background-color: #007bff;
  border-radius: 2px;
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
