import type { TablerIconComponent } from 'vue-tabler-icons';

/*Basic table 1 types*/
interface teamGroupType {
  id: string;
  color: string;
  text: string;
}
interface basicTable1 {
  avatar: string;
  name: string;
  post: string;
  pname: string;
  status: string;
  statuscolor: string;
  teams: teamGroupType[];
  budget: string;
}

/*Basic table 2 types*/
interface userGroupType {
  id: string;
  icon: string;
}
interface basicTable2 {
  avatar: string;
  name: string;
  post: string;
  status: string;
  statuscolor: string;
  users: userGroupType[];
}

/*Basic table 3 types*/
interface teamsGType {
  status: string;
  statuscolor: string;
}
interface basicTable3 {
  avatar: string;
  name: string;
  handle: string;
  status: string;
  statusoffline: boolean;
  statuscolor: string;
  email: string;
  teams: teamsGType[];
}

/*Basic table 4 types*/
interface basicTable4 {
  invoice: string;
  status: string;
  statuscolor: string;
  statusicon: TablerIconComponent;
  avatar: string;
  name: string;
  handle: string;
  progress: number;
}

/*Basic table 5 types*/
interface coursesType {
  status: string;
  statuscolor: string;
}
interface basicTable5 {
  avatar: string;
  name: string;
  handle: string;
  users: string;
  courses: coursesType[];
}

/*Dark table types*/
interface darkTeamsType {
  id: string;
  color: string;
  text: string;
}
interface tableDark {
  avatar: string;
  name: string;
  post: string;
  pname: string;
  status: string;
  statuscolor: string;
  teams: darkTeamsType[];
  budget: string;
}

/*Density table types*/
interface densUserType {
  id: string;
  icon: string;
}
interface tableDensity {
  avatar: string;
  name: string;
  post: string;
  status: string;
  statuscolor: string;
  users: densUserType[];
}

/*FixedHeader table types*/
interface fixedTeamType {
  status: string;
  statuscolor: string;
}
interface tableFixedHeader {
  avatar: string;
  name: string;
  handle: string;
  status: string;
  statusoffline: boolean;
  statuscolor: string;
  email: string;
  teams: fixedTeamType[];
}

/*Height table types*/
interface heightCourseType {
  status: string;
  statuscolor: string;
}
interface heightTable {
  avatar: string;
  name: string;
  handle: string;
  users: string;
  email: string;
  courses: heightCourseType[];
}

/*Table Action*/
interface tableAction {
  icon: TablerIconComponent;
  listtitle: string;
}

export type {
  basicTable1,
  basicTable2,
  basicTable3,
  basicTable4,
  basicTable5,
  tableDark,
  tableDensity,
  tableFixedHeader,
  heightTable,
  tableAction,
};
