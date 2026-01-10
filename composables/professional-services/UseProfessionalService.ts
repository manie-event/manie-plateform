import { useProfessionalServiceService } from '@/services/UseProfessionalServiceService';
import type { ProfessionalServiceCreate } from '~/models/professionalService/professionalServiceCreate';
import type { ProfessionalServiceUpdate } from '~/models/professionalService/professionalServiceUuid';
import { useProfessionalStore } from '~/stores/professionalStore';
import { useProfessional } from '../professional-user/UseProfessional';

export const useProfessionalService = () => {
  const proServiceStore = useProfessionalStore();
  const {
    sendProfessionalServices,
    getListProfessionalServiceByProfessional,
    removeProfessionalService,
    updateProfessionalServices,
  } = useProfessionalServiceService();
  const { setProfessionalServices } = proServiceStore;
  const { professionalServices } = storeToRefs(proServiceStore);
  const { professionalUser, professionalActivities } = storeToRefs(useProfilStore());
  const { editProfessionalProfileDetails } = useProfessional();

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

  const deleteServiceAndActivity = async (serviceUuid: string, activityIndex: number) => {
    try {
      await deleteProfessionalServices(serviceUuid);

      const base = professionalUser.value ? { ...professionalUser.value } : {};
      const payload =
        activityIndex === 0
          ? { ...base, mainActivity: '' }
          : activityIndex === 1
            ? { ...base, secondActivity: null }
            : { ...base, thirdActivity: null };

      console.log(payload, 'PAYLOAD');
      await editProfessionalProfileDetails(payload);

      professionalActivities.value.splice(activityIndex, 1);

      return { success: true };
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      return { success: false, error };
    }
  };

  const professionalServiceFilteredByVerification = computed(() =>
    professionalServices.value.filter((service, index) => {
      console.log('PASSE PAR LA');
      if (service.isVerified == false) {
        deleteServiceAndActivity(service.uuid, index);
      }
    })
  );

  return {
    createProfessionalServices,
    changeProfessionalServices,
    deleteProfessionalServices,
    deleteServiceAndActivity,
    listProfessionalServiceByProfessional,
    professionalServiceFilteredByVerification,
  };
};
