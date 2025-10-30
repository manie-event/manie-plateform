<script setup lang="ts">
import ContactForm from '@/components/frontpages/ContactUs/ContactForm.vue';
import PurchaseTemplate from '@/components/frontpages/Homepage/PurchaseTemplate.vue';
/*for Blank Layout*/
definePageMeta({
  layout: 'blank',
});
</script>

<template>
  <div style="position: relative">
    <!-- <ContactMap /> -->
    <ContactForm />
    <PurchaseTemplate />
  </div>
</template>
