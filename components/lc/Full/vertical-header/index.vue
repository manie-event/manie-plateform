<script setup lang="ts">
import Navigations from '@/components/landingpage/layout/Navigation.vue';
import JetonImg from '@/public/images/panier/jeton.png';
import { default as Logo, default as LogoManie } from '@/public/images/svgs/logo-manie-nav.svg';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import Navigation from '~/components/landingpage/layout/Navigation.vue';
import { usePaiementJeton } from '~/composables/professional-user/UsePaiementJeton';
import { useUserStore } from '~/stores/userStore';

const { isProfessional } = storeToRefs(useUserStore());
const { createTokenSession } = usePaiementJeton();
const jetonAmount = ref(0);
const stickyHeader = ref(false);
const appsdrawer = ref(false);
const isMobile = ref(window.innerWidth < 600);
const { clientProfile, professionalUser } = storeToRefs(useUserStore());
const isProfileCreated = ref(localStorage.getItem('profil-created') === 'true');

const totalPriceJeton = computed(() => `${jetonAmount.value * 9} €`);

// Scroll sticky
const handleScroll = () => {
  stickyHeader.value = window.scrollY > 0;
};

// Resize responsive
const handleResize = () => {
  isMobile.value = window.innerWidth < 600;
};

// Mount / Unmount events
onMounted(() => {
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <v-app-bar
    elevation="0"
    height="75"
    color="containerBg"
    id="top"
    class="menu-dashboard"
    :class="{ sticky: stickyHeader }"
  >
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
      <v-btn
        v-if="isMobile"
        variant="text"
        @click.stop="appsdrawer = !appsdrawer"
        class="d-lg-none"
      >
        <Icon icon="material-symbols:menu-rounded" size="24" height="24" />
      </v-btn>

      <!-- Drawer mobile -->
      <v-navigation-drawer v-model="appsdrawer" location="left" temporary class="drawer-menu">
        <div class="pa-4">
          <div class="d-flex justify-space-between align-center mb-4">
            <LogoManie width="100" />
            <v-btn icon variant="text" @click="appsdrawer = false">
              <Icon icon="ci:close-big" size="24" />
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
    </div>
  </v-app-bar>
</template>

<style scoped lang="scss">
.menu-dashboard {
  &.sticky {
    position: sticky;
    top: 0;
    background: rgb(var(--v-theme-background));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

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
  background: rgb(var(--v-theme-containerBg));
  width: 80vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 320px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

@media (min-width: 900px) {
  .drawer-menu {
    display: none;
  }
}
</style>
