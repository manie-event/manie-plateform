import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';

export const usePropositionStore = defineStore('proposition', () => {
  const serviceEventProposition = ref<EventModelForProposition[]>([]);
  const propositionsSelected = ref<EventModelForProposition[]>([]);
  const professionalServices = ref<ProfessionalServiceUuid[]>([]);

  const setServiceEventProposition = (newServiceEvent: EventModelForProposition[]) => {
    serviceEventProposition.value = newServiceEvent;
  };

  const setPropositions = (newPropositionSelected: EventModelForProposition) => {
    propositionsSelected.value.push(newPropositionSelected);
  };

  const setProfessionalServices = (newProfessionalService: ProfessionalServiceUuid[]) => {
    professionalServices.value = newProfessionalService;
  };
  return {
    serviceEventProposition,
    propositionsSelected,
    professionalServices,
    setServiceEventProposition,
    setPropositions,
    setProfessionalServices,
  };
});
