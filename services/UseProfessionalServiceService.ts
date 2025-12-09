import type { AxiosError } from 'axios';
import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';

export const useProfessionalServiceService = () => {
  const { addError } = useToaster();
  const { setServicesFiltered } = useSectorStore();

  const { setProfessionalServices } = useProfessionalStore();
  const { services, sectors } = storeToRefs(useSectorStore());
  const { professionalUser } = storeToRefs(useUserStore());
  const api = useApi();

  /**
   * Récupère les services sélectionnés du professionnel
   */
  const getProfessionalService = async () => {
    try {
      if (!api) return;
      const { data } = await api.get(
        '/professional-service/show-selected-services-for-professional'
      );

      setServicesFiltered(data);
      return data ?? [];
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  /**
   * Récupère la liste des services du professionnel
   */
  const getListProfessionalServiceByProfessional = async () => {
    if (!api || !professionalUser.value?.uuid) return;
    const { data } = await api.get(
      `/professional-service/list-by-professional/${professionalUser.value.uuid}`
    );
    const proServices = data.data;
    const allServices = services.value;
    const allSectors = sectors.value;

    const proServicesWithSector = proServices.map((proService) => {
      const matchingService = allServices.find((s) => s.uuid === proService.serviceUuid);
      const findSector = allSectors.find((sector) => sector.uuid === matchingService?.sectorUuid);
      return {
        ...proService,
        sector: findSector,
      };
    });

    return proServicesWithSector;
  };

  const updateProfessionalServices = async (serviceUuid: string, payload) => {
    try {
      if (!api || !professionalUser.value?.uuid) return;
      const { data } = await api.patch(`/professional-service/update/${serviceUuid}`, payload, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      setProfessionalServices(data.data);
      return data.data ?? [];
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const removeProfessionalService = async (serviceUuid: string) => {
    if (!api || !professionalUser.value?.uuid) return;
    const { data } = await api.delete(`/professional-service/${serviceUuid}`);

    return data.data ?? [];
  };

  const sendProfessionalServices = async (servicesPayload: ProfessionalServiceUuid) => {
    try {
      if (!api) throw new Error('API non initialisée');
      const { data } = await api.post('/professional-service/create', servicesPayload);

      return data;
    } catch (error) {
      console.error('❌ Erreur lors de sendProfessionalServices :', error);
      throw error;
    }
  };

  return {
    getProfessionalService,
    getListProfessionalServiceByProfessional,
    updateProfessionalServices,
    removeProfessionalService,
    sendProfessionalServices,
  };
};
