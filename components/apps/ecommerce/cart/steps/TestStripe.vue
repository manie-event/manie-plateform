<template>
  <div ref="checkoutElement">
    <h2>Test</h2>
  </div>
</template>

<script setup>
import { loadStripe } from '@stripe/stripe-js';
import { onMounted, ref } from 'vue';

const checkoutElement = ref(null);

onMounted(async () => {
  const stripe = await loadStripe('pk_test_...');

  const checkout = await stripe.initEmbeddedCheckout({
    clientSecret: 'your-client-secret',
  });

  checkout.mount(checkoutElement.value);
});
</script>
