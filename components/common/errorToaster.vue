<template>
  <TransitionGroup name="fade" tag="div" class="alerts-wrapper">
    <v-alert
      v-for="error in errorMessageArray"
      :key="error.id"
      class="alert-card"
      :text="error.message"
    >
      <div class="progress-bar" />
    </v-alert>
  </TransitionGroup>
</template>
<script setup lang="ts">
const { errorMessageArray } = useToaster();
</script>
<style>
.alerts-wrapper {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.alert-card {
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--v-theme-spritz));
  color: rgb(var(--v-theme-containerBg));
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: rgb(255, 255, 255);
  animation: progressShrink 10s linear forwards;
}

@keyframes progressShrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
