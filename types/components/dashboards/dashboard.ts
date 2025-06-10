import type { TablerIconComponent } from 'vue-tabler-icons';

interface textCards {
  icon: string;
  num: string;
  percent: string;
  title: string;
  shape: string;
}

interface profileImg {
  img: string;
}

interface projectTable {
  img: string;
  activestate: string;
  leadname: string;
  leademail: string;
  projectname: string;
  statuscolor: string;
  statustext: string;
  skill: string;
}

interface ProductTable {
  img: string;
  name: string;
  payment: string;
  paymentstatus: string;
  process: number;
  processcolor: string;
  statuscolor: string;
  statustext: string;
}

/*Table Action*/
interface tableAction {
  icon: TablerIconComponent;
  listtitle: string;
}

interface LatestReview {
  img: string;
  name: string;
  profile: string;
  customername: string;
  customeremail: string;
  review: number;
  reviewtext: string;
  statuscolor: string;
  statustext: string;
  time: string;
}

export type { textCards, profileImg, projectTable, ProductTable, tableAction, LatestReview };
