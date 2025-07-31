import type { BillingInfo } from '@/models/cart/billingInfo';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cartStore', () => {
  const userTokenBalance = useLocalStorage<number>('jeton-balance', 0);
  const cartQuantity = useLocalStorage<number>('jeton-quantity', 0);
  const addresses = ref<BillingInfo[]>([]);

  const getTotalPrice = computed(() => 9 * cartQuantity.value);
  const getCart = computed(() => cartQuantity.value);

  const setJetonAmount = (newJeton: number) => {
    cartQuantity.value = newJeton;
    console.log(cartQuantity.value, 'QUANTITY');
  };

  const creditTokensAfterPayment = () => {
    userTokenBalance.value += cartQuantity.value;
    console.log(
      `✅ ${cartQuantity.value} jetons crédités. Nouveau solde: ${userTokenBalance.value}`
    );
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
    setJetonAmount,
    setBillingInfo,
    creditTokensAfterPayment,
  };
});
