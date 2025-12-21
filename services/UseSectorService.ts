import { keyWordsDtoToKeywords } from '~/mappers/profesionnalKeywordsMapper';
import type { KeywordsDto } from '~/models/dto/keywordsDto';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { Sectors } from '~/models/professionalService/Sectors';
import type { Services } from '~/models/professionalService/Services';

export const useSectorService = () => {
  const api = useApi();
  const config = useRuntimeConfig();
  const loading = ref(false);

  const getAllSectors = async () => {
    try {
      if (!api) throw new Error('API non initialisée');

      loading.value = true;
      let page = 1;
      const allResults: Sectors[] = [];

      while (true) {
        const { data } = await api.get(`/sector?page=${page}`);
        if (!data?.data?.length) break;

        allResults.push(...data.data);
        if (page >= data.meta.lastPage) break;
        page++;
      }

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
      const { data } = await api.get('/sector', { params: { limit: 30 } });

      const sectorFiltered = data.data.filter(
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

      const { data } = await api.get(`${config.public.apiUrl}/service`, {
        params: { q: sectorUuid, limit: 100 },
      });

      const serviceFiltered = data.data.filter(
        (serviceItem: Services) => serviceItem.sectorUuid.toLowerCase() === sectorUuid.toLowerCase()
      );

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

      return filtered;
    } catch (error) {
      console.error('❌ Erreur lors de getKeywords :', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const preloadServices = async () => {
    if (!api) throw new Error('API non initialisée');

    try {
      const { data } = await api.get('/service', { params: { limit: 1000 } });
      return data.data;
    } catch (err) {
      console.error('❌ Erreur lors de preloadServices :', err);
    }
  };

  return {
    loading,
    getAllSectors,
    getSectors,
    getServices,
    getKeywords,
    preloadServices,
  };
};
