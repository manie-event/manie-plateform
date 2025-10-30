<script setup lang="ts">
import { ref } from 'vue';
import { usePaiementJeton } from '~/composables/professional-user/UsePaiementJeton';
import StepFirst from './steps/StepFirst.vue';

const store = useCartStore();
const { cartQuantity } = storeToRefs(store);

const { createTokenSession } = usePaiementJeton();
const thankyou = ref(false);

const tab = ref('tab-1');
// function changeTab(e: string) {
//   tab.value = e;
// }
</script>
<template>
  <v-card variant="outlined" class="bg-surface">
    <v-card-text>
      <v-tabs v-model="tab" color="primary" class="customTab">
        <v-tab value="tab-1" rounded="md" class="mb-3 text-left me-4" height="70">
          <span
            class="round-40 rounded-circle bg-bglight d-flex justify-center align-center me-3 icon"
          >
            <BasketIcon stroke-width="1.5" width="20" />
          </span>

          <div>
            <div class="text-h6">Vos achats</div>
            <!-- <span class="text-subtitle-2 textSecondary font-weight-medium d-block"
              >Product Summary</span
            > -->
          </div>
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="tab-1" class="pa-1">
          <StepFirst />
          <v-row class="mt-3 pb-1">
            <v-col cols="12" sm="6" class="text-sm-left text-center">
              <v-btn color="primary" rounded="pill" variant="tonal" to="/"
                >Retour à l'accueil</v-btn
              >
            </v-col>
            <!-- <v-col cols="12" sm="6" class="text-sm-right text-center">
              <v-btn
                color="primary"
                rounded="pill"
                @click="changeTab('tab-2')"
                v-if="store.cart.quantity >= 1"
                >Suivant</v-btn
              >
            </v-col> -->
            <v-col cols="12" sm="6" class="text-sm-right pb-5">
              <v-btn
                v-if="store.cartQuantity >= 1"
                color="primary"
                rounded="pill"
                @click="createTokenSession(cartQuantity)"
                >Payer</v-btn
              >
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<style lang="scss">
.customTab {
  min-height: 68px;
}
</style>
