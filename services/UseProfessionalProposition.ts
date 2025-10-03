export const useProfessionalProposition = () => {
  const config = useRuntimeConfig();
  const token = useCookie('token');

  const { creditTokensAfterPayment } = useCartStore();

  const getListEventServiceProposition = async (professionalServiceUuid: string) => {
    try {
      const response = await axios.get(
        `${config.public.apiUrl}/event-service-propposition/${professionalServiceUuid}/show-event-service-for-professional`,
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
        `${config.public.apiUrl}/event-service-propposition/list-by-professional-service/${professionalServiceUuid}`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response) {
        // getListEventServiceProposition(response.data.data[0].uuid);
        return response.data.data[0];
      }
    } catch (error) {
      console.error('❌ Erreur getListProfessionalProposition:', error);
      return null;
    }
  };

  const updateProfessionalMessage = async (uuid: string, message: string) => {
    try {
      const response = await axios.patch(
        `${config.public.apiUrl}/event-service-propposition/accept-by-professional/${uuid}`,
        { message: message },
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response) {
        creditTokensAfterPayment(-1);
        return response.data.data[0];
      }
    } catch (error) {
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
