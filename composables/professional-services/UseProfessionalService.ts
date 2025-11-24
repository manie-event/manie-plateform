import { useProfessionalServiceService } from '@/services/UseProfessionalServiceService';
import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';

export const useProfessionalService = () => {
  const { setProfessionalServices } = useProfessionalStore();
  const { sendProfessionalServices } = useProfessionalServiceService();

  const professionalServices = async (service: ProfessionalServiceUuid) => {
    await sendProfessionalServices(service);
  };
  return {
    professionalServices,
  };
};
