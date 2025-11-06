<script setup lang="ts">
import Navigations from '@/components/landingpage/layout/Navigation.vue';
import LogoManie from '@/public/images/svgs/logo-manie-nav.svg';
import { storeToRefs } from 'pinia';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useUserStore } from '~/stores/userStore';

const appsdrawer = ref(false);
const isMobile = ref(window.innerWidth < 600);

const { clientProfile, professionalUser } = storeToRefs(useUserStore());

const isProfileCreated = ref(localStorage.getItem('profil-created') === 'true');

// ⚡ Gestion auto du resize
const handleResize = () => {
  isMobile.value = window.innerWidth < 600;
};

onMounted(() => window.addEventListener('resize', handleResize));
onBeforeUnmount(() => window.removeEventListener('resize', handleResize));
</script>

<template>
  <header class="header">
    <!-- Logo -->
    <NuxtLink to="/" class="header__logo">
      <LogoManie width="100" />
    </NuxtLink>

    <!-- Navigation desktop -->
    <div class="header__nav d-none d-md-flex">
      <Navigations />
    </div>

    <!-- Boutons login/dashboard desktop -->
    <div class="d-none d-md-flex align-center">
      <v-btn v-if="!isProfileCreated" class="header__btn" rounded="pill" to="/auth/login">
        Se connecter
      </v-btn>

      <v-btn
        v-else-if="isProfileCreated && clientProfile"
        class="header__btn"
        rounded="pill"
        to="/dashboards/dashboard-client"
      >
        Mon tableau de bord
      </v-btn>

      <v-btn
        v-else-if="isProfileCreated && professionalUser"
        class="header__btn"
        rounded="pill"
        to="/dashboards/dashboard2"
      >
        Mon tableau de bord
      </v-btn>
    </div>

    <!-- Burger mobile -->
    <v-btn
      v-if="isMobile"
      variant="text"
      icon
      @click.stop="appsdrawer = !appsdrawer"
      class="d-md-none"
    >
      <Menu2Icon size="24" />
    </v-btn>

    <!-- Drawer mobile -->
    <v-navigation-drawer v-model="appsdrawer" location="left" temporary class="drawer-menu">
      <div class="pa-4">
        <div class="d-flex justify-space-between align-center mb-4">
          <LogoManie width="100" />
          <v-btn icon variant="text" @click="appsdrawer = false">
            <Menu2Icon size="24" />
          </v-btn>
        </div>
        <Navigations />
        <v-divider class="my-4" />
        <v-btn
          v-if="!isProfileCreated"
          class="header__btn w-100"
          rounded="pill"
          to="/auth/login"
          @click="appsdrawer = false"
        >
          Se connecter
        </v-btn>
        <v-btn
          v-else
          class="header__btn w-100"
          rounded="pill"
          :to="clientProfile ? '/dashboards/dashboard-client' : '/dashboards/dashboard2'"
          @click="appsdrawer = false"
        >
          Mon tableau de bord
        </v-btn>
      </div>
    </v-navigation-drawer>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-color);
  width: 100%;
  padding: 0.5rem 1rem;
  z-index: 10;

  &__logo {
    display: flex;
    align-items: center;
  }
}
</style>
