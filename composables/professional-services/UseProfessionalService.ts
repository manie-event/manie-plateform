import { useProfessionalServiceService } from '@/services/UseProfessionalServiceService';
import type { ProfessionalServiceCreate } from '~/models/professionalService/professionalServiceCreate';

export const useProfessionalService = () => {
  const { sendProfessionalServices } = useProfessionalServiceService();

  const professionalServices = async (service: ProfessionalServiceCreate) => {
    await sendProfessionalServices(service);
  };
  return {
    professionalServices,
  };
};
