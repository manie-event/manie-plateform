import { storeToRefs } from 'pinia';
import { useSectorService } from '~/services/UseSectorService';
import { useSectorStore } from '~/stores/sectorStore';

export const useSector = () => {
  const { getAllSectors, getSectors, preloadServices, getKeywords } = useSectorService();
  const sectorStore = useSectorStore();
  const { setAllSectors, setServiceList, setKeywordList } = sectorStore;
  const { keywords, services } = storeToRefs(sectorStore);
  const getListSector = async () => {
    const sectorList = await getAllSectors();

    setAllSectors(sectorList);
  };

  const selectSectors = async (selectedSector: string) => {
    keywords.value = [];

    const elementListBySector = await getSectors(selectedSector);
    setServiceList(elementListBySector.services);
    setKeywordList(elementListBySector.keywords);
  };

  const getServicesList = async () => {
    services.value = [];
    const servicesList = await preloadServices();
    setServiceList(servicesList);
  };

  const allKeywords = async () => {
    keywords.value = [];
    const keywordList = await getKeywords();
    setKeywordList(keywordList);
  };

  return {
    getListSector,
    selectSectors,
    getServicesList,
    allKeywords,
  };
};
