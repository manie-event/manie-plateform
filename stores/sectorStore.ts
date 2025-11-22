import type { Keywords } from '@/models/professionalService/Keywords';
import type { Sectors } from '@/models/professionalService/Sectors';
import type { Services } from '@/models/professionalService/Services';
import { eventsStore } from '@/stores/events';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSectorStore = defineStore('sector', () => {
  // --- STORES EXTERNES ---
  const { setSectors } = eventsStore();

  const services = ref<Services[]>([]);
  const keywords = ref<Keywords[]>([]);
  const sectors = ref<Sectors[]>([]);

  const setAllSectors = (newSectors: Sectors[]) => {
    sectors.value.push(...newSectors);
  };

  const setServiceList = (newServices: Services[]) => {
    services.value = [];
    services.value.push(...newServices);
  };

  const setKeywordList = (newKeyword: Keywords[]) => {
    keywords.value.push(...newKeyword);
  };
  return {
    services,
    keywords,
    sectors,
    setAllSectors,
    setServiceList,
    setKeywordList,
  };
});
