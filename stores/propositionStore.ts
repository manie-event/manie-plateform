export const propositionStore = defineStore('proposition', () => {
  const serviceEventProposition = ref<string[]>([]);

  const setServiceEventProposition = (newServiceEvent: string[]) => {
    serviceEventProposition.value = newServiceEvent;
    // console.log(serviceEventProposition.value, 'serviceEventProposition.value');
  };
  return {
    serviceEventProposition,
    setServiceEventProposition,
  };
});
