import type { Keywords } from '@/models/professionalService/Keywords';
import type { Sectors } from '@/models/professionalService/Sectors';
import type { Services } from '@/models/professionalService/Services';
import type { ProfessionalServiceUuid } from '@/models/professionalService/professionalServiceUuid';
import { keyWordsDtoToKeywords } from '~/mappers/profesionnalKeywordsMapper';
import type { KeywordsDto } from '~/models/dto/KeywordsDto';

export const useKeywords = () => {
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const { setProfessionalServices, setKeywords, setUpdateProfile } = userStore;
  const { professionnalServices, keywords } = storeToRefs(userStore);
  const loading = ref(false);
  const token = useCookie('token');
  const api = useApi();

  const getSectors = async (sector: string) => {
    try {
      loading.value = true;
      const response = await api?.get(`${config.public.apiUrl}/sector`);
      console.log(response, 'Response from sectors API');

      if (response) {
        const sectorFiltered = response.data.data.filter(
          (sectorItem: Sectors) => sectorItem.name.toLowerCase() === sector.toLowerCase()
        );

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
      throw new Error('No data received from API');
    }
  };

  const getServices = async (sectorUuid: string) => {
    try {
      const response = await axios.get(`${config.public.apiUrl}/service`, {
        params: { q: sectorUuid, limit: 100 },
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        const serviceFiltered = response.data.data.filter(
          (serviceItem: Services) =>
            serviceItem.sectorUuid.toLowerCase() === sectorUuid.toLowerCase()
        );

        setProfessionalServices(serviceFiltered);
      }
    } catch (error: unknown) {
      console.error('No data received from API');
    }
  };

  const getKeywords = async (query: string) => {
    loading.value = true;
    try {
      const response = await axios.get(`${config.public.apiUrl}/keyword`, {
        params: { q: query, limit: 1000 },
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        const keyWordFilter = response.data.data
          .filter((keyword: Keywords) => keyword.sector.toLowerCase() == query.toLowerCase())
          .slice(0, 100)
          .map((keyword: KeywordsDto) => keyWordsDtoToKeywords(keyword));

        console.log(keyWordFilter, 'Keywords fetched and filtered');

        setKeywords(keyWordFilter);

        loading.value = false;
      }
    } catch (error: unknown) {
      console.error('Error fetching keywords:', error);
    }
  };

  const sendProfessionalServices = async (services: ProfessionalServiceUuid) => {
    try {
      const response = await axios.post(
        `${config.public.apiUrl}/professional-service/create`,
        services,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data) {
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
    sendProfessionalServices,
  };
};
