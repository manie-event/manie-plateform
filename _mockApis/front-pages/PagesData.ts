import type { FooterType, PackageType, TemplateType } from '@/types/components/front-pages/index';

const Packages: PackageType[] = [
  {
    index: 0,
    tagtext: false,
    caption: 'Booster',
    subCaption: 'booster',
    subtext:
      'Vous êtes charette et vous cherchez un prestataire de dernière minute qui correspond à vos critères. ',
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
          ' La seule condition : Minimum 1 mois avant l’évènement ! <br>On vous présente 2 prestataires sous 2 semaines. <br> Vous n’avez plus qu’à choisir celui qui correspond le plus à votre projet. ',
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
      'Vous souhaitez garder la main et être accompagné(e) à chaque étape clé de votre projet.',
    price: '490€',
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
          '<b>RDV découverte :</b> Cahier des charges (attentes et priorités) <br> Budget prévisionnel',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          '<b>RDV de point d’étape :</b> <br> Choix des prestataires <br> Ajustements du rétro-planning <br> Document techniques lieu (accès, parking, plan fluides, plan techniques) ',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          '<b>RDV avant jour-J :</b> <br> Point sur les documents supports : <br> planning détaillé, déroulé prestataires, plan de table, menu, plans techniques, installation, contacts',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          'Conversation Whatsapp dédié pour toutes questions 5/7J réponse sous 24h jours ouvrés (49€/mois) ',
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
      'Vous souhaitez une prise en charge complète de ce jour mémorable par un professionnel. ',
    price: '2990€',
    subprice: '',
    buttontext: 'En savoir +',
    url: '/',
    list: [
      {
        listtitle:
          '<b>RDV DÉCOUVERTE :</b> <br> Création du cahier des charges (attentes et priorités) <br> Budget prévisionnel <br>Rétro-planning général (points, réunions, échéances) ',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          '<b>RECHERCHE DE PRESTATAIRES:</b> <br> Accompagnement visio sur RDV prestataires <br> Analyse des devis, négociation',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          '<b>RDV POINT D’ÉTAPE:</b> <br> Présentation des prestataires <br> Ajustement du cahier des charges <br> Mise à jour des documents de suivi <br> Réponse aux questions',
        status: false,
        icon: true,
        disable: false,
      },
      // {
      //   listtitle:
      //     'Repérage des lieux <br> Rdv visio prestataires <br> Signature des contrats <br> Gestion des dépenses'
      //   status: false,
      //   icon: true,
      //   disable: false,
      // },
      // {
      //   listtitle:
      //     'Présentation des documents supports : <br> planning détaillé, déroulé prestataires, plan de table, menu, plans techniques, plan installation, contacts',
      //   status: false,
      //   icon: true,
      //   disable: false,
      // },
      // {
      //   listtitle: 'Repérage des lieux (accès, parking, plan fluides, techniques)',
      //   status: false,
      //   icon: true,
      //   disable: false,
      // },
      {
        listtitle:
          '<b>RDV AVANT JOUR-J</b> : <br> Présentation des doc supports : planning détaillé, déroulé prestataires, plan de table, menu, plans techniques, installation, contacts',
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          '<b>LOGISTIQUE:</b> <br>Repérage des lieux <br> Rdv visio prestataires <br> Signature des contrats <br> Gestion des dépenses <br> Point final prestataires <br> Derniers ajustements des docs supports <br> Création du dossier final client et prestataire <br>',
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
        listtitle: '<b><u>Option</u></b> : coordination (+990 €)',
        status: false,
        icon: true,
        disable: false,
      },
    ],
  },
  {
    index: 3,
    tagtext: false,
    caption: 'coordination',
    subCaption: 'coordination de jour-J',
    subtext: 'Vous profitez de votre jour-J pendant qu’on fait tourner la machine.',
    price: '990€',
    subprice: '',
    buttontext: 'En savoir +',
    url: '/',
    list: [
      {
        listtitle:
          "<b>AVANT L'EVENEMENT:</b><br> - Rdv client à M-2 et J-7 <br> - Repérage du lieu <br> - Point visio générale prestataires <br> - Création du planning <br> - Annuaire de contacts <br> - Feuille de route prestataires <br> - Plan d’agencement des espaces <br> - Menu et signalétique <br> - Dossier final client et prestataires",
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          "<b>PENDANT L'EVENEMENT :</b> <br> - Présence sur place <br> - Accueil des prestataires sur site <br> - Supervision des installations <br> - Accueil des invités <br> - Gestion des prestataires <br> - Interlocuteur principal <br> - Gestion des imprévus",
        status: false,
        icon: true,
        disable: false,
      },
      {
        listtitle:
          '<b>VARIATIONS EVENTUELLES :</b> <br> - + 200 invités (assistant) <br> - heures supplémentaires <br> - Présence brunch du lendemain ou welcome dinner <br> - Frais annexes : restauration, déplacement, hébergement <br> - complexité logistique (assistant)',
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
    titre: 'Manie Coop - SASU',
    description: '',
    link: undefined,
  },
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
    titre: 'Mentions légales générales',
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
