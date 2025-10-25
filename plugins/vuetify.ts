import '@mdi/font/css/materialdesignicons.css';
import VueTablerIcons from 'vue-tabler-icons';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
//Mock Api data
import '@/assets/scss/style.scss';
import Maska from 'maska';
import 'vue3-carousel/dist/carousel.css';
import '../_mockApis';
// VLabs Components
import { VTimePicker } from 'vuetify/labs/VTimePicker';
import { VTreeview } from 'vuetify/labs/VTreeview';
//DragScroll
import { VueDraggableNext } from 'vue-draggable-next';

// Table
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
//LightBox
import VueEasyLightbox from 'vue-easy-lightbox';
//ScrollTop
import VueScrollTo from 'vue-scrollto';

//i18
import { DARK_BLUE_THEME } from '@/theme/DarkTheme';
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
      draggable: VueDraggableNext,
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
  nuxtApp.vueApp.component('EasyDataTable', Vue3EasyDataTable);
  nuxtApp.vueApp.use(PerfectScrollbar);
  nuxtApp.vueApp.use(VueTablerIcons);
  nuxtApp.vueApp.use(Maska);
  nuxtApp.vueApp.use(VueEasyLightbox);
  //ScrollTop Use
  nuxtApp.vueApp.use(VueScrollTo, {
    duration: 1000,
    easing: 'ease',
    offset: -50,
  });
});
