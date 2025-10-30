import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
//Mock Api data
// VLabs Components
import { VTimePicker } from 'vuetify/labs/VTimePicker';
import { VTreeview } from 'vuetify/labs/VTreeview';
//DragScroll

// Table
//LightBox
//ScrollTop

//i18
import {
  DARK_AQUA_THEME,
  DARK_BLUE_THEME,
  DARK_CYAN_THEME,
  DARK_GREEN_THEME,
  DARK_ORANGE_THEME,
  DARK_PURPLE_THEME,
} from '@/theme/DarkTheme';
import {
  AQUA_THEME,
  BLUE_THEME,
  CYAN_THEME,
  GREEN_THEME,
  ORANGE_THEME,
  PURPLE_THEME,
} from '@/theme/LightTheme';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      ...components,
      VTimePicker,
      VTreeview,
    },
    directives,
    theme: {
      defaultTheme: 'BLUE_THEME',
      themes: {
        BLUE_THEME,
        AQUA_THEME,
        PURPLE_THEME,
        GREEN_THEME,
        CYAN_THEME,
        ORANGE_THEME,
        DARK_BLUE_THEME,
        DARK_AQUA_THEME,
        DARK_ORANGE_THEME,
        DARK_PURPLE_THEME,
        DARK_GREEN_THEME,
        DARK_CYAN_THEME,
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
