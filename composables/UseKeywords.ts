import { keyWordsDtoToKeywords } from '~/mappers/profesionnalKeywordsMapper';
import type { KeywordsDto } from '~/models/dto/KeywordsDto';
import type { Keywords } from '~/models/professionalService/Keywords';
import type { Sectors } from '~/models/professionalService/Sectors';
import type { Services } from '~/models/professionalService/Services';

export const useKeywords = () => {
  const config = useRuntimeConfig();
  const { setProfessionalServices, setKeywords } = useUserStore();
  const loading = ref(false);

  const getSectors = async (sector: string) => {
    try {
      loading.value = true;
      const { data } = await axios.get(`${config.public.apiUrl}/sector`, {
        headers: {
          Authorization: `Bearer ${useCookie('token').value}`,
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        const sectorFiltered = data.data.filter(
          (sectorItem: Sectors) => sectorItem.name.toLowerCase() === sector.toLowerCase()
        );
        getServices(sectorFiltered[0].uuid);
        getKeywords(sectorFiltered[0].name);
        loading.value = false;
      }
    } catch (error: unknown) {
      throw new Error('No data received from API');
    }
  };

  const getServices = async (sectorUuid: string) => {
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/service`, {
        params: { q: sectorUuid, limit: 100 },
        headers: {
          Authorization: `Bearer ${useCookie('token').value}`,
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        const serviceFiltered = data.data.filter(
          (serviceItem: Services) =>
            serviceItem.sectorUuid.toLowerCase() === sectorUuid.toLowerCase()
        );
        console.log(serviceFiltered, 'data serviceFiltered');

        setProfessionalServices(serviceFiltered);
      }
    } catch (error: unknown) {
      console.error('No data received from API');
    }
  };

  const getKeywords = async (query: string) => {
    loading.value = true;
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/keyword`, {
        params: { q: query, limit: 1000 },
        headers: {
          Authorization: `Bearer ${useCookie('token').value}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Keywords data:', data);
      const keyWordFilter = data.data
        .filter((keyword: Keywords) => keyword.sector.toLowerCase() == query.toLowerCase())
        .slice(0, 100)
        .map((keyword: KeywordsDto) => keyWordsDtoToKeywords(keyword));

      setKeywords(keyWordFilter);

      loading.value = false;
      // return keyWordFilter;
    } catch (error: unknown) {
      console.error('Error fetching keywords:', error);
    }
  };
  return {
    loading,
    getKeywords,
    getSectors,
  };
};
