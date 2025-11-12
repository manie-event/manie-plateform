// project imports

import type { profileType } from '@/types/HeaderTypes';

const appsLink = [
  {
    title: 'prout',
    subtitle: 'sous-prout',
  },
  {
    title: 'prout2',
    subtitle: 'sous-prout2',
  },
  {
    title: 'prout3',
    subtitle: 'sous-prout3',
  },
];

const professionalProfile: profileType[] = [
  {
    avatar: 'meditation-round-bold-duotone',
    bgcolor: 'info',
    title: 'Mon Profil',
    subtitle: '',
    href: '/apps/userprofile/one',
    requiresProfile: false,
  },
  {
    avatar: 'wallet-2-line-duotone',
    bgcolor: 'info',
    title: 'Portefeuille',
    subtitle: 'jeton(s)',
    href: '',
    requiresProfile: true,
  },
];

const clientMenu: profileType[] = [
  {
    avatar: 'wallet-2-line-duotone',
    bgcolor: 'info',
    title: 'Mon Profil',
    subtitle: '',
    href: '/apps/userprofile/two',
    requiresProfile: false,
  },
];

export { appsLink, clientMenu, professionalProfile };
