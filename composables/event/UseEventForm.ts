// composables/event/useEventForm.ts
import questionnaire from '@/data/questionnaire-client-refonte.json';
import * as yup from 'yup';
import type { SectorsDto } from '~/models/dto/sectorsDto';
import { useAddNewEventService } from '../event-service/UseAddNewEventService';
import { useSector } from '../sector/UseSector';

export const useEventForm = () => {
  const { clientProfile } = storeToRefs(useProfilStore());
  const { keywords, sectors, servicesFiltered, services } = storeToRefs(useSectorStore());
  const { sectorFiltered } = useAddNewEventService();
  const { selectSectors } = useSector();
  const { addError } = useToaster();
  const { event } = storeToRefs(useEventsStore());

  // --- STATE GENERAL --- //
  const currentPage = ref(1);

  const isBudgetGlobale = ref(false);
  const budgetInput = ref(0);
  const today = new Date().toISOString().split('T')[0];

  // const selectedServices = ref([
  //   {
  //     selectedSector: undefined,
  //     selectedServiceId: '',
  //     selectedKeywords: [] as string[],
  //   },
  // ]);

  const dateStart = computed({
    get: () => event.value.date?.[0] || '',
    set: (value: string) => {
      // Créer un nouveau tableau pour déclencher la réactivité
      const newDate = [...(event.value.date || ['', ''])];
      newDate[0] = value;
      event.value = {
        ...event.value,
        date: newDate,
      };
    },
  });

  const dateEnd = computed({
    get: () => event.value.date?.[1] || '',
    set: (value: string) => {
      const newDate = [...(event.value.date || ['', ''])];
      newDate[1] = value;
      event.value = {
        ...event.value,
        date: newDate,
      };
    },
  });

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
    budget: yup.number().positive('Le budget doit être > 0'),
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

  const chooseEventTypeDependingOnUserCategory = computed(() => {
    return clientProfile.value?.isBusiness ? 'professionnel' : 'particulier';
  });

  const budgetCalculation = computed(() => {
    return isBudgetGlobale.value ? event.value.budget : event.value.budget * event.value.people;
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
          type_event: event.value.type_event,
          name: event.value.name,
          dateStart: dateStart.value,
          dateEnd: dateEnd.value,
          location: event.value.location,
          group_type: event.value.group_type,
          duration: event.value.duration,
          organized_for: event.value.organized_for,
          theme: event.value.theme,
          formule: 'gratuit',
          people: event.value.people,
          budget: event.value.budget,
        },
        { abortEarly: false }
      );
      currentPage.value++;
    } catch (err: any) {
      err.errors?.forEach((msg: string) => addError({ message: msg }));
    }
  };

  const getQuestionOptions = (sectionIndex: number) => {
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

  const addNewServiceForm = () => {
    event.value.eventServices.push({
      sectorName: "Veuillez choisir votre secteur d'activité",
      serviceUuid: '',
      keywordsUuid: [],
      uuid: '',
      eventUuid: '',
      status: '',
    });
  };

  const removeService = (index: number) => {
    if (event.value.eventServices.length > 1) {
      event.value.eventServices.splice(index, 1);
    }
  };

  const updateServiceSector = (serviceIndex: number, selectedSector: any) => {
    const service = event.value.eventServices[serviceIndex];

    selectSectors(selectedSector); //esthétique
    service.sectorName = selectedSector;
    service.serviceUuid = '';
    service.keywordsUuid = [];
  };

  const selectServiceForIndex = (serviceIndex: number, uuid: string) => {
    const service = event.value.eventServices[serviceIndex];
    service.serviceUuid = uuid;
    return service.serviceUuid;
  };

  const toggleKeywordForService = (index: number, keywordUuid: string) => {
    const service = event.value.eventServices[index];
    const keywordsList = service.keywordsUuid;
    const pos = keywordsList.indexOf(keywordUuid);
    pos >= 0 ? keywordsList.splice(pos, 1) : keywordsList.push(keywordUuid);
    return keywordsList;
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
    location,
    today,
    isBudgetGlobale,
    budgetInput,
    dateStart,
    dateEnd,

    // computed
    chooseEventTypeDependingOnUserCategory,
    budgetCalculation,

    // methods
    nextPage,
    addNewServiceForm,
    removeService,
    selectServiceForIndex,
    toggleKeywordForService,
    getQuestionOptions,
    getFilteredQuestionsForService,
    updateServiceSector,
    sectorFiltered,
    schemaPage3,
  };
};
