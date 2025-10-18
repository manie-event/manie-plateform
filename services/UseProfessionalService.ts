export const useProfessionalService = () => {
  const { addError, addSuccess } = useToaster();

  // const professionalStore = professionalsStore();
  const config = useRuntimeConfig();
  const token = useCookie('token');
  const { setServicesFiltered } = eventsStore();
  // const { professionalProfile } = storeToRefs(useUserStore());
  const { setProfessionalServices } = usePropositionStore();

  const professionalUuid = localStorage.getItem('professional-uuid');

  const getProfessionalService = async () => {
    try {
      const { data } = await axios.get(
        `${config.public.apiUrl}/professional-service/show-selected-services-for-professional`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setServicesFiltered(data);
      return data ?? [];
    } catch (error: unknown) {
      addError({ message: "Une erreur est survenue lors de l'envoi du message." });
    }
  };

  const getListProfessionalServiceByProfessional = async () => {
    try {
      const { data } = await axios.get(
        `${config.public.apiUrl}/professional-service/list-by-professional/${professionalUuid}`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setProfessionalServices(data.data);
      return data.data ?? [];
    } catch (error: unknown) {
      addError({ message: "Une erreur est survenue lors de l'envoi du message." });
    }
  };

  return {
    getProfessionalService,
    getListProfessionalServiceByProfessional,
  };
};
