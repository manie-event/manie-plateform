<template>
  <h3>Verify Email view</h3>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const token = route.params.token as string;
const { checkEmail } = useAuthentification();

const loading = ref(true);
const success = ref(false);
const error = ref('');

onMounted(async () => {
  await checkEmail(token);
});
</script>
