import type { eventModel } from '~/models/events/eventModel';

export const useEventsStore = defineStore('useEventsStore', () => {
  const events = ref<eventModel[]>([]);
  const event = ref<eventModel>({
    uuid: '',
    type_event: '',
    organisatorUuid: '',
    isAlreadyCreated: false,
    status: '',
    date: ['', ''],
    budget: 0,
    formule: '',
    location: 'Auvergne-Rhône-Alpes',
    name: '',
    people: 0,
    group_type: '',
    theme: '',
    eventServices: [
      {
        sectorName: "Veuillez choisir votre secteur d'activité",
        serviceUuid: '',
        keywordsUuid: [],
        uuid: '',
        eventUuid: '',
        status: '',
      },
    ],
    organized_for: '',
    duration: '',
  });

  const setEventsByOrganisator = (newEvents: eventModel[]) => {
    events.value = newEvents;
  };

  const setQuestionnaireAnswers = (newAnswers: eventModel) => {
    event.value = newAnswers;
    if (event.value.isAlreadyCreated && event.value.people > 0) {
      event.value.budget = event.value.budget / event.value.people;
    }
  };

  const resetOrganisatorForm = () => {
    events.value = [];
  };

  const resetForm = () => {
    event.value = {
      uuid: '',
      type_event: '',
      organisatorUuid: '',
      isAlreadyCreated: false,
      status: '',
      date: ['', ''],
      budget: 0,
      formule: '',
      location: 'Auvergne-Rhône-Alpes',
      name: '',
      people: 0,
      group_type: '',
      theme: '',
      eventServices: [
        {
          sectorName: "Veuillez choisir votre secteur d'activité",
          serviceUuid: '',
          keywordsUuid: [],
          uuid: '',
          eventUuid: '',
          status: '',
        },
      ],
      organized_for: '',
      duration: '',
    };
  };

  return {
    events,
    event,
    setEventsByOrganisator,
    setQuestionnaireAnswers,
    resetOrganisatorForm,
    resetForm,
  };
});
