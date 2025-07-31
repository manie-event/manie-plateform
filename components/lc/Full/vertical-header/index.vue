<script setup lang="ts">
import JetonImg from '@/public/images/panier/jeton.png';
import { Icon } from '@iconify/vue';

const cartStore = useCartStore();
const { setJetonAmount } = cartStore;
const { createTokenSession } = usePaiementJeton();
const { isProfessionalProfileCreated } = storeToRefs(useUserStore());

const jetonAmount = ref(0);
const stickyHeader = ref(false);

const totalPriceJeton = computed(() => {
  return `${jetonAmount.value * 9} €`;
});

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (window.pageYOffset) {
    stickyHeader.value = true;
  } else {
    stickyHeader.value = false;
  }
};

watch(jetonAmount, (newJetonAmount) => {
  setJetonAmount(newJetonAmount);
});
</script>

<template>
  <v-app-bar
    elevation="0"
    height="75"
    color="containerBg"
    id="top"
    :class="stickyHeader ? 'sticky' : ''"
    style="position: relative; top: 10px"
  >
    <!-- ---------------------------------------------- -->
    <!-- Search part -->
    <!-- ---------------------------------------------- -->
    <div class="hidden-md-and-up me-md-4 me-0">
      <LcFullVerticalHeaderSearchbar />
    </div>

    <!---/Search part -->
    <v-spacer class="hidden-sm-and-down" />

    <div class="hidden-md-and-up w-40">
      <LcFullLogo />
    </div>

    <div class="hidden-sm-and-down me-sm-4 me-4">
      <LcFullVerticalHeaderSearchbar />
    </div>

    <div class="me-sm-4 me-0">
      <LcFullVerticalHeaderThemeToggler />
    </div>

    <!-- ---------------------------------------------- -->
    <!-- translate -->
    <!-- ---------------------------------------------- -->
    <div class="hidden-sm-and-down me-sm-4 me-4"></div>

    <!-- ---------------------------------------------- -->
    <!-- ShoppingCart -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false" class="notification_popup">
      <template v-slot:activator="{ props }">
        <v-btn icon flat v-bind="props" size="small" class="custom-hover-primary">
          <div class="position-realtive">
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
              <v-btn variant="text" @click="jetonAmount--" :disabled="jetonAmount == 0">-</v-btn>
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
  </v-app-bar>
</template>
<style scoped></style>
