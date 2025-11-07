import type { DemosMegaMenuTypes } from '@/types/landingpage/LandingpageTypes';

import {
  default as img1,
  default as img2,
  default as img3,
  default as img4,
  default as img5,
} from '@/public/images/backgrounds/flutter.png';

/*Feature Section*/
/*import tabler icons*/
import {
  default as frnt2,
  default as frnt3,
  default as frnt4,
} from '@/public/images/backgrounds/flutter.png';

/*Demos Megamenu*/
const demosMegamenu: DemosMegaMenuTypes[] = [
  {
    img: img1,
    name: 'Main',
    link: 'https://spike-nuxtjs-pro-main.netlify.app/dashboards/dashboard1',
  },
  {
    img: img2,
    name: 'Dark',
    link: 'https://spike-nuxtjs-pro-dark.netlify.app/dashboards/dashboard1',
  },
  {
    img: img3,
    name: 'Horizontal',
    link: 'https://spike-nuxtjs-pro-horizontal.netlify.app/dashboards/dashboard1',
  },
  {
    img: img4,
    name: 'Minisidebar',
    link: 'https://spike-nuxtjs-pro-minisidebar.netlify.app/dashboards/dashboard1',
  },
  {
    img: img5,
    name: 'RTL',
    link: 'https://spike-nuxtjs-pro-rtl.netlify.app/dashboards/dashboard1',
  },
];

const FrontPageMenu: DemosMegaMenuTypes[] = [
  {
    img: frnt2,
    name: 'Notre Histoire',
    link: '/front-pages/Notre-histoire',
  },

  {
    img: frnt3,
    name: 'Nos Engagements',
    link: '/front-pages/Nos-engagements',
  },
  {
    img: frnt4,
    name: 'Notre terrain De Jeu',
    link: '/front-pages/Notre-zone-de-jeu',
  },
];

export { demosMegamenu, FrontPageMenu };
