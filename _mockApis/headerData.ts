// project imports

import type { profileType } from '@/types/HeaderTypes';

const professionalProfile: profileType[] = [
  {
    avatar: 'meditation-round-bold-duotone',
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

const clientMenu: profileType[] = [
  {
    avatar: 'wallet-2-line-duotone',
    bgcolor: 'info',
    title: 'Mon Profil',
    subtitle: 'Votre page de profil',
    href: '/apps/userprofile/two',
    requiresProfile: false,
  },
];

export { clientMenu, professionalProfile };
