import type { TablerIconComponent } from 'vue-tabler-icons';
interface LeaderType {
  img: string;
  name: string;
  position: string;
}
interface TemplateType {
  title: string;
  subtitle: string;
}

interface UserReviews {
  img: string;
  title: string;
  review: string;
}

interface ThemeFeatures {
  icon: any;
  title: string;
  color: string;
}

interface PackagesPriceType {
  listtitle: string;
  status: boolean;
  icon: boolean;
  disable: boolean;
}

interface PackageType {
  caption: string;
  subtext: string;
  price: number;
  period: string;
  buttontext: string;
  url: string;
  tagtext: boolean;
  list: PackagesPriceType[];
}

interface FooterType {
  menu: string;
  link: string;
}

interface Feature {
  icon: string;
  title: string;
  subtitle: string;
  bgcolor: string;
  color: string;
}

export type {
  LeaderType,
  TemplateType,
  UserReviews,
  ThemeFeatures,
  PackageType,
  FooterType,
  Feature,
};
