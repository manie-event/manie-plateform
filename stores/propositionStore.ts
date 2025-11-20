import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import type { ClientServiceProposition } from '~/models/propositions/client-service-proposition';

export const usePropositionStore = defineStore('proposition', () => {
  const serviceEventProposition = ref<EventModelForProposition[]>([]);
  const professionalResponseProposition = ref<ClientServiceProposition[]>([]);
  const propositionsSelected = ref<EventModelForProposition[]>([]);

  const setServiceEventPropositionForPresta = (newServiceEvent: EventModelForProposition[]) => {
    serviceEventProposition.value = newServiceEvent;
  };

  const setPropositions = (newPropositionSelected: EventModelForProposition) => {
    propositionsSelected.value.push(newPropositionSelected);
  };

  const setServiceEventPropositionForClient = (
    newClientPropositions: ClientServiceProposition[]
  ) => {
    professionalResponseProposition.value = newClientPropositions;
  };
  return {
    serviceEventProposition,
    propositionsSelected,
    professionalResponseProposition,
    setServiceEventPropositionForPresta,
    setServiceEventPropositionForClient,
    setPropositions,
  };
});
