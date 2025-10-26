import type {
  Feature,
  FooterType,
  LeaderType,
  PackageType,
  TemplateType,
  ThemeFeatures,
} from '@/types/components/front-pages/index';
import type { faqPageType } from '@/types/components/pages/faqData';

import review1 from '/images/profile/1.jpg';
import review2 from '/images/profile/2.jpg';
import review3 from '/images/profile/3.jpg';

const Features: Feature[] = [
  {
    icon: 'tabler:chart-bubble',
    title: 'Expert Advisor',
    subtitle: 'Suspendisse vestibulum eu erat ac scelerisque.',
    bgcolor: 'lighterror',
    color: 'error',
  },
  {
    icon: 'tabler:building-store',
    title: 'Effective Support',
    subtitle: 'Suspendisse vestibulum eu erat ac scelerisque.',
    bgcolor: 'lightprimary',
    color: 'primary',
  },
  {
    icon: 'material-symbols:category-outline',
    title: 'Low Fees',
    subtitle: 'Suspendisse vestibulum eu erat ac scelerisque.',
    bgcolor: 'lightsuccess',
    color: 'success',
  },
  {
    icon: 'material-symbols:earthquake',
    title: 'Loan Facility',
    subtitle: 'Suspendisse vestibulum eu erat ac scelerisque.',
    bgcolor: 'grey100',
    color: 'dark ',
  },
];

const AboutFeatures: Feature[] = [
  {
    icon: 'tabler:building-store',
    title: 'Effective Support',
    subtitle: 'Suspendisse vestibulum eu erat ac scelerisque.',
    bgcolor: 'lightprimary',
    color: 'primary',
  },
  {
    icon: 'tabler:chart-bubble',
    title: 'Expert Advisor',
    subtitle: 'Suspendisse vestibulum eu erat ac scelerisque.',
    bgcolor: 'lighterror',
    color: 'error',
  },
  {
    icon: 'material-symbols:category-outline',
    title: 'Low Fees',
    subtitle: 'Suspendisse vestibulum eu erat ac scelerisque.',
    bgcolor: 'lightsuccess',
    color: 'success',
  },
  {
    icon: 'material-symbols:earthquake',
    title: 'Loan Facility',
    subtitle: 'Suspendisse vestibulum eu erat ac scelerisque.',
    bgcolor: 'bglight',
    color: 'bgdark ',
  },
];

