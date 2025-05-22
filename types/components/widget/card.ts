import type { TablerIconComponent } from 'vue-tabler-icons';

/*Card types*/
interface cardsType {
  avatar: string;
  coveravatar: string;
  read: string;
  title: string;
  link: string;
  category: string;
  name: string;
  view: string;
  comments: string;
  time: string;
}

/*Follow card types*/
interface followCard {
  title: string;
  location: string;
  avatar: string;
}

/*Music card types*/
interface musicCards {
  title: string;
  subheader: string;
  img: string;
}

/*Products card types*/
interface productsCards {
  title: string;
  link: string;
  photo: string;
  salesPrice: number;
  price: number;
  rating: number;
}

/*Social Icon card types*/
interface socialiconCards {
  name: string;
  icon: TablerIconComponent;
  color: string;
}

/*Profile card types*/
interface profileCard {
  title: string;
  subtitle: string;
  avatar: string;
}

/*Upcomming List card types*/
interface upcommingLists {
  icon: TablerIconComponent;
  title: string;
  subtitle: string;
  rank: string;
  bgcolor: string;
}

/*User card types*/
interface userGroupType {
  icon: string;
}
interface userCard {
  title: string;
  subtitle: string;
  avatar: string;
  userGroup: userGroupType[];
}

/*Payment Gatway*/
interface paymentGateway {
  img: string;
  title: string;
  subtitle: string;
  rank: string;
  disable: string;
  bgcolor: string;
}

/*Recent transaction*/
interface recentTrans {
  title: string;
  subtitle: string;
  textcolor: string;
  boldtext: boolean;
  line: boolean;
  link: string;
  url: string;
}

/*background icon  card*/
interface backIcon {
  color: string;
  icon: TablerIconComponent;
  title: string;
  subtitle: string;
}

/*image card*/
interface imgCard {
  image: string;
  color: string;
}

/*Top Cards*/
interface topCards {
  link: string;
  img: string;
  title: string;
  number: string;
  bgcolor: string;
  textcolor: string;
}

export type {
  cardsType,
  followCard,
  musicCards,
  productsCards,
  socialiconCards,
  profileCard,
  upcommingLists,
  userCard,
  paymentGateway,
  recentTrans,
  backIcon,
  imgCard,
  topCards,
};
