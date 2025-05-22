import type { TablerIconComponent } from 'vue-tabler-icons';
interface listPriceType {
  icon: TablerIconComponent;
  iconcolor: string;
  listtitle: string;
  status: boolean;
}
interface pricingType {
  caption: string;
  image: string;
  free: boolean;
  buttontext: string;
  tagtext: boolean;
  price: number;
  yearlyprice: number;
  list: listPriceType[];
}
export type { pricingType };