const QA1: faqPageType[] = [
  {
    question: 'Combine teammate schedules',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
  {
    question: 'Factor in outside colleagues',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
  {
    question: 'Round robin pooling',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
];
const QA2: faqPageType[] = [
  {
    question: 'Combine teammate schedules 2',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
  {
    question: 'Factor in outside colleagues',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
  {
    question: 'Round robin pooling',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
];
const QA3: faqPageType[] = [
  {
    question: 'Combine teammate schedules 3',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
  {
    question: 'Factor in outside colleagues',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
  {
    question: 'Round robin pooling',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
];

const QA4: faqPageType[] = [
  {
    question: 'Combine teammate schedules 4',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
  {
    question: 'Factor in outside colleagues',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
  {
    question: 'Round robin pooling',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
];
const QA5: faqPageType[] = [
  {
    question: 'Combine teammate schedules 4',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
  {
    question: 'Factor in outside colleagues',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
  {
    question: 'Round robin pooling',
    answer:
      'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.',
  },
];

// OurLeaders
import type { UserReviewTypes } from '@/types/landingpage/LandingpageTypes';
import {
  AdjustmentsIcon,
  ArchiveIcon,
  ArrowsShuffleIcon,
  BookIcon,
  BuildingCarouselIcon,
  CalendarIcon,
  ChartPieIcon,
  DatabaseIcon,
  DiamondIcon,
  LanguageKatakanaIcon,
  LayersIntersectIcon,
  MessageIcon,
  RefreshIcon,
  ShieldLockIcon,
  TagIcon,
  WandIcon,
} from 'vue-tabler-icons';
import leader1 from '/images/front-pages/leaders/leader1.png';
import leader2 from '/images/front-pages/leaders/leader2.png';
import leader3 from '/images/front-pages/leaders/leader3.png';
import leader4 from '/images/front-pages/leaders/leader4.png';
const OurLeaders: LeaderType[] = [
  {
    img: leader1,
    name: 'Alex Martinez',
    position: 'CEO & Co-Founder',
  },
  {
    img: leader2,
    name: 'Jordan Nguyen',
    position: 'CTO & Co-Founder',
  },
  {
    img: leader3,
    name: 'Taylor Roberts',
    position: 'Product Manager',
  },
  {
    img: leader4,
    name: 'Morgan Patel',
    position: 'Lead Developer',
  },
];

const templateText: TemplateType[] = [
  {
    title: 'High Customizability',
    subtitle:
      'Tailor the dashboard to your exact needs. Customize layouts, color schemes, and widgets effortlessly for a personalized user experience.',
  },
  {
    title: 'Powerful Data Analytics',
    subtitle:
      ' Unlock the true potential of your data with our advanced analytics tools. Gain valuable insights and make data-driven decisions with ease.',
  },
  {
    title: 'Interactive Graphs & Charts',
    subtitle:
      'Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis.',
  },
];

const ThemeFeature1: ThemeFeatures[] = [
  {
    icon: WandIcon,
    title: '6 Theme Colors',
    color: 'primary',
  },
  {
    icon: ShieldLockIcon,
    title: 'Authguard',
    color: 'secondary',
  },
  {
    icon: ArchiveIcon,
    title: '65+ Page Templates',
    color: 'error',
  },
  {
    icon: AdjustmentsIcon,
    title: '45+ UI Components',
    color: 'success',
  },
  {
    icon: TagIcon,
    title: 'Vuetify',
    color: 'info',
  },
  {
    icon: DiamondIcon,
    title: '3400+ Font Icons',
    color: 'warning',
  },
];
const ThemeFeature2: ThemeFeatures[] = [
  {
    icon: DatabaseIcon,
    title: 'Axios',
    color: 'success',
  },
  {
    icon: LanguageKatakanaIcon,
    title: 'i18n Vue',
    color: 'error',
  },
  {
    icon: BuildingCarouselIcon,
    title: 'Vue3 Carousel',
    color: 'warning',
  },
  {
    icon: ArrowsShuffleIcon,
    title: 'Easy to Customize',
    color: 'primary',
  },
];
const ThemeFeature3: ThemeFeatures[] = [
  {
    icon: ChartPieIcon,
    title: 'Lots of Chart Options',
    color: 'secondary',
  },
  {
    icon: LayersIntersectIcon,
    title: 'Lots of Table Examples',
    color: 'info',
  },
  {
    icon: RefreshIcon,
    title: 'Regular Updates',
    color: 'error',
  },
  {
    icon: BookIcon,
    title: 'Detailed Documentation',
    color: 'warning',
  },
  {
    icon: CalendarIcon,
    title: 'Calendar Design',
    color: 'success',
  },
  {
    icon: MessageIcon,
    title: 'Dedicated Support',
    color: 'info',
  },
];

const Packages: PackageType[] = [
  {
    tagtext: false,
    caption: 'Booster',
    subtext:
      'Tu es charrette, tu cherches un prestataire de dernière minute qui correspond à tes critères.',
    price: '15%',
    subprice: 'du montant de la prestation retenue',
    buttontext: "J'essaie !",
    url: '/',
    list: [
      // {
      //   listtitle: 'Formule Gratuite',
      //   status: false,
      //   icon: true,
      //   disable: false,
      // },
      {
        listtitle:
          '<b>On vous présente 2 prestataires sous 2 semaines.</b> <br><br> Vous n’avez plus qu’à choisir celui qui correspond le plus à votre projet. <br><br> La seule condition : <br> Minimum 1 mois avant l’évènement ! ',
        status: false,
        icon: true,
        disable: false,
      },
    ],
  },
  {
    tagtext: false,
    caption: 'Coup de pouce',
    subtext:
      'Tu organises ton évènement en autonomie et souhaites être accompagné(e) par un professionnel à chaque étape clé de ton projet (au moins 6 mois à l’avance)',
    price: '990€',
    buttontext: "J'essaie !",
    url: '/',
    list: [
      // {
      //   listtitle: 'Formule Gratuite',
      //   status: false,
      //   icon: true,
      //   disable: false,
      // },
      {
        listtitle:
          'RDV découverte : <br> Cahier des charges (attentes et priorités) <br> Budget prévisionnel',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          'RDV de point d’étape : Choix des prestataires <br> Ajustements du rétro-planning <br> Document techniques lieu (accès, parking, plan fluides, plan techniques) ',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          'RDV avant jour-J : <br> Point sur les documents supports : <br> planning détaillé, déroulé prestataires, plan de table, menu, plans techniques, installation, contacts',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          '<b><u>Option</u></b> : Conversation Whatsapp dédié pour toutes questions 5/7J réponse sous 24h jours ouvrés (49€/mois) ',
        status: false,
        icon: true,
        disable: false,
      },
    ],
  },
  {
    tagtext: true,
    caption: 'Grande pompe',
    subtext:
      "Vous vous (re)mariez et vous souhaitez déléguer l'entièreté de l’organisation à un professionnel dédié.",
    price: '2990€',
    subprice: 'ou 400€/jour (7 jours de travail complet max)',
    buttontext: "J'essaie !",
    url: '/',
    list: [
      {
        listtitle:
          'RDV découverte : <br> Cahier des charges (attentes et priorités) <br> Budget prévisionnel <br>Rétro-planning général (points, réunions, échéances) ',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle: 'Recherche de prestataires',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle: 'Accompagnement visio sur RDV prestataires',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle: 'Analyse des devis, négociation',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          'Rdv point d’étape : <br> bilan, ajustements, mise à jour du planning, réponse aux questions',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle: 'Repérage des lieux (accès, parking, plan fluides, techniques)',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          'Rdv avant jour J : <br> Présentation des doc supports : planning détaillé, déroulé prestataires, plan de table, menu, plans techniques, installation, contacts',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle: 'Dernier point prestataires: <br> Derniers ajustement des docs supports',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle: 'Création du dossier final',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          'Conversation Whatsapp dédié pour toutes questions 5/7J réponse sous 24h jours ouvrés',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle: '<b><u>Option</u></b> : coordination (+990)',
        status: false,
        icon: true,
        disable: false,
      },
    ],
  },
  {
    tagtext: false,
    caption: 'coordination de jour-J',
    subtext: 'Le jour J, tu souris, tu vibres, tu vis — pendant qu’on fait tourner la machine.',
    price: '990€',
    subprice: ' ou 45€/heure',
    buttontext: "J'essaie !",
    url: '/',
    list: [
      {
        listtitle:
          '<b>Avant :</b> <br> - Rdv client M-2 + J-7 <br> - Contact du lieu ou visite <br> - Visio prestataires pour point <br> - Création planning (déroulé, interventions, surprises) <br> - Création annuaire d’urgence (contacts) <br> - Création feuille de route presta <br> - Agencement d’espace (plan lieu) <br> - Menu traiteur et boissons <br> - Rassemblement des devis presta',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          '<b>Pendant :</b> <br> - Présence des préparatifs à l’ouverture de bal ou au service du gâteau (8h-23h) <br> - Supervision des installations <br> - Accueil des invités <br> - Gestion des prestataires <br> - Interlocuteur principal des témoins et de la famille (mariage) <br> - Gestion des imprévus ',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          '<b> Ce qui peut faire varier ce devis :</b> <br> - + 200 invités (assistant)> <br> - heures supplémentaires> <br> - Présence brunch du lendemain> <br> - Frais annexes : restauration, déplacement, hébergement> <br> - complexité logistique (assistant)',
        status: false,
        icon: true,
        disable: false,
      },
    ],
  },
];

const FAQData: TemplateType[] = [
  {
    title: 'Charte de bonne conduite',
    subtitle:
      'Tailor the dashboard to your exact needs. Customize layouts, color schemes, and widgets effortlessly for a personalized user experience.',
  },
];

const footerContact: FooterType[] = [
  {
    titre: "Conditions Générales d'utilisation",
    description: 'Manie Event',
    link: '/juridique/cgu',
  },
  {
    titre: 'Conditions Générales de Ventes',
    description: '84933539300013',
    link: '/juridique/cgv',
  },
  {
    titre: 'Mentions légales',
    description: '69007 Lyon, France',
    link: '/juridique/mentions-legales',
  },
  {
    titre: 'Politique de confidentialité',
    description: '69007 Lyon, France',
    link: '/juridique/politique-de-confidentialite',
  },
  {
    titre: 'Cookies',
    description: '69007 Lyon, France',
    link: '/juridique/cookies',
  },
];

const footerMedia: FooterType[] = [
  {
    titre: 'Adresse mail',
    description: 'contact@manie-event.fr',
    link: '/front-pages/Contact-us.vue',
  },
];

const userReviewFrront: UserReviewTypes[] = [
  {
    img: review1,
    title: 'Jenny Wilson',
    subtitle: 'CEO & Head of Comp Inc.',
    review:
      'This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!',
  },
  {
    img: review2,
    title: 'Josh Cui',
    subtitle: 'CEO & Head of Comp Inc.',
    review:
      'This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!',
  },
  {
    img: review3,
    title: 'Eminson Mendoza',
    subtitle: 'CEO & Head of Comp Inc.',
    review:
      'This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!',
  },
];
export {
  AboutFeatures,
  FAQData,
  Features,
  footerContact,
  footerMedia,
  OurLeaders,
  Packages,
  QA1,
  QA2,
  QA3,
  QA4,
  templateText,
  ThemeFeature1,
  ThemeFeature2,
  ThemeFeature3,
  userReviewFrront,
};
