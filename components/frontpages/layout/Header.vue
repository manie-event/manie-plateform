<script setup lang="ts">
import JetonImg from '@/public/images/panier/jeton.png';
import { default as Logo } from '@/public/images/svgs/logo-manie-nav.svg';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useDisplay } from 'vuetify';
import Navigation from '~/components/landingpage/layout/Navigation.vue';
import { usePaiementJeton } from '~/composables/UsePaiementJeton';
import { useProfilStore } from '~/stores/profilStore';

const { isProfessional } = storeToRefs(useProfilStore());
const { createTokenSession } = usePaiementJeton();
const jetonAmount = ref(0);
const stickyHeader = ref(false);
const appsdrawer = ref(false);
const { mdAndDown } = useDisplay();
const { isProfileCreated } = storeToRefs(useProfilStore());

const totalPriceJeton = computed(() => `${jetonAmount.value * 5} €`);
</script>

<template>
  <v-app-bar elevation="0" height="105" relative color="containerBg" class="menu-dashboard">
    <div class="menu-dashboard__container">
      <!-- Logo -->
      <NuxtLink to="/">
        <Logo width="150" height="100" />
      </NuxtLink>

      <!-- Navigation desktop -->
      <div class="menu-dashboard__navigation d-none d-md-flex">
        <Navigation />
      </div>

      <!-- Actions desktop -->
      <div class="menu-dashboard__right-part d-none d-md-flex">
        <LcFullVerticalHeaderThemeToggler />
        <v-menu v-if="isProfessional" :close-on-content-click="false" class="notification_popup">
          <template #activator="{ props }">
            <v-btn icon flat size="small" class="custom-hover-primary" v-bind="props">
              <Icon icon="solar:cart-3-outline" height="24" width="24" />
              <v-badge
                color="primary"
                :content="jetonAmount"
                variant="flat"
                size="x-small"
                class="text-white ml-4 position-absolute top-0 end-0"
              />
            </v-btn>
          </template>
          <v-sheet rounded="lg" width="385" elevation="10" class="mt-5 dropdown-box">
            <div class="px-8 pb-4 pt-6">
              <h6 class="text-h5 font-weight-semibold">Besoin de jeton(s) ?</h6>
              <div class="d-flex align-center justify-space-between mt-4">
                <img :src="JetonImg" alt="Jeton" height="36" />
                <div class="d-flex align-center">
                  <v-btn variant="text" @click="jetonAmount--" :disabled="jetonAmount <= 0"
                    >-</v-btn
                  >
                  <p class="px-4">{{ jetonAmount > 0 ? jetonAmount : 0 }}</p>
                  <v-btn variant="text" @click="jetonAmount++">+</v-btn>
                </div>
                <p class="px-4">
                  <b>{{ totalPriceJeton }}</b>
                </p>
              </div>
              <v-btn
                v-if="jetonAmount > 0"
                color="primary"
                size="small"
                rounded="pill"
                block
                @click="createTokenSession(jetonAmount)"
              >
                Acheter
              </v-btn>
            </div>
          </v-sheet>
        </v-menu>
        <LcFullVerticalHeaderProfileDD />
      </div>

      <!-- Burger mobile -->
      <v-btn v-if="mdAndDown" variant="text" @click.stop="appsdrawer = !appsdrawer">
        <Icon icon="material-symbols:menu-rounded" size="24" height="24" />
      </v-btn>
    </div>
  </v-app-bar>

  <!-- Drawer mobile -->
  <v-navigation-drawer v-model="appsdrawer" color="containerBg" location="left" class="drawer-menu">
    <div class="pa-4">
      <div class="d-flex justify-space-between align-center mb-4">
        <div class="d-flex" v-if="isProfileCreated">
          <!-- <LcFullVerticalHeaderThemeToggler /> -->
          <LcFullVerticalHeaderProfileDD />
        </div>
        <v-btn icon variant="text" @click="appsdrawer = false" class="drawer-menu__skip-btn">
          <Icon icon="ci:close-big" size="24" />
        </v-btn>
      </div>
      <div class="d-flex flex-column align-center justify-center" style="height: 200px">
        <Navigation />
      </div>

      <v-divider class="my-4" />
      <v-btn
        class="header__btn w-100"
        rounded="pill"
        :to="
          isProfileCreated
            ? !isProfessional
              ? '/dashboards/dashboard-client'
              : '/dashboards/dashboard2'
            : '/auth/login'
        "
        @click="appsdrawer = false"
      >
        {{ isProfileCreated ? ' Mon tableau de bord' : 'Se connecter' }}
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.menu-dashboard {
  position: relative !important;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: rgb(var(--v-theme-background));
    padding: 0 1.25rem;
  }

  &__navigation {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
}

.drawer-menu {
  position: absolute;
  background: rgb(var(--v-theme-background));
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  &__skip-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
.header {
  position: relative;

  &__btn {
    background: rgb(var(--v-theme-darkbg));
    color: rgb(var(--v-theme-background));
    font-weight: bold;
  }
}

@media (min-width: 900px) {
  .drawer-menu {
    display: none;
  }
}
</style>
