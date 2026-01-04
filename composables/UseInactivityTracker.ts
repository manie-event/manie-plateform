export const useInactivityTracker = () => {
  let lastActivity = Date.now();
  const openInactivityModal = ref(false);

  if (process.client) {
    const trackActivity = () => {
      lastActivity = Date.now();
    };

    window.addEventListener('mousemove', trackActivity);
    window.addEventListener('keydown', trackActivity);
    window.addEventListener('click', trackActivity);

    const intervalId = setInterval(() => {
      openInactivityModal.value = false;
      const inactiveTime = Date.now() - lastActivity;

      if (inactiveTime > 10 * 60 * 1000) {
        openInactivityModal.value = true;
        console.log('⚠️ User inactive > 15min, backend may be sleeping');
      }
    }, 60000);

    onUnmounted(() => {
      window.removeEventListener('mousemove', trackActivity);
      window.removeEventListener('keydown', trackActivity);
      window.removeEventListener('click', trackActivity);
      clearInterval(intervalId);
    });
  }
  return { openInactivityModal };
};
