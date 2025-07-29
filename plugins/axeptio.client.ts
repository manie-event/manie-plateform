// plugins/axeptio.client.ts

declare global {
  interface Window {
    _axcb?: Array<Function>;
    axeptioSettings?: any;
  }
}

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const { setUserAccepted } = useUserStore();

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

    if (typeof window._axcb === 'undefined') {
      window._axcb = [];
    }

    window._axcb.push(function (axeptio: {
      on: (arg0: string, arg1: (choices: any) => void) => void;
    }) {
      axeptio.on('cookies:complete', (choices) => {
        const services = choices?.auth || [];

        setUserAccepted(services);
      });
    });

    const script = document.createElement('script');
    script.src = 'https://static.axept.io/sdk.js';
    script.async = true;
    document.head.appendChild(script);
  }
});
