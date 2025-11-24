import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';

export const useProfessionalStore = defineStore('professional-service', () => {
  const professionalServices = ref<ProfessionalServiceUuid[]>([]);

  const setProfessionalServices = (newProfessionalService: ProfessionalServiceUuid[]) => {
    professionalServices.value = newProfessionalService;
    console.log(professionalServices.value, 'CHANGE professionalServices.value');
  };

  return {
    professionalServices,
    setProfessionalServices,
  };
});
