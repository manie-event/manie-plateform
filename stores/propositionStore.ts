import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';
import type { ClientServiceProposition } from '~/models/propositions/client-service-proposition';

export const usePropositionStore = defineStore('proposition', () => {
  const serviceEventProposition = ref<EventModelForProposition[]>([]);
  const professionalResponseProposition = ref<ClientServiceProposition[]>([]);
  const propositionsSelected = ref<EventModelForProposition[]>([]);
  const professionalServices = ref<ProfessionalServiceUuid[]>([]);

  const setServiceEventPropositionForPresta = (newServiceEvent: EventModelForProposition[]) => {
    serviceEventProposition.value = newServiceEvent;
  };

  const setPropositions = (newPropositionSelected: EventModelForProposition) => {
    propositionsSelected.value.push(newPropositionSelected);
  };

  const setProfessionalServices = (newProfessionalService: ProfessionalServiceUuid[]) => {
    professionalServices.value = newProfessionalService;
  };

  const setServiceEventPropositionForClient = (
    newClientPropositions: ClientServiceProposition[]
  ) => {
    professionalResponseProposition.value = newClientPropositions;
  };
  return {
    serviceEventProposition,
    propositionsSelected,
    professionalServices,
    professionalResponseProposition,
    setServiceEventPropositionForPresta,
    setServiceEventPropositionForClient,
    setPropositions,
    setProfessionalServices,
  };
});
