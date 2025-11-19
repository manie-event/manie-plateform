import type { AxiosError } from 'axios';

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
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const getListPropositionByEventService = async (professionalServiceUuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(
        `/event-service-proposition/list-by-event-service/${professionalServiceUuid}`
      );

      return data?.data ?? [];
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const getListProfessionalProposition = async (professionalServiceUuid: string) => {
    try {
      if (!api) return;
      const { data } = await api.get(
        `/event-service-proposition/list-by-professional-service/${professionalServiceUuid}`
      );
      return data?.data ?? [];
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
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
