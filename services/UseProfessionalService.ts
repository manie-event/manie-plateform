import type { AxiosError } from 'axios';

export const useProfessionalService = () => {
  const { addError } = useToaster();
  const { setServicesFiltered } = eventsStore();
  const { setProfessionalServices } = usePropositionStore();
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
    try {
      if (!api || !professionalUser.value?.uuid) return;
      const { data } = await api.get(
        `/professional-service/list-by-professional/${professionalUser.value.uuid}`
      );
      setProfessionalServices(data.data);
      return data.data ?? [];
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const updateProfessionalServices = async (serviceUuid: string, payload) => {
    console.log(payload, 'updateProfessionalServices');

    try {
      if (!api || !professionalUser.value?.uuid) return;
      const { data } = await api.patch(`/professional-service/update/${serviceUuid}`, payload, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      console.log(data, 'updateProfessionalServices');

      setProfessionalServices(data.data);
      return data.data ?? [];
    } catch (error: any) {
      console.error('❌ getListProfessionalServiceByProfessional:', error);
    }
  };

  const removeProfessionalService = async (serviceUuid: string) => {
    try {
      if (!api || !professionalUser.value?.uuid) return;
      const { data } = await api.delete(`/professional-service/update/${serviceUuid}`);
      console.log(data, 'updateProfessionalServices');

      setProfessionalServices(data.data);
      return data.data ?? [];
    } catch (error: any) {
      console.error('❌ getListProfessionalServiceByProfessional:', error);
    }
  };

  return {
    getProfessionalService,
    getListProfessionalServiceByProfessional,
    updateProfessionalServices,
  };
};
