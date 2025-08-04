<template>
  <TransitionGroup name="fade" tag="div" class="alerts-wrapper">
    <v-alert
      v-for="error in errorMessageArray"
      :key="error.id"
      class="alert-card"
      type="error"
      :text="error.message"
      dismissible
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
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.alert-card {
  max-width: 500px;
  position: relative;
  overflow: hidden;
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: rgb(255, 255, 255);
  animation: progressShrink 5s linear forwards;
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
