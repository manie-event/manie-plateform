<script setup lang="ts">
import JetonImg from '@/public/images/panier/jeton.png';
import Logo from '@/public/images/svgs/logo-manie-nav.svg';
import { Icon } from '@iconify/vue';
import Navigation from '~/components/landingpage/layout/Navigation.vue';
import { usePaiementJeton } from '~/composables/professional-user/UsePaiementJeton';

const { createTokenSession } = usePaiementJeton();
const jetonAmount = ref(0);
const stickyHeader = ref(false);

const isProfessional = ref(localStorage.getItem('is-professional') === 'true');

const totalPriceJeton = computed(() => {
  return `${jetonAmount.value * 9} €`;
});

const handleScroll = () => {
  if (window.pageYOffset) {
    stickyHeader.value = true;
  } else {
    stickyHeader.value = false;
  }
};

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <v-app-bar
    elevation="0"
    height="75"
    color="containerBg"
    id="top"
    class="menu-dashboard"
    :class="stickyHeader ? 'sticky' : ''"
    style="position: relative"
  >
    <!-- ---------------------------------------------- -->
    <!-- Search part -->
    <!-- ---------------------------------------------- -->
    <!-- <div class="hidden-md-and-up me-md-4 me-0">
      <LcFullVerticalHeaderSearchbar />
    </div> -->
    <div class="menu-dashboard__container pt-6">
      <div>
        <NuxtLink to="/">
          <Logo width="150" height="100" />
        </NuxtLink>
        <!---/Search part -->
      </div>
      <div class="menu-dashboard__navigation">
        <Navigation />
      </div>
      <!-- <div class="hidden-sm-and-down me-sm-4 me-4">
      <LcFullVerticalHeaderSearchbar />
    </div> -->

      <!-- ---------------------------------------------- -->
      <!-- translate -->
      <!-- ---------------------------------------------- -->

      <!-- ---------------------------------------------- -->
      <!-- ShoppingCart -->
      <!-- ---------------------------------------------- -->
      <div class="menu-dashboard__right-part d-flex align-center">
        <LcFullVerticalHeaderThemeToggler />

        <v-menu :close-on-content-click="false" class="notification_popup" v-if="isProfessional">
          <template v-slot:activator="{ props }">
            <v-btn
              icon
              flat
              v-bind="props"
              size="small"
              class="custom-hover-primary no-global-style"
            >
              <div class="d-flex align-center justify-center">
                <Icon icon="solar:cart-3-outline" height="24" width="24" />
              </div>
              <v-badge
                color="primary"
                :content="jetonAmount"
                variant="flat"
                size="x-small"
                class="text-white ml-4 position-absolute top-0 end-0"
                rounded="xxl"
              ></v-badge>
            </v-btn>
          </template>
          <v-sheet rounded="lg" width="385" elevation="10" class="mt-5 dropdown-box">
            <div class="px-8 pb-4 pt-6">
              <div class="d-flex align-center">
                <h6 class="text-h5 font-weight-semibold">Besoin de jeton(s) ?</h6>
              </div>
              <div class="d-flex align-center justify-space-between mt-4">
                <img :src="JetonImg" alt="Jeton" height="36px" />
                <div class="d-flex align-center">
                  <v-btn variant="text" @click="jetonAmount--" :disabled="jetonAmount == 0"
                    >-</v-btn
                  >
                  <p class="px-4">{{ jetonAmount > 0 ? jetonAmount : 0 }}</p>
                  <v-btn variant="text" @click="jetonAmount++">+</v-btn>
                </div>
                <p class="px-4">
                  <b>{{ jetonAmount >= 0 ? totalPriceJeton : 0 }}</b>
                </p>
              </div>
            </div>
            <div class="pb-4 px-6 text-center" v-if="jetonAmount > 0">
              <v-btn
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

        <!-- ---------------------------------------------- -->
        <!-- Notification -->
        <!-- ---------------------------------------------- -->
        <!-- <div class="hidden-sm-and-down me-sm-4 me-4">
      <LcFullVerticalHeaderNotificationDD />
    </div> -->
        <!-- ---------------------------------------------- -->
        <!-- User Profile -->
        <!-- ---------------------------------------------- -->
        <div class="hidden-sm-and-down mx-4">
          <LcFullVerticalHeaderProfileDD />
        </div>
      </div>

      <!-----Mobile header------>
      <v-menu :close-on-content-click="false" class="mobile_popup">
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            class="bg-lightprimary hidden-md-and-up custom-hover-primary"
            flat
            v-bind="props"
            size="small"
          >
            <DotsIcon stroke-width="2" size="24" class="text-primary" />
          </v-btn>
        </template>
        <v-sheet rounded="lg" elevation="10" class="mt-5 dropdown-box px-4 py-6">
          <div class="d-flex justify-space-between align-center">
            <v-btn
              icon
              variant="text"
              to="/apps/ecommerce/checkout"
              class="custom-hover-primary"
              size="small"
            >
              <v-badge color="primary" offset-x="-4" offset-y="-6">
                <Icon icon="solar:cart-3-line-duotone" height="24" width="24" />
              </v-badge>
            </v-btn>
            <LcFullVerticalHeaderNotificationDD />
            <LcFullVerticalHeaderProfileDD />
          </div>
        </v-sheet>
      </v-menu>
    </div>
  </v-app-bar>
</template>
<style scoped lang="scss">
.no-global-style.v-btn {
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
}

.menu-dashboard {
  position: relative;
  z-index: 100;
  transition:
    box-shadow 0.3s ease,
    background-color 0.3s ease;

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

  &__right-part {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .v-btn {
      position: relative;

      /* ✅ Stabilise le badge */
      .v-badge {
        position: absolute !important;
        top: 4px !important;
        right: 4px !important;
        transform: none !important;
        height: 45px;
        width: 15px;
        border-radius: 5px;
        transition: none !important;
      }

      /* ✅ Ne bouge pas au hover */
      &:hover .v-badge {
        transform: none !important;
      }

      /* Empêche le "clignotement" de l’icône */
      .v-icon {
        transition: color 0.2s ease;
      }

      &:hover .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }

  /* ✅ Dropdown du panier propre */
  .dropdown-box {
    background: rgb(var(--v-theme-surface));
    border-radius: 12px;
    border: 1px solid rgba(var(--v-theme-darkbg), 0.1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease;

    &:hover {
      border-color: rgba(var(--v-theme-primary), 0.2);
    }

    img {
      user-select: none;
    }
  }
}
</style>
