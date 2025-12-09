import type { eventModelDto } from '~/models/dto/eventDto';
import type { eventModel } from '~/models/events/eventModel';

export const eventsMapper = () => {
  const mapDtoToEvent = (event: eventModelDto): eventModel => {
    return {
      type_event: event.$attributes.type_event,
      uuid: event.$attributes.uuid,
      organisatorUuid: event.$attributes.organisatorUuid,
      isAlreadyCreated: true,
      status: event.$attributes.status,
      formule: event.$attributes.formule,
      budget: event.$attributes.budget,
      location: event.$attributes.location,
      people: Number(event.$attributes.people),
      name: event.$attributes.name,
      date: event.$attributes.date,
      eventServices: event.$preloaded.eventServices,
      duration: event.$attributes.duration,
      organized_for: event.$attributes.organized_for,
      group_type: event.$attributes.group_type,
      theme: event.$attributes.theme,
    };
  };
  return {
    mapDtoToEvent,
  };
};
