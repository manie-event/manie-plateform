import { useProfessionalServiceService } from '@/services/UseProfessionalServiceService';
import type { ProfessionalServiceCreate } from '~/models/professionalService/professionalServiceCreate';
import type { ProfessionalServiceUpdate } from '~/models/professionalService/professionalServiceUuid';
import { useProfessionalStore } from '~/stores/professionalStore';

export const useProfessionalService = () => {
  const {
    sendProfessionalServices,
    getListProfessionalServiceByProfessional,
    removeProfessionalService,
    updateProfessionalServices,
  } = useProfessionalServiceService();
  const { setProfessionalServices } = useProfessionalStore();

  const createProfessionalServices = async (service: ProfessionalServiceCreate) => {
    await sendProfessionalServices(service);
  };

  const deleteProfessionalServices = async (serviceUuid: string) => {
    await removeProfessionalService(serviceUuid);
  };

  const changeProfessionalServices = async (
    serviceUuid: string,
    newProfessionalService: ProfessionalServiceUpdate
  ) => {
    await updateProfessionalServices(serviceUuid, newProfessionalService);
  };

  const listProfessionalServiceByProfessional = async () => {
    const listProService = await getListProfessionalServiceByProfessional();
    setProfessionalServices(listProService);
  };

  return {
    createProfessionalServices,
    changeProfessionalServices,
    deleteProfessionalServices,
    listProfessionalServiceByProfessional,
  };
};
