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
        console.log(response.data, 'response event service proposition');

        return response.data;
      }
    } catch (error) {
      console.error('❌ Erreur getListProfessionalProposition:', error);
      return null;
    }
  };

  const getListPropositionByEventService = async (professionalServiceUuid: string) => {
    try {
      const response = await axios.get(
        `${config.public.apiUrl}/event-service-proposition/list-by-event-service/${professionalServiceUuid}`,
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

  const acceptedByClient = async (propositionUuid: string) => {
    console.log('propositionUuid', propositionUuid);

    try {
      const response = await axios.patch(
        `${config.public.apiUrl}/event-service-proposition/accept-by-organisator/${propositionUuid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response) {
        addSuccess("Félicitations, vous venez d'avoir accès au profil prestataire !");
        return response;
      }
    } catch (error) {
      addError({ message: error.message });
      console.error('❌ Erreur acceptedByClient:', error);
      return null;
    }
  };

  const declinedByClient = async (propositionUuid: string) => {
    try {
      const response = await axios.patch(
        `${config.public.apiUrl}/event-service-proposition/decline-by-organisator/${propositionUuid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response) {
        addSuccess('Vous avez décliné cette proposition');
        return response;
      }
    } catch (error) {
      addError({ message: error.message });
      console.error('❌ Erreur declinedByClient:', error);
      return null;
    }
  };

  return {
    getListProfessionalProposition,
    getListEventServiceProposition,
    getListPropositionByEventService,
    updateProfessionalMessage,
    acceptedByClient,
    declinedByClient,
  };
};
