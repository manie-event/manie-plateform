import { useSectorService } from '~/services/UseSectorService';

export const useSector = () => {
  const { getAllSectors, getSectors, preloadServices, getKeywords } = useSectorService();
  const sectorStore = useSectorStore();
  const { setAllSectors, setServiceList, setKeywordList } = sectorStore;

  const getListSector = async () => {
    const sectorList = await getAllSectors();

    setAllSectors(sectorList);
  };

  const selectSectors = async (selectedSector: string) => {
    const elementListBySector = await getSectors(selectedSector);
    setServiceList(elementListBySector.services);
    setKeywordList(elementListBySector.keywords);
  };

  const getServicesList = async () => {
    const services = await preloadServices();
    setServiceList(services);
  };

  const allKeywords = async () => {
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
