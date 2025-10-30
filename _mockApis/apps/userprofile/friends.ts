// project imports
import { Chance } from 'chance';
import mock from '../../mockAdapter';

import {
  default as user1,
  default as user2,
  default as user3,
  default as user4,
  default as user5,
  default as user6,
} from '@/public/images/backgrounds/flutter.png';

const chance = new Chance();

// types
export interface KeyedObject {
  [key: string]: string | number | KeyedObject | any;
}

// friends list
const friends: KeyedObject[] = [
  {
    id: '#1Friends_Barney',
    avatar: user1,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 10,
  },
  {
    id: '#2Friends_Thea',
    avatar: user2,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 89,
  },
  {
    id: '#3Friends_Guiseppe',
    avatar: user3,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 65,
  },
  {
    id: '#4Friends_Henderson',
    avatar: user4,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 1,
  },
  {
    id: '#5Friends_Maddison',
    avatar: user5,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 14,
  },
  {
    id: '#6Friends_Wilber',
    avatar: user6,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 36,
  },
  {
    id: '#7Friends_Hayden',
    avatar: user1,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 106,
  },
  {
    id: '#8Friends_Lloyd',
    avatar: user2,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 10,
  },
  {
    id: '#9Friends_Kris',
    avatar: user3,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 0,
  },
  {
    id: '#10Friends_Kyler',
    avatar: user4,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 48,
  },
  {
    id: '#11Friends_Pamela',
    avatar: user5,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 72,
  },
  {
    id: '#12Friends_Betty',
    avatar: user6,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 99,
  },
  {
    id: '#13Friends_Anthony',
    avatar: user1,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 78,
  },
  {
    id: '#14Friends_Reggie',
    avatar: user2,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 1,
  },
  {
    id: '#15Friends_Francesca',
    avatar: user3,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 68,
  },
  {
    id: '#16Friends_Carmel',
    avatar: user4,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 15,
  },
  {
    id: '#17Friends_Darwin',
    avatar: user5,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 10,
  },
  {
    id: '#18Friends_Kaylin',
    avatar: user6,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 36,
  },
  {
    id: '#19Friends_Kamryn',
    avatar: user1,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 55,
  },
  {
    id: '#20Friends_Madelyn',
    avatar: user2,
    name: chance.name(),
    location: chance.country({ full: true }),
    role: chance.profession(),
    mutual: 78,
  },
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/friends/list').reply(200, { friends });
