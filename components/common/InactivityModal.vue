<template>
  <v-dialog v-model="openModal" max-width="500" persistent>
    <v-card class="pa-6 text-center d-flex flex-column align-center" rounded="lg">
      <h2 class="text-h5 font-weight-bold mb-2">Êtes-vous toujours là ?</h2>
      <p class="text-body text-medium-emphasis mb-6">
        Pour votre sécurité, nous allons vous déconnecter
      </p>

      <v-progress-circular
        :model-value="(timer / 20) * 100"
        :size="100"
        :width="8"
        color="rgb(var(--v-theme-peach))"
        class="mb-4"
      >
        <span class="text-h4">{{ timer }}</span>
      </v-progress-circular>

      <v-btn
        @click="continueBrowsing"
        color="rgb(var(--v-theme-darkbg))"
        size="large"
        block
        rounded="pill"
        style="color: white"
        class="mt-4"
      >
        On continue !
      </v-btn>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { usePingService } from '~/services/UsePingService';

const openModal = defineModel('openModal', { default: false });

const { sendLogout } = useAuthentification();
const { ping } = usePingService();

let timer = ref(20);
let intervalId: ReturnType<typeof setInterval> | null = null;

const continueBrowsing = () => {
  stopTimer();
  ping();
  timer.value = 20;
  openModal.value = false;
};

const startTimer = () => {
  stopTimer();

  intervalId = setInterval(async () => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      stopTimer();
      await sendLogout();
      ping();
      openModal.value = false;
      timer.value = 20;
    }
  }, 1000);
};

const stopTimer = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});
</script>
