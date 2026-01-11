import { defineStore } from 'pinia';
import type { ProfessionalServiceUpdate } from '~/models/professionalService/professionalServiceUuid';

export const useProfessionalStore = defineStore('professional-service', () => {
  const professionalServices = ref<ProfessionalServiceUpdate[]>([]);

  const setProfessionalServices = (newProfessionalService: ProfessionalServiceUpdate[]) => {
    professionalServices.value = newProfessionalService;
  };

  return {
    professionalServices,
    setProfessionalServices,
  };
});
