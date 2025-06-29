// plugins/axeptio.client.ts

declare global {
  interface Window {
    _axcb?: Array<Function>;
    axeptioSettings?: any;
  }
}

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.axeptioSettings = {
      clientId: '686126994eb77dfa7b2677d4',
      cookiesVersion: 'manie-events-fr-EU',
      googleConsentMode: {
        default: {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          wait_for_update: 500,
        },
      },
    };

    console.log('Axeptio settings définis :', window.axeptioSettings);

    // Axeptio callback setup
    if (typeof window._axcb === 'undefined') {
      window._axcb = [];
    }

    window._axcb.push(function (axeptio: {
      on: (arg0: string, arg1: (choices: any) => void) => void;
    }) {
      axeptio.on('cookies:complete', function (choices) {
        console.log('Consentement reçu :', choices);
        // → Tu peux ici déclencher des scripts comme Google Analytics si accepté
      });
    });

    // Charger le SDK
    const script = document.createElement('script');
    script.src = 'https://static.axept.io/sdk.js';
    script.async = true;
    document.head.appendChild(script);
  }
  console.log('Axeptio plugin initialized');
});
