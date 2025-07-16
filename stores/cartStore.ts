import type { BillingInfo } from '@/models/cart/billingInfo';
import type { CartItem } from '@/models/cart/cartItem';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cartStore', () => {
  const cart = ref<CartItem>({
    name: 'Jeton Manie',
    price: 9,
    quantity: 0,
  });
  const addresses = ref<BillingInfo[]>([]);

  const getTotalPrice = computed(() => cart.value.price * cart.value.quantity);
  const getCart = computed(() => cart.value);

  const setJetonAmount = (newJeton: number) => {
    cart.value.quantity = newJeton;
  };

  const setBillingInfo = (billingInfo: BillingInfo) => {
    addresses.value.push(billingInfo);
  };

  return {
    cart,
    addresses,
    getCart,
    getTotalPrice,
    setJetonAmount,
    setBillingInfo,
  };
});
