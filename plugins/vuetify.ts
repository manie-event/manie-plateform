// import '@/assets/scss/_variables.scss';
import { defineNuxtPlugin } from 'nuxt/app';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

//Mock Api data
// VLabs Components
//DragScroll

// Table
//LightBox
//ScrollTop

//i18
import { DARK_BLUE_THEME } from '@/theme/DarkTheme';
import { BLUE_THEME } from '@/theme/LightTheme';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      ...components,
    },
    directives,
    theme: {
      defaultTheme: 'BLUE_THEME',
      themes: {
        BLUE_THEME,
        DARK_BLUE_THEME,
      },
    },
    defaults: {
      VCard: {
        rounded: 'xl',
        elevation: 10,
      },
      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
      },
      VTextarea: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
      },
      VSelect: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
      },
      VListItem: {
        minHeight: '45px',
      },
      VTooltip: {
        location: 'top',
      },
      VBtn: {
        style: 'text-transform: unset; letter-spacing:0',
        rounded: 'md',
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
