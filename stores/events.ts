import type { eventModel } from '~/models/events/eventModel';

export const eventsStore = defineStore('eventsStore', () => {
  const events = ref<eventModel[]>([]);

  //setters

  const setEventsByOrganisator = (newEvents: eventModel[]) => {
    events.value = newEvents;
    console.log(events.value, 'EVENTS');
  };
  return { events, setEventsByOrganisator };
});
