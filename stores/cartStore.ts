import type { BillingInfo } from '@/models/cart/billingInfo';
import type { CartItem } from '@/models/cart/cartItem';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cartStore', () => {
  const initCartQuantity = ref(0);
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

  const setJetonAmountToInitWhenPaymentDone = () =>
    isPaymentDone.value
      ? (initCartQuantity.value = initCartQuantity.value + cart.value.quantity)
      : (initCartQuantity.value = initCartQuantity.value + 0);

  const setBillingInfo = (billingInfo: BillingInfo) => {
    addresses.value.push(billingInfo);
  };

  return {
    cart,
    addresses,
    getCart,
    initCartQuantity,
    getTotalPrice,
    setJetonAmount,
    setBillingInfo,
    setJetonAmountToInitWhenPaymentDone,
  };
});
