import { Chance } from 'chance';
import mock from '../../mockAdapter';
const chance = new Chance();
interface TicketType {
  Id?: number | any;
  ticketTitle?: string;
  ticketDescription?: string;
  Status?: string;
  Label?: string;
  thumb?: string;
  AgentName?: string;
  Date?: string | Date;
}

import user1 from '/images/profile/2.jpg';
import user2 from '/images/profile/3.jpg';
import user3 from '/images/profile/4.jpg';
import user4 from '/images/profile/5.jpg';
import user5 from '/images/profile/6.jpg';
import user6 from '/images/profile/7.jpg';
import user7 from '/images/profile/8.jpg';

const TicketData: TicketType[] = [
  {
    Id: 2,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Label: 'warning',
    thumb: user1,
    AgentName: 'Steve',
    Date: chance.date(),
  },
  {
    Id: 3,
    ticketTitle: 'Exercitationem ullam corporis',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Label: 'success',
    thumb: user2,
    AgentName: 'Jack',
    Date: chance.date(),
  },
  {
    Id: 4,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: user3,
    AgentName: 'Steve',
    Date: chance.date(),
  },
  {
    Id: 5,
    ticketTitle: 'Exercitationem ullam corporis',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: user4,
    AgentName: 'Liam',
    Date: chance.date(),
  },
  {
    Id: 6,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Label: 'warning',
    thumb: user5,
    AgentName: 'Jack',
    Date: chance.date(),
  },
  {
    Id: 7,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Label: 'success',
    thumb: user6,
    AgentName: 'Steve',
    Date: chance.date(),
  },
  {
    Id: 8,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: user7,
    AgentName: 'John',
    Date: chance.date(),
  },
];

mock.onGet('/api/data/tickets/TicketData').reply(() => {
  return [200, TicketData];
});
export default TicketData;
