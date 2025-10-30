// project imports
import mock from '../../mockAdapter';
// assets
import {
  default as image1,
  default as image10,
  default as image2,
  default as image3,
  default as image4,
  default as image5,
  default as image6,
  default as image7,
  default as image8,
  default as image9,
} from '@/public/images/backgrounds/flutter.png';

import image11 from '@/public/images/backgrounds/flutter.png';

import image12 from '@/public/images/backgrounds/flutter.png';

// types
export interface KeyedObject {
  [key: string]: string | number | KeyedObject | any;
}

// gallery components

const gallery: KeyedObject[] = [
  {
    id: '#1Gallery',
    image: image1,
    title: '1080p_table_denar.pdf',
    dateTime: 'Tue Aug 24 2021',
  },
  {
    id: '#2Gallery',
    image: image2,
    title: 'handmade.mp2',
    dateTime: 'Fri Apr 30 2021',
  },
  {
    id: '#3Gallery',
    image: image3,
    title: 'granite_cheese.wav',
    dateTime: 'Fri Jun 25 2021',
  },
  {
    id: '#4Gallery',
    image: image4,
    title: 'invoice.mpg',
    dateTime: 'Sat Oct 23 2021',
  },
  {
    id: '#5Gallery',
    image: image5,
    title: 'benchmark_forge.m1v',
    dateTime: 'Fri Jan 21 2022',
  },
  {
    id: '#6Gallery',
    image: image6,
    title: 'violet_withdrawal.png',
    dateTime: 'Wed Sep 22 2021',
  },
  {
    id: '#7Gallery',
    image: image7,
    title: 'web_readiness.mpeg',
    dateTime: 'Mon Jul 12 2021',
  },
  {
    id: '#8Gallery',
    image: image8,
    title: 'zimbabwe.htm',
    dateTime: 'Sat Mar 20 2021',
  },
  {
    id: '#9Gallery',
    image: image9,
    title: 'circuit.m3a',
    dateTime: 'Tue Jan 18 2022',
  },
  {
    id: '#10Gallery',
    image: image10,
    title: 'data_red.png',
    dateTime: 'Sun Apr 04 2021',
  },
  {
    id: '#11Gallery',
    image: image11,
    title: 'handcrafted.html',
    dateTime: 'Tue May 25 2021',
  },
  {
    id: '#12Gallery',
    image: image12,
    title: 'hacking_games.pdf',
    dateTime: 'Tue Oct 19 2021',
  },
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/gallery/list').reply(200, { gallery });
