export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    window.axeptioSettings = {
      clientId: '686108f9a119f7b9dd0ebf47',
      cookiesVersion: 'manie-event-fr-EU',
    };

    const script = document.createElement('script');
    script.src = 'https://static.axept.io/sdk.js';
    script.async = true;
    document.head.appendChild(script);
  }
});
