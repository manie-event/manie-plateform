import type { Keywords } from '@/models/professionalService/Keywords';
import type { Sectors } from '@/models/professionalService/Sectors';
import type { Services } from '@/models/professionalService/Services';
import type { ProfessionalServiceUuid } from '@/models/professionalService/professionalServiceUuid';
import { eventsStore } from '@/stores/events';
import { keyWordsDtoToKeywords } from '~/mappers/profesionnalKeywordsMapper';
import type { KeywordsDto } from '~/models/dto/keywordsDto';

export const useKeywords = () => {
  const userStore = useUserStore();

  const { setProfessionalServices, setKeywords, setUpdateProfile } = userStore;
  const { professionnalServices, keywords } = storeToRefs(userStore);

  const { setSectors } = eventsStore();

  const config = useRuntimeConfig();
  const loading = ref(false);
  const token = useCookie('token');
  const api = useApi();

  const getAllSectors = async () => {
    try {
      loading.value = true;
      let page = 1;
      let allResults = [];

      while (true) {
        const response = await api?.get(`${config.public.apiUrl}/sector?page=${page}`);

        if (!response?.data?.data?.length) break; // stop si plus de résultats

        allResults.push(...response.data.data);

        // check si on a atteint la dernière page
        if (page >= response.data.meta.lastPage) break;

        page++;
      }

      setSectors(allResults);
      return allResults;
    } catch (error) {
      console.error('Error fetching sectors:', error);
    } finally {
      loading.value = false;
    }
  };

  const getSectors = async (sector: string) => {
    try {
      loading.value = true;
      const response = await api?.get('/sector', { params: { limit: 30 } });

      console.log(response, 'RESPONSE');

      if (response) {
        const sectorFiltered = response.data.data.filter(
          (sectorItem: Sectors) => sectorItem.name.toLowerCase() === sector.toLowerCase()
        );
        console.log(sectorFiltered, 'sectorFiltered');

        await Promise.all([
          getServices(sectorFiltered[0].uuid),
          getKeywords(sectorFiltered[0].name),
        ]);
        loading.value = false;

        return {
          services: professionnalServices.value,
          keywords: keywords.value,
        };
      }
    } catch (error: unknown) {
      throw new Error('No data received from API for sectors');
    }
  };

  const getServices = async (sectorUuid: string) => {
    try {
      const response = await api?.get(`${config.public.apiUrl}/service`, {
        params: { q: sectorUuid, limit: 100 },
      });
      console.log(response, 'SERVICES RESPONSE');

      if (response) {
        const serviceFiltered = response.data.data.filter(
          (serviceItem: Services) =>
            serviceItem.sectorUuid.toLowerCase() === sectorUuid.toLowerCase()
        );

        setProfessionalServices(serviceFiltered);
      }
    } catch (error: unknown) {
      console.error('No data received from API for services:', error);
    }
  };

  const getKeywords = async (query?: string) => {
    loading.value = true;
    try {
      const { data } = await api.get(`${config.public.apiUrl}/keyword`, {
        params: { q: query, limit: 1500 },
      });

      if (!data?.data) throw new Error('Aucune donnée reçue pour les mots-clés.');

      const filtered = query
        ? data.data
            .filter((k: Keywords) => k.sector.toLowerCase() === query.toLowerCase())
            .map((k: KeywordsDto) => keyWordsDtoToKeywords(k))
        : data.data;

      setKeywords(filtered);
      console.log(`✅ ${filtered.length} mots-clés chargés pour "${query ?? 'tous secteurs'}"`);
      return filtered;
    } catch (error) {
      console.error('Erreur lors de getKeywords:', error);
    } finally {
      loading.value = false;
    }
  };

  const sendProfessionalServices = async (services: ProfessionalServiceUuid) => {
    try {
      const response = await api?.post(
        `${config.public.apiUrl}/professional-service/create`,
        services
      );
      if (response) {
        setProfessionalServices(response.data);
        setUpdateProfile(true);
      }
    } catch (error: unknown) {
      console.error('Error sending professional services:', error);
    }
  };
  return {
    loading,
    getKeywords,
    getSectors,
    getAllSectors,
    sendProfessionalServices,
  };
};
