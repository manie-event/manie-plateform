import type { eventModel } from '~/models/events/eventModel';

export const eventsStore = defineStore('eventsStore', () => {
  const events = ref<eventModel[]>([]);
  const answers = ref<eventModel>();

  const setEventsByOrganisator = (newEvents: eventModel[]) => {
    events.value = newEvents;
  };

  const setQuestionnaireAnswers = (newAnswers: eventModel) => {
    answers.value = newAnswers;
  };

  return {
    events,
    answers,
    setEventsByOrganisator,
    setQuestionnaireAnswers,
  };
});
