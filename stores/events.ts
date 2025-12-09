import type { eventModel } from '~/models/events/eventModel';

export const useEventsStore = defineStore('useEventsStore', () => {
  const events = ref<eventModel[]>([
    {
      uuid: '',
      type_event: '',
      organisatorUuid: '',
      isAlreadyCreated: false,
      status: '',
      date: ['', ''],
      budget: 0,
      formule: '',
      location: '',
      name: '',
      people: 0,
      eventServices: [],
      group_type: '',
      theme: '',
      organized_for: '',
      duration: '',
    },
  ]);
  const modifyEvent = ref<eventModel>({
    uuid: '',
    type_event: '',
    organisatorUuid: '',
    isAlreadyCreated: false,
    status: '',
    date: ['', ''],
    budget: 0,
    formule: '',
    location: '',
    name: '',
    people: 0,
    eventServices: [],
    group_type: '',
    theme: '',
    organized_for: '',
    duration: '',
  });

  const setEventsByOrganisator = (newEvents: eventModel[]) => {
    events.value = newEvents;
  };

  const setQuestionnaireAnswers = (newAnswers: eventModel) => {
    modifyEvent.value = newAnswers;
  };

  const resetOrganisatorForm = () => {
    events.value = [
      {
        uuid: '',
        type_event: '',
        organisatorUuid: '',
        isAlreadyCreated: false,
        status: '',
        date: ['', ''],
        budget: 0,
        formule: '',
        location: '',
        name: '',
        people: 0,
        eventServices: [],
        group_type: '',
        theme: '',
        organized_for: '',
        duration: '',
      },
    ];
  };

  const resetForm = () => {
    modifyEvent.value = {
      uuid: '',
      type_event: '',
      organisatorUuid: '',
      isAlreadyCreated: false,
      status: '',
      date: ['', ''],
      budget: 0,
      formule: '',
      location: '',
      name: '',
      people: 0,
      eventServices: [],
      group_type: '',
      theme: '',
      organized_for: '',
      duration: '',
    };
  };

  return {
    events,
    modifyEvent,
    setEventsByOrganisator,
    setQuestionnaireAnswers,
    resetOrganisatorForm,
    resetForm,
  };
});
