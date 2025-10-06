import type { BillingInfo } from '@/models/cart/billingInfo';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cartStore', () => {
  const userTokenBalance = ref<number>(0);
  const cartQuantity = ref(0);
  const addresses = ref<BillingInfo[]>([]);

  const getTotalPrice = computed(() => 9 * cartQuantity.value);
  const getCart = computed(() => cartQuantity.value);

  /**
   * ✅ CORRIGÉ : Additionne les nouveaux jetons au solde existant
   */
  const creditTokensAfterPayment = (newQuantity: number) => {
    console.log('💰 [creditTokensAfterPayment] Solde actuel:', userTokenBalance.value);
    console.log('➕ [creditTokensAfterPayment] Nouveaux jetons:', newQuantity);

    // Additionner les nouveaux jetons au solde existant
    userTokenBalance.value += Number(newQuantity) || 0;

    console.log('✅ [creditTokensAfterPayment] Nouveau solde total:', userTokenBalance.value);

    // Sauvegarder dans localStorage
    localStorage.setItem('jeton-quantity', String(userTokenBalance.value));
  };

  /**
   * ✅ NOUVEAU : Initialiser le solde depuis le backend ou localStorage
   */
  const initializeTokenBalance = (balance: number) => {
    console.log('🔄 [initializeTokenBalance] Initialisation avec:', balance);
    userTokenBalance.value = Number(balance) || 0;
    localStorage.setItem('jeton-quantity', String(userTokenBalance.value));
  };

  /**
   * ✅ NOUVEAU : Charger le solde depuis localStorage au démarrage
   */
  const loadTokenBalanceFromStorage = () => {
    const stored = localStorage.getItem('jeton-quantity');
    userTokenBalance.value = stored ? Number(stored) : 0;
    console.log('📦 [loadTokenBalanceFromStorage] Solde chargé:', userTokenBalance.value);
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
    initializeTokenBalance,
    loadTokenBalanceFromStorage,
  };
});
