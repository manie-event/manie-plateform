import { useProfessionalServiceService } from '@/services/UseProfessionalServiceService';
import { storeToRefs } from 'pinia';
import { useProfessionalStore } from '../../stores/professionalStore';

export const useProfessionalProfile = () => {
  const professionalStore = useProfessionalStore();
  const { setProfessionalServices } = professionalStore;
  const { professionalServices } = storeToRefs(professionalStore);
  const { getListProfessionalServiceByProfessional, removeProfessionalService } =
    useProfessionalServiceService();

  const listProfessionalServiceByProfessional = async () => {
    const listProService = await getListProfessionalServiceByProfessional();
    setProfessionalServices(listProService);
  };

  const removeServiceFromProfessionalProfile = async (serviceUuid: string) => {
    const res = await removeProfessionalService(serviceUuid);

    if (res !== null) {
      professionalServices.value = professionalServices.value.filter(
        (service) => service.uuid !== serviceUuid
      );
    }
  };

  return {
    listProfessionalServiceByProfessional,
    removeServiceFromProfessionalProfile,
  };
};
