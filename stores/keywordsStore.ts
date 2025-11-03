import { useApi } from '@/composables/UseApi';
import { keyWordsDtoToKeywords } from '@/mappers/profesionnalKeywordsMapper';
import type { Keywords } from '@/models/professionalService/Keywords';
import type { Sectors } from '@/models/professionalService/Sectors';
import type { Services } from '@/models/professionalService/Services';
import type { ProfessionalServiceUuid } from '@/models/professionalService/professionalServiceUuid';
import { eventsStore } from '@/stores/events';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { KeywordsDto } from '~/models/dto/keywordsDto';

export const useKeywordsStore = defineStore('keywords', () => {
  // --- STORES EXTERNES ---
  const { setSectors } = eventsStore();

  // --- ÉTAT LOCAL ---
  const loading = ref(false);
  const services = ref<Services[]>([]);
  const keywords = ref<Keywords[]>([]);
  const sectors = ref<Sectors[]>([]);
  const api = useApi();
  const config = useRuntimeConfig();

  // --- MÉTHODES MÉTIER ---
  const getAllSectors = async () => {
    try {
      if (!api) throw new Error('API non initialisée');

      loading.value = true;
      let page = 1;
      const allResults: Sectors[] = [];

      while (true) {
        const response = await api.get(`/sector?page=${page}`);
        if (!response?.data?.data?.length) break;

        allResults.push(...response.data.data);
        if (page >= response.data.meta.lastPage) break;
        page++;
      }

      sectors.value = allResults;
      setSectors(allResults);
      return allResults;
    } catch (error) {
      console.error('❌ Erreur lors du chargement des secteurs :', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const getSectors = async (sector: string) => {
    try {
      if (!api) throw new Error('API non initialisée');

      loading.value = true;
      const response = await api.get('/sector', { params: { limit: 30 } });

      const sectorFiltered = response.data.data.filter(
        (sectorItem: Sectors) => sectorItem.name.toLowerCase() === sector.toLowerCase()
      );

      if (!sectorFiltered.length) {
        throw new Error(`Secteur "${sector}" introuvable.`);
      }

      const [servicesRes, keywordsRes] = await Promise.all([
        getServices(sectorFiltered[0].uuid),
        getKeywords(sectorFiltered[0].name),
      ]);

      return { services: servicesRes, keywords: keywordsRes };
    } catch (error) {
      console.error('❌ Erreur dans getSectors :', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const getServices = async (sectorUuid: string) => {
    try {
      if (!api) throw new Error('API non initialisée');

      const response = await api.get(`${config.public.apiUrl}/service`, {
        params: { q: sectorUuid, limit: 100 },
      });

      const serviceFiltered = response.data.data.filter(
        (serviceItem: Services) => serviceItem.sectorUuid.toLowerCase() === sectorUuid.toLowerCase()
      );

      services.value = serviceFiltered;
      return serviceFiltered;
    } catch (error) {
      console.error('❌ Erreur lors de getServices :', error);
      throw error;
    }
  };

  const getKeywords = async (query?: string) => {
    loading.value = true;
    try {
      if (!api) throw new Error('API non initialisée');

      const { data } = await api.get(`${config.public.apiUrl}/keyword`, {
        params: { q: query, limit: 1500 },
      });

      if (!data?.data) throw new Error('Aucune donnée reçue pour les mots-clés.');

      const filtered = query
        ? data.data
            .filter((k: Keywords) => k.sector.toLowerCase() === query.toLowerCase())
            .map((k: KeywordsDto) => keyWordsDtoToKeywords(k))
        : data.data;

      keywords.value = filtered;
      return filtered;
    } catch (error) {
      console.error('❌ Erreur lors de getKeywords :', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const sendProfessionalServices = async (servicesPayload: ProfessionalServiceUuid) => {
    try {
      if (!api) throw new Error('API non initialisée');
      const response = await api.post(
        `${config.public.apiUrl}/professional-service/create`,
        servicesPayload
      );

      services.value = response.data;
      return response.data;
    } catch (error) {
      console.error('❌ Erreur lors de sendProfessionalServices :', error);
      throw error;
    }
  };

  // --- EXPORT PUBLIC ---
  return {
    // État
    loading,
    services,
    keywords,
    sectors,

    // Méthodes
    getAllSectors,
    getSectors,
    getServices,
    getKeywords,
    sendProfessionalServices,
  };
});
