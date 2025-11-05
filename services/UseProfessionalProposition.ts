export const useProfessionalProposition = () => {
  const { addSuccess, addError } = useToaster();
  const api = useApi();

  const getListEventServiceProposition = async (professionalServiceUuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(
        `/event-service-proposition/${professionalServiceUuid}/show-event-service-for-professional`
      );
      return data;
    } catch (error) {
      console.error('❌ Erreur getListEventServiceProposition:', error);
      return null;
    }
  };

  const getListPropositionByEventService = async (professionalServiceUuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(
        `/event-service-proposition/list-by-event-service/${professionalServiceUuid}`
      );
      return data?.data ?? [];
    } catch (error) {
      console.error('❌ Erreur getListPropositionByEventService:', error);
      return null;
    }
  };

  const getListProfessionalProposition = async (professionalServiceUuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(
        `/event-service-proposition/list-by-professional-service/${professionalServiceUuid}`
      );
      return data?.data ?? [];
    } catch (error) {
      console.error('❌ Erreur getListProfessionalProposition:', error);
      return null;
    }
  };

  const updateProfessionalMessage = async (uuid: string, message: string) => {
    try {
      if (!api) return;
      const { data } = await api.patch(
        `/event-service-proposition/accept-by-professional/${uuid}`,
        { professionalMessage: message }
      );
      addSuccess('Félicitations, vous vous êtes positionné sur cet évènement 🎉');
      return data;
    } catch (error: any) {
      console.log(error, 'updateProfessionalMessage');

      addError({
        message: error.response.data.message || 'Erreur lors de la mise à jour du message.',
      });
      return null;
    }
  };

  const acceptedByClient = async (propositionUuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.patch(
        `/event-service-proposition/accept-by-organisator/${propositionUuid}`
      );
      addSuccess("Félicitations 🎊 Vous venez d'avoir accès au profil prestataire !");
      return data;
    } catch (error: any) {
      addError({ message: error.response.data.message || "Erreur lors de l'acceptation." });
      console.error('❌ Erreur acceptedByClient:', error);
      return null;
    }
  };

  const declinedByClient = async (propositionUuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.patch(
        `/event-service-proposition/decline-by-organisator/${propositionUuid}`
      );
      addSuccess('Vous avez décliné cette proposition 🙅‍♂️');
      return data;
    } catch (error: any) {
      addError({
        message: error.response.data.message || 'Erreur lors du refus de la proposition.',
      });
      console.error('❌ Erreur declinedByClient:', error);
      return null;
    }
  };

  return {
    getListEventServiceProposition,
    getListPropositionByEventService,
    getListProfessionalProposition,
    updateProfessionalMessage,
    acceptedByClient,
    declinedByClient,
  };
};
