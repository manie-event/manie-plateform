import type { BillingInfo } from '@/models/cart/billingInfo';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cartStore', () => {
  const userTokenBalance = ref<number>(0);
  const cartQuantity = ref(0);
  const addresses = ref<BillingInfo[]>([]);

  const getTotalPrice = computed(() => 9 * cartQuantity.value);
  const getCart = computed(() => cartQuantity.value);

  const creditTokensAfterPayment = (newQuantity: number) => {
    userTokenBalance.value += Number(newQuantity) || 0;
    useLocalStorage<number>('jeton-quantity', userTokenBalance.value);
    console.log(userTokenBalance.value, 'userTokenBalance.value');
    console.log(newQuantity, 'newQuantity');
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
    creditTokensAfterPayment,
  };
});
