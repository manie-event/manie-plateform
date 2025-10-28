export const useProfessionalService = () => {
  const { addError } = useToaster();
  const { setServicesFiltered } = eventsStore();
  const { setProfessionalServices } = usePropositionStore();
  const api = useApi(); // ✅ instance Axios avec interceptors
  const professionalUuid = localStorage.getItem('professional-uuid');

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
    } catch (error: any) {
      console.error('❌ getProfessionalService:', error);
      addError({ message: 'Une erreur est survenue lors de la récupération des services.' });
    }
  };

  /**
   * Récupère la liste des services du professionnel
   */
  const getListProfessionalServiceByProfessional = async () => {
    try {
      if (!api || !professionalUuid) return;
      const { data } = await api.get(
        `/professional-service/list-by-professional/${professionalUuid}`
      );
      setProfessionalServices(data.data);
      return data.data ?? [];
    } catch (error: any) {
      console.error('❌ getListProfessionalServiceByProfessional:', error);
      addError({ message: 'Une erreur est survenue lors de la récupération des services.' });
    }
  };

  return {
    getProfessionalService,
    getListProfessionalServiceByProfessional,
  };
};
