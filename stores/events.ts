import type { SectorsDto } from '~/models/dto/sectorsDto';
import type { ServicesFiltered } from '~/models/dto/serviceFiltered';
import type { eventModel } from '~/models/events/eventModel';

export const eventsStore = defineStore('eventsStore', () => {
  const events = ref<eventModel[]>([]);
  const answers = ref<eventModel>();
  const sectors = ref<SectorsDto[]>([]);
  const servicesFiltered = ref<ServicesFiltered[]>([]);

  //setters

  const setEventsByOrganisator = (newEvents: eventModel[]) => {
    events.value = newEvents;
  };

  const setQuestionnaireAnswers = (newAnswers: eventModel) => {
    answers.value = newAnswers;
  };

  const setSectors = (newSectors: SectorsDto[]) => {
    sectors.value.push(...newSectors);
  };

  const setServicesFiltered = (newServicesFiltered: ServicesFiltered[]) => {
    servicesFiltered.value.push(...newServicesFiltered);
  };

  return {
    events,
    answers,
    sectors,
    servicesFiltered,
    setEventsByOrganisator,
    setSectors,
    setServicesFiltered,
    setQuestionnaireAnswers,
  };
});
