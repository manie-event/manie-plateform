import type { AxiosError } from 'axios';
import { useProfessionalStore } from '../../stores/professionalStore';

export const useProfessionalProfile = () => {
  const { removeProService, listProfessionalServiceByProfessional } = useProfessionalStore();
  const { addSuccess } = useToaster();

  const getListProfessionalServiceByProfessional = async () => {
    try {
      await listProfessionalServiceByProfessional();
      addSuccess('Récupération des services réalisée');
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  const removeServiceFromProfessionalProfile = async (serviceUuid: string) => {
    try {
      await removeProService(serviceUuid);
      addSuccess('Service correctement supprimé');
    } catch (err) {
      useDisplayErrorMessage(err as AxiosError);
    }
  };

  return {
    getListProfessionalServiceByProfessional,
    removeServiceFromProfessionalProfile,
  };
};
