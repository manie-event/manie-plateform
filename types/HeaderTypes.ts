import type { TablerIconComponent } from 'vue-tabler-icons';

interface notificationType {
  avatar: string;
  title: string;
  subtitle: string;
  time: string;
}

interface profileType {
  avatar: string;
  bgcolor: string;
  title: string;
  subtitle: string;
  href: string;
}

interface languageType {
  avatar: string;
  title: string;
  subtext: string;
  value: string;
}

interface appsLinkType {
  avatar: string;
  title: string;
  subtext: string;
  href: string;
}

interface quickLinksType {
  title: string;
  href: string;
}

interface searchType {
  title: string;
  href: string;
}

interface optionIcon {
  title: string;
  iconcolor: string;
}

export type {
  notificationType,
  profileType,
  languageType,
  appsLinkType,
  quickLinksType,
  searchType,
  optionIcon,
};
