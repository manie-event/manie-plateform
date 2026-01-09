import { useProfessionalServiceService } from '@/services/UseProfessionalServiceService';
import type { ProfessionalServiceCreate } from '~/models/professionalService/professionalServiceCreate';
import { useProfessionalStore } from '~/stores/professionalStore';

export const useProfessionalService = () => {
  const {
    sendProfessionalServices,
    getListProfessionalServiceByProfessional,
    removeProfessionalService,
  } = useProfessionalServiceService();
  const { setProfessionalServices } = useProfessionalStore();

  const createProfessionalServices = async (service: ProfessionalServiceCreate) => {
    await sendProfessionalServices(service);
  };
  const deleteProfessionalServices = async (serviceUuid: string) => {
    await removeProfessionalService(serviceUuid);
  };
  const listProfessionalServiceByProfessional = async () => {
    const listProService = await getListProfessionalServiceByProfessional();
    setProfessionalServices(listProService);
  };

  return {
    createProfessionalServices,
    deleteProfessionalServices,
    listProfessionalServiceByProfessional,
  };
};
