import type { BillingInfo } from '@/models/cart/billingInfo';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cartStore', () => {
  const userTokenBalance = ref<number>(0);
  const cartQuantity = ref(0);
  const addresses = ref<BillingInfo[]>([]);

  const getTotalPrice = computed(() => 9 * cartQuantity.value);
  const getCart = computed(() => cartQuantity.value);

  const initializeTokenBalance = (balance: number) => {
    userTokenBalance.value = Number(balance) || 0;
  };

  const setJetonQuantity = (newJetonQuantity: number) => {
    cartQuantity.value = newJetonQuantity;
  };

  const setBillingInfo = (billingInfo: BillingInfo) => {
    addresses.value.push(billingInfo);
  };

  return {
    cartQuantity,
    addresses,
    getCart,
    userTokenBalance,
    getTotalPrice,
    setBillingInfo,
    setJetonQuantity,
    initializeTokenBalance,
  };
});
