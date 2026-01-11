<script setup lang="ts">
import { FrontPageMenu } from '@/_mockApis/landingpage/lpPage';
import { default as Logo } from '@/public/images/svgs/logo-manie-nav.svg';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import Navigation from '~/components/landingpage/layout/Navigation.vue';
import { useProfilStore } from '~/stores/profilStore';

const { isProfessional } = storeToRefs(useProfilStore());
const appsdrawer = ref(false);
const { mdAndDown } = useDisplay();

const { isProfileCreated } = storeToRefs(useProfilStore());
</script>

<template>
  <header>
    <v-app-bar elevation="0" height="105" color="containerBg" class="menu-dashboard">
      <div class="menu-dashboard__container">
        <!-- Logo -->
        <!-- Logo -->
        <NuxtLink to="/">
          <Logo width="150" height="100" alt="Manie logo" />
        </NuxtLink>
        <!-- Navigation desktop -->
        <div class="menu-dashboard__navigation d-none d-md-flex">
          <Navigation />
        </div>

        <div class="d-flex gap-3">
          <v-btn
            v-if="!isProfileCreated && !mdAndDown"
            rounded="pill"
            to="/auth/register"
            style="
              border: 1px solid rgb(var(--v-theme-peach));
              color: rgb(var(--v-theme-peach));
              font-weight: 600;
            "
          >
            Devenir prestataire
          </v-btn>
          <v-btn
            v-if="!mdAndDown"
            class="header__btn"
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

        <!-- Burger mobile -->
        <v-btn v-if="mdAndDown" @click.stop="appsdrawer = !appsdrawer">
          <Icon icon="material-symbols:menu-rounded" size="24" height="24" />
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Drawer mobile -->
    <v-navigation-drawer
      width="350"
      v-model="appsdrawer"
      location="left"
      color="containerBg"
      class="mt-6"
    >
      <div class="pa-4">
        <div class="d-flex justify-space-between align-center mb-4">
          <div class="d-flex" v-if="isProfileCreated">
            <LcFullVerticalHeaderProfileDD />
          </div>
          <v-btn icon variant="text" @click="appsdrawer = false" class="drawer-menu__skip-btn">
            <Icon icon="ci:close-big" size="24" />
          </v-btn>
        </div>
        <div class="d-flex flex-column align-center justify-center">
          <v-col v-for="demo in FrontPageMenu.slice(0, 5)" :key="demo.img">
            <NuxtLink
              class="nuxt-link"
              size="small"
              flat
              :href="demo.link"
              style="color: rgb(var(--v-theme-acier)); font-weight: 400"
            >
              {{ demo.name }}
            </NuxtLink>
          </v-col>
          <v-col>
            <NuxtLink
              class="nuxt-link mr-lg-0"
              to="/front-pages/pricing"
              style="color: rgb(var(--v-theme-acier)); font-weight: 400"
              >Nos formules</NuxtLink
            >
          </v-col>
          <v-col>
            <NuxtLink
              class="nuxt-link mr-lg-0"
              to="/front-pages/Contact-us"
              style="color: rgb(var(--v-theme-acier)); font-weight: 400"
              >Contact</NuxtLink
            >
          </v-col>
        </div>

        <v-divider class="my-4" />
        <div class="d-flex gap-3 flex-column">
          <v-btn
            v-if="!isProfileCreated"
            rounded="pill"
            class="w-100"
            to="/auth/register"
            style="
              border: 1px solid rgb(var(--v-theme-peach));
              color: rgb(var(--v-theme-peach));
              font-weight: 600;
            "
          >
            Devenir prestataire
          </v-btn>
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
      </div>
    </v-navigation-drawer>
  </header>
</template>

<style scoped lang="scss">
header {
  position: relative !important;
}
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
  width: 100vw !important;
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
