// composables/event/useEventForm.ts
import questionnaire from '@/data/questionnaire-client-refonte.json';
import * as yup from 'yup';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import type { SectorsDto } from '~/models/dto/sectorsDto';

export const useEventForm = () => {
  const { sectors, servicesFiltered } = storeToRefs(eventsStore());
  const { clientProfile } = storeToRefs(useUserStore());
  const { keywords } = storeToRefs(useKeywordsStore());
  const { addError } = useToaster();

  // --- STATE GENERAL --- //
  const currentPage = ref(1);

  const type_event = ref('');
  const name = ref('');
  const location = ref('Veuillez choisir un département');
  const duration = ref('');
  const group_type = ref('');
  const theme = ref('');
  const organized_for = ref('');
  const people = ref(0);

  const isBudgetGlobale = ref(false);
  const budgetInput = ref(0);

  const today = new Date().toISOString().split('T')[0];
  const dateStart = ref('');
  const dateEnd = ref('');

  const selectedServices = ref([
    {
      selectedSector: undefined,
      selectedServiceId: '',
      selectedKeywords: [] as string[],
    },
  ]);

  // --- VALIDATIONS --- //

  const schemaPage1 = yup.object({
    type_event: yup.string().required('Veuillez nommer votre évènement'),
    name: yup.string().required("Veuillez choisir un type d'évènement"),
    dateStart: yup.date().required('La date de début est obligatoire'),
    dateEnd: yup
      .date()
      .min(yup.ref('dateStart'), 'La date de fin doit être postérieure à la date de début')
      .required('La date de fin est obligatoire'),
    location: yup.string().required('Veuillez indiquer une localisation'),
    group_type: yup.string().required('Veuillez préciser le type de groupe'),
    duration: yup.string().required('Veuillez préciser la durée'),
  });

  const schemaPage2 = yup.object({
    organized_for: yup.string().required('Veuillez indiquer pour qui est organisé l’événement'),
    theme: yup.string().required('Veuillez définir un thème'),
    people: yup.number().positive('Le nombre de participants doit être > 0'),
    budgetInput: yup.number().positive('Le budget doit être > 0'),
  });

  const schemaPage3 = yup.object({
    services: yup
      .array()
      .of(
        yup.object({
          selectedSector: yup.string().required('Choisissez un secteur'),
          selectedServiceId: yup.string().required('Choisissez un service'),
        })
      )
      .min(1, 'Ajoutez au moins un service'),
  });

  // --- COMPUTED --- //

  const finalDateSelection = computed(() => {
    return [dateStart.value, dateEnd.value];
  });

  const budgetCalculation = computed(() => {
    return isBudgetGlobale.value ? budgetInput.value : budgetInput.value * people.value;
  });

  const chooseEventTypeDependingOnUserCategory = computed(() => {
    return clientProfile.value?.isBusiness ? 'professionnel' : 'particulier';
  });

  const customerResponse = computed(() => {
    return {
      organisatorUuid: clientProfile.value?.uuid,
      type_event: type_event.value,
      event_type: chooseEventTypeDependingOnUserCategory.value,
      name: name.value,
      date: finalDateSelection.value,
      location: location.value,
      duration: duration.value,
      group_type: group_type.value,
      theme: theme.value,
      formule: 'gratuit',
      organized_for: organized_for.value,
      people: people.value,
      budget: budgetCalculation.value,
      services: selectedServices.value.map((service) => ({
        serviceUuid: service.selectedServiceId,
        keywordsUuid: service.selectedKeywords,
      })),
    };
  });

  // --- UTILS COMMONS --- //

  const nextPage = async () => {
    let schema = null;
    if (currentPage.value === 1) schema = schemaPage1;
    if (currentPage.value === 2) schema = schemaPage2;

    if (!schema) {
      currentPage.value++;
      return;
    }

    try {
      await schema.validate(
        {
          type_event: type_event.value,
          name: name.value,
          dateStart: dateStart.value,
          dateEnd: dateEnd.value,
          location: location.value,
          group_type: group_type.value,
          duration: duration.value,
          organized_for: organized_for.value,
          theme: theme.value,
          formule: 'gratuit',
          people: people.value,
          budgetInput: budgetInput.value,
        },
        { abortEarly: false }
      );
      currentPage.value++;
    } catch (err: any) {
      err.errors?.forEach((msg: string) => addError({ message: msg }));
    }
  };

  const sectorFiltered = computed(() => {
    const servicefiltered = servicesFiltered.value.map((s) => s.sectorUuid);
    const sector = sectors.value.filter((sector) => servicefiltered.includes(sector.uuid));

    const activityAvailable = ACTIVITY_ITEMS.map((activity) => {
      const matchingSector = sector.find((s) => s.name === activity.value);

      if (matchingSector) {
        return {
          ...activity,
          sectorUuid: matchingSector.uuid,
        };
      }
      return null;
    }).filter(Boolean);
    return activityAvailable;
  });

  const getQuestionOptions = (sectionIndex: number) => {
    const eventTypeValue = clientProfile.value?.isBusiness ? 'professionnel' : 'particulier';

    if (sectionIndex === 0) {
      // Pour la première question, filtrer selon le profil client automatiquement
      const eventTypes = questionnaire.general[0].reponses.find(
        (type) => type['event-type'] === chooseEventTypeDependingOnUserCategory.value
      );
      return eventTypes?.type || [];
    }

    const section = questionnaire.general[sectionIndex];
    const hasEventType = section.reponses.some((r) => 'event-type' in r);

    if (hasEventType) {
      return (
        section.reponses.find(
          (reponse) => reponse['event-type'] === chooseEventTypeDependingOnUserCategory.value
        )?.type || []
      );
    }
    return section.reponses;
  };

  const addNewService = () => {
    selectedServices.value.push({
      selectedSector: undefined,
      selectedServiceId: '',
      selectedKeywords: [],
    });
  };

  const removeService = (index: number) => {
    if (selectedServices.value.length > 1) {
      selectedServices.value.splice(index, 1);
    }
  };

  const updateServiceSector = (serviceIndex: number, selectedSector: any) => {
    const service = selectedServices.value[serviceIndex];
    service.selectedSector = selectedSector;
    service.selectedServiceId = '';
    service.selectedKeywords = [];
  };

  const selectServiceForIndex = (serviceIndex: number, uuid: string) => {
    const service = selectedServices.value[serviceIndex];
    service.selectedServiceId = service.selectedServiceId === uuid ? '' : uuid;
  };

  const toggleKeywordForService = (index: number, keywordUuid: string) => {
    const keywordsList = selectedServices.value[index].selectedKeywords;
    const pos = keywordsList.indexOf(keywordUuid);
    pos >= 0 ? keywordsList.splice(pos, 1) : keywordsList.push(keywordUuid);
  };

  const mapSectionsWithServices = (selectedSector?: string | SectorsDto) => {
    const findSelectedSectorUuid = sectors.value.find((s) => s.name === selectedSector);

    const findServicesForSelectedSector = servicesFiltered.value.filter(
      (s) => s.sectorUuid === findSelectedSectorUuid?.uuid
    );

    const questionnaireSectorFiltering = questionnaire.sections.filter(
      (section) => section.sector === selectedSector
    );
    return questionnaireSectorFiltering.map((section) => {
      if (section.isService && section.sector === selectedSector) {
        return {
          ...section,
          answers: findServicesForSelectedSector.map((s) => ({
            id: s.id,
            name: s.name,
            uuid: s.uuid,
          })),
        };
      } else {
        const keywordsCategory = keywords.value.filter(
          (k) => k.category === section.category && k.sector === section.sector
        );

        return {
          ...section,
          answers: keywordsCategory,
        };
      }
    });
  };

  const getFilteredQuestionsForService = (selectedSector: any) => {
    if (!selectedSector) return [];
    return mapSectionsWithServices(selectedSector);
  };

  return {
    // data
    currentPage,
    type_event,
    name,
    location,
    today,
    duration,
    group_type,
    theme,
    organized_for,
    people,
    isBudgetGlobale,
    budgetInput,
    dateStart,
    dateEnd,
    selectedServices,

    // computed
    customerResponse,
    chooseEventTypeDependingOnUserCategory,
    budgetCalculation,
    finalDateSelection,

    // methods
    nextPage,
    addNewService,
    removeService,
    selectServiceForIndex,
    toggleKeywordForService,
    getQuestionOptions,
    getFilteredQuestionsForService,
    updateServiceSector,
    sectorFiltered,

    // schemas for page 3 only
    schemaPage3,
  };
};
