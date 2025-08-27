import type { eventModelDto } from '~/models/dto/eventModel';
import type { eventModel } from '~/models/events/eventModel';

export const eventsMapper = () => {
  const mapDtoToEvent = (event: eventModelDto): eventModel => {
    return {
      uuid: event.uuid,
      organisatorUuid: event.organisatorUuid,
      isAlreadyCreated: true,
      status: event.status,
      budget: event.budget,
      location: event.location,
      people: event.people,
      name: event.name,
      date: event.date,
      eventServices: event.eventServices,
    };
  };

  return { mapDtoToEvent };
};
