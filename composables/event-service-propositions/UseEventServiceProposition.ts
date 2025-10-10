import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';
import type { EventServiceProposition } from '~/models/propositions/event-service-proposition';
import { useEventService } from '~/services/UseEventService';
import { useProfessionalProposition } from '~/services/UseProfessionalProposition';
import { useProfessionalService } from '../../services/UseProfessionalService';

const servicePropositionAvailable = ref(false);

export const useEventServiceProposition = () => {
  const { getListProfessionalServiceByProfessional } = useProfessionalService();
  const {
    getListProfessionalProposition,
    getListEventServiceProposition,
    getListPropositionByEventService,
  } = useProfessionalProposition();
  const { servicesFiltered } = storeToRefs(eventsStore());
  const { getEventsPerOrganisator, getEventServiceList } = useEventService();
  const { setServiceEventPropositionForPresta, setServiceEventPropositionForClient } =
    usePropositionStore();

  const getServicePropositionForClient = async () => {
    try {
      const allEvents = await getEventsPerOrganisator();

      if (!allEvents || allEvents.length === 0) {
        console.log('No events found');
        return [];
      }

      const propositionList = await Promise.all(
        allEvents.map(async (event) => {
          const serviceList = await getEventServiceList(event.uuid);
          console.log(serviceList, 'serviceList');

          const serviceListFiltered = serviceList.filter(
            (service: EventServiceProposition) =>
              service.status !== ('completed' as EventServiceProposition['status'])
          );
          console.log('Services for event:', serviceListFiltered);

          if (!serviceListFiltered || serviceListFiltered.length === 0) {
            return [];
          }

          const serviceName = servicesFiltered.value.find((s) => s.name);

          const clientPropositions = await Promise.all(
            serviceList.map(async (service: EventServiceProposition) => {
              const propositions = await getListPropositionByEventService(service.uuid);
              const propositionsFiltered = propositions.filter((p) => p.status !== 'pending');
              // Ajouter les infos de l'événement à chaque proposition
              return propositionsFiltered.map((proposition: any) => ({
                ...proposition,
                eventName: event.name,
                eventDate: event.date,
                serviceName: serviceName?.name,
              }));
            })
          );

          console.log('Client propositions:', clientPropositions.flat());
          return clientPropositions.flat();
        })
      );
      setServiceEventPropositionForClient(propositionList.flat());
      console.log('propositionList:', propositionList.flat());

      return propositionList.flat();
    } catch (error) {
      console.error('Error fetching service propositions:', error);
      throw error;
    }
  };

  const getServicePropositionForProfessional = async () => {
    try {
      const professionalServices = await getListProfessionalServiceByProfessional();

      const eventList = await Promise.all(
        professionalServices.map(async (service: ProfessionalServiceUuid) => {
          const propositionList = await getListProfessionalProposition(service.uuid);
          const proposition = Array.isArray(propositionList) ? propositionList[0] : propositionList;
          if (!proposition || !proposition.uuid) {
            console.warn(
              `⚠️ Pas de proposition valide pour le service ${service.uuid}`,
              proposition
            );
            return null;
          }

          const event = await getListEventServiceProposition(proposition.uuid);

          if (!event) {
            console.warn(`⚠️ Pas d'événement pour la proposition ${proposition.uuid}`);
            return null;
          }

          return {
            ...event,
            professionalServiceUuid: service.uuid,
            proposition: {
              uuid: proposition.uuid,
              status: proposition.status,
              professionalMessage: proposition.professionalMessage,
              tokens: proposition.tokens,
            },
          };
        })
      );

      const cleanList = eventList.filter(Boolean);
      servicePropositionAvailable.value = true;
      setServiceEventPropositionForPresta(cleanList);
    } catch (error) {
      console.error('❌ Erreur getServicePropositionForProfessional:', error);
    }
  };

  return {
    getServicePropositionForProfessional,
    getServicePropositionForClient,
    servicePropositionAvailable,
  };
};
