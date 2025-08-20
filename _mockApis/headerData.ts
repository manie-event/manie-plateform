// project imports

import type {
  appsLinkType,
  notificationType,
  optionIcon,
  profileType,
  quickLinksType,
  searchType,
} from '@/types/HeaderTypes';
//
// Notification
//
import user1 from '/images/profile/1.jpg';
import user2 from '/images/profile/2.jpg';
import user3 from '/images/profile/3.jpg';
import user4 from '/images/profile/4.jpg';
import user5 from '/images/profile/5.jpg';

const notifications: notificationType[] = [
  {
    avatar: user1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
    time: '9.08 AM',
  },
  {
    avatar: user2,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
    time: '9.05 AM',
  },
  {
    avatar: user3,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
    time: '10.08 AM',
  },
  {
    avatar: user4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
    time: '9.00 AM',
  },
  {
    avatar: user5,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
    time: '9.08 AM',
  },
  {
    avatar: user1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
    time: '9.15 AM',
  },
];

//
// Profile
//

const professionalProfile: profileType[] = [
  {
    avatar: 'wallet-2-line-duotone',
    bgcolor: 'info',
    title: 'Mon Profil',
    subtitle: 'Votre page de profil',
    href: '/apps/userprofile/one',
    requiresProfile: false,
  },
  {
    avatar: 'wallet-2-line-duotone',
    bgcolor: 'info',
    title: 'Mon portefeuille de jeton(s)',
    subtitle: 'jeton(s)',
    href: '',
    requiresProfile: true,
  },
];

const clientProfile: profileType[] = [
  {
    avatar: 'wallet-2-line-duotone',
    bgcolor: 'info',
    title: 'Mon Profil',
    subtitle: 'Votre page de profil',
    href: '/apps/userprofile/two',
    requiresProfile: false,
  },
];

//
// Language
//

//
// AppsLink
//
import img8 from '/images/svgs/icon-dd-application.svg';
import img2 from '/images/svgs/icon-dd-cart.svg';
import img1 from '/images/svgs/icon-dd-chat.svg';
import img4 from '/images/svgs/icon-dd-date.svg';
import img3 from '/images/svgs/icon-dd-invoice.svg';
import img6 from '/images/svgs/icon-dd-lifebuoy.svg';
import img7 from '/images/svgs/icon-dd-message-box.svg';
import img5 from '/images/svgs/icon-dd-mobile.svg';
const appsLink: appsLinkType[] = [
  {
    avatar: img1,
    title: 'Chat Application',
    subtext: 'New messages arrived',
    href: '/apps/chats',
  },
  {
    avatar: img2,
    title: 'eCommerce App',
    subtext: 'learn more information',
    href: '/apps/ecommerce/productsone',
  },
  {
    avatar: img3,
    title: 'User Profile App',
    subtext: 'Get profile details',
    href: '/apps/userprofile/one',
  },
  {
    avatar: img4,
    title: 'Calendar App',
    subtext: 'Get dates',
    href: '/apps/calendar',
  },
  {
    avatar: img5,
    title: 'Contact Application',
    subtext: '2 Unsaved Contacts',
    href: '/apps/contacts',
  },
  {
    avatar: img6,
    title: 'Account Setting App',
    subtext: 'Account settings',
    href: '/theme-pages/account-settings',
  },
  {
    avatar: img7,
    title: 'Kanban App',
    subtext: 'Get the tasks',
    href: '/apps/kanban',
  },
  {
    avatar: img8,
    title: 'Notes Application',
    subtext: 'To-do and Daily tasks',
    href: '/apps/notes',
  },
];

//
// Quick Links
//
const quickLink: quickLinksType[] = [
  {
    title: 'Pricing Page',
    href: '/theme-pages/pricing',
  },
  {
    title: 'Authentication Design',
    href: '/auth/login',
  },
  {
    title: 'Register Now',
    href: '/auth/register',
  },
  {
    title: '404 Error Page',
    href: '/auth/404',
  },
  {
    title: 'Notes App',
    href: '/apps/notes',
  },
  {
    title: 'User Application',
    href: '/apps/userprofile/one',
  },
  {
    title: 'Blog Design',
    href: '/apps/blog/posts',
  },
  {
    title: 'Shopping Cart',
    href: '/apps/ecommerce/checkout',
  },
];

//
// Search Data
//
const searchSugg: searchType[] = [
  {
    title: 'Contacts',
    href: '/apps/contacts',
  },
  {
    title: 'Shop',
    href: '/apps/ecommerce/productsone',
  },
  {
    title: 'Checkout',
    href: '/apps/ecommerce/checkout',
  },
  {
    title: 'Chats',
    href: '/apps/chats',
  },
  {
    title: 'Notes',
    href: '/apps/notes',
  },
  {
    title: 'Pricing',
    href: '/theme-pages/pricing',
  },
  {
    title: 'Account Setting',
    href: '/theme-pages/account-settings',
  },
];

const optionIconData: optionIcon[] = [
  {
    title: 'Applications',
    iconcolor: 'primary',
  },
  {
    title: 'Form Options',
    iconcolor: 'error',
  },
  {
    title: 'Table Variations',
    iconcolor: 'warning',
  },
  {
    title: 'Charts Selection',
    iconcolor: 'success',
  },
  {
    title: 'Widget',
    iconcolor: 'indigo',
  },
];

export {
  appsLink,
  clientProfile,
  notifications,
  optionIconData,
  professionalProfile,
  quickLink,
  searchSugg,
};
