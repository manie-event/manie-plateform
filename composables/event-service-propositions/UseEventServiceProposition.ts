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
    acceptedByClient,
    declinedByClient,
  } = useProfessionalProposition();
  const { servicesFiltered } = storeToRefs(eventsStore());
  const { getEventsPerOrganisator, getEventServiceList } = useEventService();
  const { setServiceEventPropositionForPresta, setServiceEventPropositionForClient } =
    usePropositionStore();

  const getServicePropositionForClient = async () => {
    try {
      const allEvents = await getEventsPerOrganisator();

      if (!allEvents || allEvents.length === 0) {
        return [];
      }

      const propositionList = await Promise.all(
        allEvents.map(async (event) => {
          const serviceList = await getEventServiceList(event.uuid);

          const serviceListFiltered = serviceList.filter(
            (service: EventServiceProposition) =>
              service.status !== ('completed' as EventServiceProposition['status'])
          );

          if (!serviceListFiltered || serviceListFiltered.length === 0) {
            return [];
          }

          const serviceName = servicesFiltered.value.find((s) => s.name);

          const clientPropositions = await Promise.all(
            serviceList.map(async (service: EventServiceProposition) => {
              const propositions = await getListPropositionByEventService(service.uuid);
              console.log(propositions, 'propositions');

              const propositionsFiltered = propositions.filter(
                (p) => p.status !== 'pending' && p.status !== 'cancelled'
              );
              // Ajouter les infos de l'événement à chaque proposition
              return propositionsFiltered.map((proposition: any) => ({
                ...proposition,
                eventName: event.name,
                eventDate: event.date,
                serviceName: serviceName?.name,
              }));
            })
          );

          return clientPropositions.flat();
        })
      );
      setServiceEventPropositionForClient(propositionList.flat());

      console.log(propositionList.flat(), 'propositionList');

      return propositionList.flat();
    } catch (error) {
      console.error('Error fetching service propositions:', error);
      throw error;
    }
  };

  const getServicePropositionForProfessional = async () => {
    try {
      const professionalServices = await getListProfessionalServiceByProfessional();
      console.log(professionalServices, 'professionalServices');

      const allPropositions = await Promise.all(
        professionalServices.map(async (service: ProfessionalServiceUuid) => {
          const propositionList = await getListProfessionalProposition(service.uuid);
          console.log(propositionList, 'propositionList for service');

          const propositionsWithEvents = await Promise.all(
            propositionList.map(async (prop) => {
              try {
                const event = await getListEventServiceProposition(prop.uuid);
                console.log(event, 'event from propositionsWithEvents');

                if (!event) {
                  console.warn(`⚠️ Pas d'événement pour la proposition ${prop.uuid}`);
                  return null;
                }

                return {
                  ...event,
                  professionalServiceUuid: service.uuid,
                  proposition: {
                    uuid: prop.uuid,
                    status: prop.status,
                    professionalMessage: prop.professionalMessage,
                    tokens: prop.tokens,
                  },
                };
              } catch (error) {
                console.error(
                  `❌ Erreur lors de la récupération de l'événement pour ${prop.uuid}:`,
                  error
                );
                return null;
              }
            })
          );
          return propositionsWithEvents.filter(Boolean);
        })
      );

      const flattenedList = allPropositions.flat();

      servicePropositionAvailable.value = flattenedList.length > 0;
      setServiceEventPropositionForPresta(flattenedList);
    } catch (error) {
      console.error('❌ Erreur getServicePropositionForProfessional:', error);
      servicePropositionAvailable.value = false;
    }
  };

  const propositionAcceptedByClient = async (propositionUuid: string) => {
    try {
      // Appeler une méthode du service pour accepter la proposition
      await acceptedByClient(propositionUuid);
      // Mettre à jour la liste des propositions après l'acceptation
    } catch (error) {
      console.error('❌ Erreur propositionAcceptedByClient:', error);
    }
  };

  const propositionDeclinedByClient = async (propositionUuid: string) => {
    try {
      // Appeler une méthode du service pour refuser la proposition
      await declinedByClient(propositionUuid);
      // Mettre à jour la liste des propositions après le refus
    } catch (error) {
      console.error('❌ Erreur propositionDeclinedByClient:', error);
    }
  };

  return {
    getServicePropositionForProfessional,
    propositionAcceptedByClient,
    getServicePropositionForClient,
    propositionDeclinedByClient,
    servicePropositionAvailable,
  };
};
