<template>
  <div class="ccm__container">
    <v-row>
      <v-col cols="12" md="6">
        <base-side-picture class="ccm__image-container">
          <template #bg-image>
            <img
              :src="SidePicture"
              alt=""
              class="ccm__bg-image w-100"
              style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
            />
          </template>
          <template #logo>
            <LogoManie alt="" class="manie-logo" />
          </template>
        </base-side-picture>
      </v-col>
      <v-col cols="12" md="6" class="ccm__descriptif">
        <div class="ccm-client__switch mb-6 d-flex align-center gap-3">
          <span :class="{ active: !isPrestataire }" @click="isPrestataire = false">
            Je suis client
          </span>

          <v-switch v-model="isPrestataire" color="primary" hide-details inset></v-switch>

          <span :class="{ active: isPrestataire }" @click="isPrestataire = true">
            Je suis prestataire
          </span>
        </div>
        <h1>Comment ça fonctionne pour les {{ isPrestataire ? 'prestataire' : 'clients' }}</h1>

        <div class="ccm__sous-titre" v-if="!isPrestataire">
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(panel, index) in CcmClient"
              :key="index"
              :title="panel.titre"
            >
              <v-expansion-panel-text>
                <div v-html="panel.description"></div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="ccm__sous-titre" v-else>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(panel, index) in CcmPresta"
              :key="index"
              :title="panel.titre"
            >
              <v-expansion-panel-text>
                <div v-html="panel.description"></div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <NuxtLink :href="'/auth/login'" class="nuxt-link mt-6">Je me lance !</NuxtLink>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { NuxtLink } from '#components';
import CcmClient from '@/data/ccm-client.json';
import CcmPresta from '@/data/ccm-presta.json';
import SidePicture from '@/public/images/backgrounds/commentcamarche.jpg';
import LogoManie from '@/public/images/logos/logo-manie-creme.svg';
import BaseSidePicture from '~/components/common/BaseSidePicture.vue';

const isPrestataire = ref(false);

definePageMeta({
  layout: 'blank',
});
</script>
<style lang="scss" scoped>
.ccm {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ccm-client {
    &__switch {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      background: rgb(var(--v-theme-background));
      border: 1px solid rgba(var(--v-theme-darkbg), 0.3);
      border-radius: 25px;
      padding: 0.4rem 1.2rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;

      /* Texte de chaque côté du switch */
      span {
        cursor: pointer;
        font-weight: 500;
        transition: color 0.3s ease;
      }

      /* Style actif : la couleur primaire ressort clairement */
      .active {
        color: rgb(var(--v-theme-darkbg));
        font-weight: 700;
        text-shadow: 0 0 4px rgba(var(--v-theme-darkbg), 0.2);
      }

      /* Animation du switch lui-même */
      .v-switch {
        --v-theme-switch-track-width: 40px;
        --v-theme-switch-track-height: 20px;
        --v-theme-switch-thumb-size: 16px;
        transition: transform 0.3s ease;
      }

      /* Hover subtil */
      &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-color: rgba(var(--v-theme-darkbg), 0.6);
      }
    }
  }

  &__bg-image {
    position: relative;
  }
  &__descriptif {
    width: 50vw;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      margin-bottom: 1rem;
    }
  }
  &__btn {
    width: 100%;
    margin-top: 2rem;
  }
  &__sous-titre {
    margin-top: 50px;
    p {
      margin: 1rem 0;
    }
  }
}
.manie-logo {
  position: absolute;
  top: 40px;
  left: 40px;
}

@media screen and (max-width: 960px) {
  .ccm {
    &__image-container {
      display: none;
    }
  }
}
</style>
