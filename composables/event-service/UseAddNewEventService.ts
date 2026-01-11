import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import questionnaire from '~/data/questionnaire-client-refonte.json';
import type { SectorsDto } from '~/models/dto/sectorsDto';
import type { ServicesFiltered } from '~/models/dto/serviceFiltered';
import type { Sectors } from '~/models/professionalService/Sectors';
import { useEventService } from '~/services/UseEventService';
import { useSector } from '../sector/UseSector';

export const useAddNewEventService = () => {
  const eventServiceStore = useEventServiceStore();
  const { eventServices } = storeToRefs(eventServiceStore);
  const { keywords, sectors, servicesFiltered } = storeToRefs(useSectorStore());
  const { selectSectors } = useSector();
  const { createEventServiceItem } = useEventService();

  const addNewEventService = async (eventUuid: string) => {
    const createNewEventService = eventServices.value.map((service) =>
      createEventServiceItem({
        serviceUuid: service.selectedServiceId,
        eventUuid: eventUuid,
        keywordsUuid: service.selectedKeywords,
      })
    );
    await Promise.all(createNewEventService);
  };

  const addNewServiceForm = () => {
    eventServices.value.push({
      selectedSector: undefined,
      selectedServiceId: '',
      selectedKeywords: [],
    });
  };

  const updateServiceSector = (selectedSector: string) => {
    selectSectors(selectedSector);
  };

  const removeEventService = (serviceIndex: number) => {
    eventServices.value.splice(serviceIndex, 1);
  };

  const selectServiceForIndex = (serviceIndex: number, serviceUuid: string) => {
    const service = eventServices.value[serviceIndex];
    if (service.selectedServiceId === serviceUuid) {
      service.selectedServiceId = '';
    } else {
      service.selectedServiceId = serviceUuid;
    }
  };

  const toggleKeywordForService = (serviceIndex: number, keywordUuid: string) => {
    const service = eventServices.value[serviceIndex];
    const keywordIndex = service.selectedKeywords.indexOf(keywordUuid);
    if (keywordIndex > -1) {
      service.selectedKeywords.splice(keywordIndex, 1);
    } else {
      service.selectedKeywords.push(keywordUuid);
    }
  };

  const sectorFiltered = computed(() => {
    const servicefiltered = servicesFiltered.value.map((s: ServicesFiltered) => s.sectorUuid);
    const sectorList = sectors.value.filter((sector: Sectors) =>
      servicefiltered.includes(sector.uuid)
    );
    const activityAvailable = ACTIVITY_ITEMS.map((activity) => {
      const matchingSector = sectorList.find((s: Sectors) => s.name === activity.value);
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

  const getFilteredQuestionsForService = (selectedSector: string) => {
    if (!selectedSector) return [];
    return mapSectionsWithServices(selectedSector);
  };

  const mapSectionsWithServices = (selectedSector?: string | SectorsDto) => {
    const findSelectedSectorUuid = sectors.value.find((s) => s.name === selectedSector);
    const findServicesForSelectedSector = servicesFiltered.value.filter(
      (s: ServicesFiltered) => s.sectorUuid === findSelectedSectorUuid?.uuid
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

  return {
    sectorFiltered,
    addNewServiceForm,
    addNewEventService,
    removeEventService,
    selectServiceForIndex,
    toggleKeywordForService,
    updateServiceSector,
    getFilteredQuestionsForService,
  };
};
