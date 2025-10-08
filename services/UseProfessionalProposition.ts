export const useProfessionalProposition = () => {
  const config = useRuntimeConfig();
  const token = useCookie('token');

  const { addSuccess, addError } = useToaster();
  const getListEventServiceProposition = async (professionalServiceUuid: string) => {
    try {
      const response = await axios.get(
        `${config.public.apiUrl}/event-service-proposition/${professionalServiceUuid}/show-event-service-for-professional`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.error('❌ Erreur getListProfessionalProposition:', error);
      return null;
    }
  };

  const getListProfessionalProposition = async (professionalServiceUuid: string) => {
    try {
      const response = await axios.get(
        `${config.public.apiUrl}/event-service-proposition/list-by-professional-service/${professionalServiceUuid}`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response?.data) {
        const propositions = response.data.data;

        // setPropositions(propositions);
        return propositions;
      }
    } catch (error) {
      console.error('❌ Erreur getListProfessionalProposition:', error);
      return null;
    }
  };

  const updateProfessionalMessage = async (uuid: string, message: string) => {
    try {
      const response = await axios.patch(
        `${config.public.apiUrl}/event-service-proposition/accept-by-professional/${uuid}`,
        { professionalMessage: message },
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response) {
        addSuccess('Félicitations, vous vous êtes positionné sur cet évènement');
        return response;
      }
    } catch (error) {
      addError({ message: error.message });
      console.error('❌ Erreur getListProfessionalProposition:', error);
      return null;
    }
  };

  return {
    getListProfessionalProposition,
    getListEventServiceProposition,
    updateProfessionalMessage,
  };
};
