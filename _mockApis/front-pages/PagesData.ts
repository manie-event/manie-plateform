import type { FooterType, PackageType, TemplateType } from '@/types/components/front-pages/index';

const Packages: PackageType[] = [
  {
    index: 0,
    tagtext: false,
    caption: 'Booster',
    subCaption: 'booster',
    subtext:
      'Tu es charrette, tu cherches un prestataire de dernière minute qui correspond à tes critères.',
    price: '15%',
    subprice: 'du montant de la prestation retenue',
    buttontext: 'En savoir +',
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
    index: 1,
    tagtext: false,
    caption: 'Coup de pouce',
    subCaption: 'coup-de-pouce',
    subtext:
      'Tu organises ton évènement en autonomie et souhaites être accompagné(e) par un professionnel à chaque étape clé de ton projet (au moins 6 mois à l’avance)',
    price: '990€',
    buttontext: 'En savoir +',
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
    index: 2,
    tagtext: false,
    caption: 'Grande pompe',
    subCaption: 'grande-pompe',
    subtext:
      "Vous vous (re)mariez et vous souhaitez déléguer l'entièreté de l’organisation à un professionnel dédié.",
    price: '2990€',
    subprice: 'ou 400€/jour (7 jours de travail complet max)',
    buttontext: 'En savoir +',
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
    index: 3,
    tagtext: false,
    caption: 'coordination de jour-J',
    subCaption: 'coordination',
    subtext: 'Le jour J, tu souris, tu vibres, tu vis — pendant qu’on fait tourner la machine.',
    price: '990€',
    subprice: ' ou 45€/heure',
    buttontext: 'En savoir +',
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
    description: '',
    link: '/juridique/cgu',
  },
  {
    titre: 'Conditions Générales de Ventes',
    description: '',
    link: '/juridique/cgv',
  },
  {
    titre: 'Mentions légales',
    description: '',
    link: '/juridique/mentions-legales',
  },
  {
    titre: 'Politique de confidentialité',
    description: '',
    link: '/juridique/politique-de-confidentialite',
  },
  {
    titre: 'Cookies',
    description: '',
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

export { FAQData, footerContact, footerMedia, Packages };
