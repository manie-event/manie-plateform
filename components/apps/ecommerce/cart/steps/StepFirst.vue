<script setup lang="ts">
import JetonImg from '@/public/images/panier/jeton.png';
import CartEmpty from '../CartEmpty.vue';

const store = useCartStore();
const { cart, getTotalPrice, getCart } = storeToRefs(store);
</script>
<template>
  <div v-if="cart.quantity > 0">
    <h5 class="text-h5 my-8">Vos nouveaux jetons ({{ cart.quantity }})</h5>
    <v-divider />
    <v-table>
      <thead>
        <tr>
          <th class="text-left text-subtitle-1 font-weight-semibold">Product</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">Price</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">Quantity</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">Total</th>
          <th class="text-right"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="d-flex align-center my-3 gap-2">
              <img alt="product" class="rounded-md" :src="JetonImg" width="36" />
              <div class="ma-2">
                <h6 class="text-h6">{{ cart.name }}</h6>
              </div>
            </div>
          </td>
          <td>
            <h4 class="text-h5">{{ cart.price }} €</h4>
          </td>
          <td>
            <v-btn-toggle variant="outlined" divided color="success">
              <v-btn size="x-small" @click="cart.quantity--" :disabled="cart.quantity < 2">
                <MinusIcon size="18" />
              </v-btn>

              <v-btn size="x-small" class="text-subtitle-1">
                {{ cart.quantity }}
              </v-btn>

              <v-btn size="x-small" @click="cart.quantity++">
                <PlusIcon size="18" />
              </v-btn>
            </v-btn-toggle>
          </td>
          <td class="text-h5">{{ getTotalPrice }} €</td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div v-else class="d-flex justify-center">
    <CartEmpty />
  </div>
</template>
<style>
.custom-img-box {
  width: 60px;
  height: 60px;
}
</style>
