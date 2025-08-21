import type { EventModel } from '~/models/eventModel';

export const useEventStore = defineStore('eventStore', () => {
  const event = ref<EventModel>();

  const setEvent = (newEvent: EventModel) => {
    event.value = newEvent;
  };
  return {
    event,
    setEvent,
  };
});
