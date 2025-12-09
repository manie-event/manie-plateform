import type { Keywords } from '@/models/professionalService/Keywords';
import type { Sectors } from '@/models/professionalService/Sectors';
import type { Services } from '@/models/professionalService/Services';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ServicesFiltered } from '~/models/dto/serviceFiltered';

export const useSectorStore = defineStore('sector', () => {
  const services = ref<Services[]>([]);
  const keywords = ref<Keywords[]>([]);
  const sectors = ref<Sectors[]>([]);
  const servicesFiltered = ref<ServicesFiltered[]>([]);

  const setAllSectors = (newSectors: Sectors[]) => {
    sectors.value.push(...newSectors);
  };

  const setServiceList = (newServices: Services[]) => {
    services.value.push(...newServices);
    console.log(services.value, 'services.value');
  };

  const setKeywordList = (newKeyword: Keywords[]) => {
    keywords.value.push(...newKeyword);
  };

  const setServicesFiltered = (newServicesFiltered: ServicesFiltered[]) => {
    servicesFiltered.value = [];
    servicesFiltered.value.push(...newServicesFiltered);
    console.log(servicesFiltered.value, 'servicesFiltered.value');
  };

  return {
    services,
    keywords,
    sectors,
    servicesFiltered,
    setAllSectors,
    setServiceList,
    setKeywordList,
    setServicesFiltered,
  };
});
