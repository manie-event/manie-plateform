interface ProductsSliderTypes {
  type: boolean;
  img: string;
  name: string;
  link: string;
}

interface UserReviewTypes {
  img: string;
  title: string;
  subtitle: string;
  review: string;
}

interface ListFeatureTypes {
  icon: any;
  title: string;
  subtitle: string;
  bgcolor: string;
}

interface DemosMegaMenuTypes {
  img: string;
  name: string;
  link: string;
}

interface AppsMegaMenuTypes {
  img: string;
  name: string;
  link: string;
}

export type {
  ProductsSliderTypes,
  UserReviewTypes,
  ListFeatureTypes,
  DemosMegaMenuTypes,
  AppsMegaMenuTypes,
};
