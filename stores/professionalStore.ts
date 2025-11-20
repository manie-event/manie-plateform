import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';
import { useProfessionalService } from '~/services/UseProfessionalService';

export const useProfessionalStore = defineStore('professional-service', () => {
  const { removeProfessionalService, getListProfessionalServiceByProfessional } =
    useProfessionalService();

  const professionalServices = ref<ProfessionalServiceUuid[]>([]);

  const setProfessionalServices = (newProfessionalService: ProfessionalServiceUuid[]) => {
    professionalServices.value = newProfessionalService;
  };

  const listProfessionalServiceByProfessional = async () => {
    const proService = await getListProfessionalServiceByProfessional();
    professionalServices.value = proService;
  };

  const removeProService = async (serviceUuid: string) => {
    const res = await removeProfessionalService(serviceUuid);

    if (res !== null) {
      professionalServices.value = professionalServices.value.filter(
        (service) => service.uuid !== serviceUuid
      );
    }
  };

  return {
    professionalServices,
    setProfessionalServices,
    listProfessionalServiceByProfessional,
    removeProService,
  };
});
