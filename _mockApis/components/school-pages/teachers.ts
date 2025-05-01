import mock from '../../mockAdapter';
// import type { ContactType } from '@/types/apps/ContactType';

import { default as user1, default as user7 } from '/images/profile/1.jpg';
import { default as user2, default as user8 } from '/images/profile/2.jpg';
import { default as user3, default as user9 } from '/images/profile/3.jpg';
import { default as user4 } from '/images/profile/4.jpg';
import user5 from '/images/profile/5.jpg';
import user6 from '/images/profile/6.jpg';


// types
export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

const teachers: KeyedObject[] = [
    {
        avatar: user1,
        userinfo: 'Budo Masuta',
        class:'6',
        sec:'A',
        subject:'Geography',
        bdate: '06/07/2007',
        phone: '+ 123 9988568',
        usermail: 'sparkdoe@gmail.com',
    },
    {
        avatar: user2,
        userinfo: 'Garima Singh',
        class:'5',
        sec:'B',
        subject:'Science',
        bdate: '20/10/2007',
        phone: '+ 123 9988568',
        usermail: 'ronaldosingh007@gmail.com',
    },
    {
        avatar: user3,
        userinfo: 'Inkyu Basu',
        class:'12',
        sec:'B',
        subject:'Maths',
        bdate: '12/12/2001',
        phone: '+ 123 9988568',
        usermail: 'davidzonar@gmail.com',
    },
    {
        avatar: user4,
        userinfo: 'John Deo',
        class:'12',
        sec:'C',
        subject:'Geography',
        bdate: '02/10/2001',
        phone: '+ 123 9988568',
        usermail: 'patelaleis@gmail.com',
    },
    {
        avatar: user5,
        userinfo: 'Juku Ren',
        class:'12',
        sec:'B',
        subject:'Maths',
        bdate: '12/12/2001',
        phone: '+ 123 9988568',
        usermail: 'davidzonar@gmail.com',
    },
    {
        avatar: user6,
        userinfo: 'Kuu Dere',
        class:'5',
        sec:'B',
        subject:'Science',
        bdate: '20/10/2007',
        phone: '+ 123 9988568',
        usermail: 'ronaldosingh007@gmail.com',
    },
    {
        avatar: user7,
        userinfo: 'Mai Waifu',
        class:'10',
        sec:'C',
        subject:'English',
        bdate: '26/01/2004',
        phone: '+ 123 9988568',
        usermail: 'markmaria223@gmail.com',
    },
    {
        avatar: user8,
        userinfo: 'Mark J. Freeman',
        class:'2',
        sec:'A',
        subject:'English',
        bdate: '25/01/2004',
        phone: '+ 123 9988568',
        usermail: 'kazifahim93@gmail.com',
    },
    {
        avatar: user9,
        userinfo: 'Mark Willy',
        class:'5',
        sec:'C',
        subject:'English',
        bdate: '26/01/2006',
        phone: '+ 123 9988568',
        usermail: 'jackdude224@gmail.com',
    },
    {
        avatar: user9,
        userinfo: 'Mina Rai',
        class:'5',
        sec:'B',
        subject:'English',
        bdate: '20/10/2007',
        phone: '+ 123 9988568',
        usermail: 'ronaldosingh007@gmail.com',
    },
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/contacts').reply(() => {
    return [200, teachers];
});


export default teachers;
