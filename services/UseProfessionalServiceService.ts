import type { AxiosError } from 'axios';
import { storeToRefs } from 'pinia';
import { useApi } from '~/composables/UseApi';
import { useDisplayErrorMessage } from '~/composables/UseDisplayErrorMessage';
import type { ProfessionalServiceCreate } from '~/models/professionalService/professionalServiceCreate';
import type { ProfessionalServiceUpdate } from '~/models/professionalService/professionalServiceUuid';
import { useProfessionalStore } from '~/stores/professionalStore';
import { useProfilStore } from '~/stores/profilStore';
import { useSectorStore } from '~/stores/sectorStore';
import { useToaster } from '~/utils/toaster';

export const useProfessionalServiceService = () => {
  const { addError, addSuccess } = useToaster();
  const { setServicesFiltered } = useSectorStore();

  const { setProfessionalServices } = useProfessionalStore();
  const { services, sectors } = storeToRefs(useSectorStore());
  const { professionalUser } = storeToRefs(useProfilStore());
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

    const proServicesWithSector = data.data.map((proService) => {
      const matchingService = services.value.find((s) => proService.serviceUuid === s.uuid);
      const findSector = sectors.value.find(
        (sector) => sector.uuid === matchingService?.sectorUuid
      );
      return {
        ...proService,
        sector: findSector,
      };
    });

    setProfessionalServices(proServicesWithSector);

    return proServicesWithSector;
  };

  const updateProfessionalServices = async (
    serviceUuid: string,
    payload: ProfessionalServiceUpdate
  ) => {
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

  const sendProfessionalServices = async (services: ProfessionalServiceCreate) => {
    try {
      if (!api) throw new Error('API non initialisée');
      const { data } = await api.post('/professional-service/create', services);

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
