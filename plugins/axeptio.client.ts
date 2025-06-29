// plugins/axeptio.client.ts

declare global {
  interface Window {
    _axcb?: Array<Function>;
    axeptioSettings?: any;
  }
}

export default defineNuxtPlugin(() => {
  console.log(process.client, 'Axeptio plugin loaded');

  if (process.client) {
    window.axeptioSettings = {
      clientId: '686108f9a119f7b9dd0ebf47',
      cookiesVersion: 'manie-event-fr-EU',
    };

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
