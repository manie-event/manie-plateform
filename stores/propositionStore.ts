import type { EventModelForProposition } from '~/models/events/eventModelForProposition';

export const usePropositionStore = defineStore('proposition', () => {
  const serviceEventProposition = ref<EventModelForProposition[]>([]);
  const propositionsSelected = ref<EventModelForProposition[]>([]);

  const setServiceEventProposition = (newServiceEvent: EventModelForProposition[]) => {
    serviceEventProposition.value = newServiceEvent;
  };

  const setPropositions = (newPropositionSelected: EventModelForProposition) => {
    propositionsSelected.value.push(newPropositionSelected);
  };
  return {
    serviceEventProposition,
    propositionsSelected,
    setServiceEventProposition,
    setPropositions,
  };
});
