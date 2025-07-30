import type { BillingInfo } from '@/models/cart/billingInfo';
import type { CartItem } from '@/models/cart/cartItem';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cartStore', () => {
  const userTokenBalance = useLocalStorage('jeton-quantity', 0);
  const cart = ref<CartItem>({
    price: 9,
    quantity: 0,
  });
  const isPaymentDone = ref(false);
  const addresses = ref<BillingInfo[]>([]);

  const getTotalPrice = computed(() => cart.value.price * cart.value.quantity);
  const getCart = computed(() => cart.value);

  const setJetonAmount = (newJeton: number) => {
    cart.value.quantity = newJeton;
    console.log(cart.value.quantity, 'QUANTITY');
  };

  const creditTokensAfterPayment = () => {
    if (isPaymentDone.value) {
      userTokenBalance.value += cart.value.quantity;
      console.log(
        `✅ ${cart.value.quantity} jetons crédités. Nouveau solde: ${userTokenBalance.value}`
      );
    }
  };
  const setBillingInfo = (billingInfo: BillingInfo) => {
    addresses.value.push(billingInfo);
  };

  return {
    cart,
    addresses,
    getCart,
    userTokenBalance,
    getTotalPrice,
    setJetonAmount,
    setBillingInfo,
    creditTokensAfterPayment,
  };
});
