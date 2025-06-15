<script setup lang="ts">
import ContactForm from '@/components/frontpages/ContactUs/ContactForm.vue';
import PurchaseTemplate from '@/components/frontpages/Homepage/PurchaseTemplate.vue';
import TextBannerCard from '@/components/frontpages/Shared/TextBannerCard.vue';
import Header from '@/components/landingpage/layout/Header.vue';
import DefaultLayout from './Layout.vue';
/*for Blank Layout*/
definePageMeta({
  layout: 'blank',
});
</script>

<template>
  <DefaultLayout>
    <Header />

    <TextBannerCard title="A l'écoute de vos questions" caption="Contact Us" />
    <!-- <ContactMap /> -->
    <ContactForm />
    <PurchaseTemplate />
  </DefaultLayout>
</template>
