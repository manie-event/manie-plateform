export const useProfessionalService = () => {
  const { addError } = useToaster();
  const { setServicesFiltered } = eventsStore();
  const { setProfessionalServices } = usePropositionStore();
  const { professionalUser } = storeToRefs(useUserStore());
  const api = useApi(); // ✅ instance Axios avec interceptors

  /**
   * Récupère les services sélectionnés du professionnel
   */
  const getProfessionalService = async () => {
    console.log('getProfessionalService');

    try {
      if (!api) return;
      const { data } = await api.get(
        '/professional-service/show-selected-services-for-professional'
      );
      console.log('data services filtered', data);

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
      if (!api || !professionalUser.value?.uuid) return;
      const { data } = await api.get(
        `/professional-service/list-by-professional/${professionalUser.value.uuid}`
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
