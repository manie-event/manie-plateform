<template>
  <h3>Verify Email view</h3>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const token = route.params.token as string;
console.log('Token from route:', token);
console.log('Full route params:', route.params);
console.log('Full route path:', route.path);
console.log('router:', router);
const { checkEmail } = useAuthentification();

onMounted(async () => {
  await checkEmail(token);
});
</script>
