<script setup lang="ts">
import StripeLogo from '@/public/images/panier/stripe_logo.svg';
import { ref } from 'vue';
import OrderSummaryVue from './OrderSummary.vue';

const payment = ref('paypal');
const dialog = ref(false);

const delivery = ref('free');

const store = useCartStore();
const { cart, getTotalPrice } = storeToRefs(store);
</script>

<template>
  <v-container>
    <v-row class="mt-5">
      <v-col cols="12" lg="7">
        <div class="py-5 px-4 border rounded-md mb-6">
          <v-radio value="card" color="primary" class="label-op-1">
            <template v-slot:label>
              <div class="d-flex align-center w-100">
                <div>
                  <h6 class="text-h6 mb-1">Paiement en carte avec Stripe</h6>
                  <span class="d-block text-subtitle-1 text-wrap"
                    >Vous serez redirigé vers le site sécurisé de Stripe pour effectuer votre
                    paiement en ligne</span
                  >
                </div>
                <div class="ml-auto flex-shrink-0">
                  <img :src="StripeLogo" width="72" alt="img" />
                </div>
              </div>
            </template>
          </v-radio>
        </div>
      </v-col>
      <!-- <TestStripe></TestStripe> -->
      <OrderSummaryVue />
    </v-row>
  </v-container>
</template>

<style lang="scss">
.object-card {
  position: relative;
  background-color: rgba(var(--v-theme-primary), 0.9);
  &.object-secondary {
    background-color: rgba(var(--v-theme-secondary), 0.9);
    &:before {
      background-color: rgb(var(--v-theme-secondary200));
    }
    &:after {
      background-color: rgb(var(--v-theme-darksecondary));
    }
    .top-object {
      &::after {
        background-color: rgb(var(--v-theme-secondary));
      }
    }
  }
  &:before {
    content: '';
    position: absolute;
    background-color: rgb(var(--v-theme-primary200));
    width: 60px;
    height: 60px;
    border-radius: 50%;
    right: -20px;
    bottom: 0px;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: rgb(var(--v-theme-darkprimary));
    width: 60px;
    height: 60px;
    border-radius: 50%;
    right: 12px;
    bottom: -30px;
  }
}

.top-object {
  &::after {
    content: '';
    position: absolute;
    background-color: rgb(var(--v-theme-primary));
    width: 75px;
    height: 75px;
    border-radius: 50%;
    top: -25px;
    left: -25px;
  }
}
html .label-op-1 label {
  opacity: 1 !important;
}
</style>
