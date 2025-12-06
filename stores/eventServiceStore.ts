import type { EventService } from '~/models/eventService/eventService';

export const useEventServiceStore = defineStore('eventService', () => {
  const eventServices = ref<EventService[]>([
    { selectedSector: undefined, selectedServiceId: '', selectedKeywords: [] },
  ]);

  const resetForm = () => {
    eventServices.value = [
      { selectedSector: undefined, selectedServiceId: '', selectedKeywords: [] },
    ];
  };

  return {
    eventServices,
    resetForm,
  };
});
