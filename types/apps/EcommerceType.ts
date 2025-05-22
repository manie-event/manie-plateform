// product shop list
export interface Products {
  id: string | number | undefined;
  image: string;
  name: string;
  description?: string;
  rating?: number;
  discount?: number;
  salePrice?: number;
  offerPrice?: number;
  gender?: string;
  price?: string;
  categories?: string[];
  colors?: string[];
  popularity?: number;
  date?: number;
  created: Date;
  isStock?: boolean;
  new?: number;
  qty?: number;
  rank?: number;
}

// checkout-cart billing address
export interface Address {
  id?: string | any | Date;
  name: string;
  destination: string;
  building: string;
  city: string;
  state: string;
  phone: string;
  isDefault: boolean;
}

// product reviews list
export interface Reviews {
  id: string | number | undefined;
  rating: number;
  review: string;
  date: Date | string;
  profile: {
    avatar: string;
    name: string;
    status: boolean;
  };
}

// product shop filter
export interface ProductsFilter {
  length?: number;
  search: string;
  sort: string;
  gender: string[];
  categories: string[];
  colors: string[];
  price: string[];
  rating: number;
}

// product shop filter - sort options
export interface SortOptionsProps {
  value: string;
  label: string;
}

// product shop filter - colors options
export interface ColorsOptionsProps {
  label: string;
  value: string;
  bg: string;
}

export interface PaymentOptionsProps {
  id: number;
  value: string;
  title: string;
  caption: string;
  image: string;
  size: {
    width: number;
    height: number;
  };
}

export interface ProductStateProps {
  products?: Products[];
  cart?: Products[] | any;
  relatedProducts?: Products[];
  reviews?: Reviews[];
  addresses?: Address[];
  sortBy?: string;
  gender?: object | [] | string;
  category?: object | [] | string;
  price?: object | [] | string;
  error?: object | string | null;
  subTotal?: any;
  total?: number;
  discount?: any;
  color?: string;
  rank?: number;
}
