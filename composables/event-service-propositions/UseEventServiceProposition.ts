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
      if (!allEvents?.length) return [];

      console.log(allEvents, 'OLL');

      const eventWithServiceProposition = await Promise.all(
        allEvents.map(async (event) => {
          const serviceList = await getEventServiceList(event.uuid);

          // Filtrer les services actifs
          const activeServices = serviceList.filter(
            (service: EventServiceProposition) => String(service.status) !== 'completed'
          );
          // console.log(, 'activeServices');

          // Pour chaque service actif, on récupère ses propositions
          const servicesWithPropositions = await Promise.all(
            activeServices.map(async (service: EventServiceProposition) => {
              console.log(service.uuid, 'SERVICE UUID');

              const propositions = await getListPropositionByEventService(service.uuid);
              // console.log(propositions, 'PROPOSITION');

              // Si tu veux stocker les propositions à l’intérieur de chaque service :
              return {
                ...service,
                propositions: propositions || [],
              };
            })
          );

          // On retourne l’event enrichi avec ses services et leurs propositions
          return {
            ...event,
            services: servicesWithPropositions,
          };
        })
      );

      console.log(eventWithServiceProposition, '✅ eventWithServiceProposition');

      setServiceEventPropositionForClient(eventWithServiceProposition);
      return eventWithServiceProposition;
    } catch (error) {
      console.error('Error fetching service propositions:', error);
      throw error;
    }
  };

  const getServicePropositionForProfessional = async () => {
    try {
      const professionalServices = await getListProfessionalServiceByProfessional();

      const allPropositions = await Promise.all(
        professionalServices.map(async (service: ProfessionalServiceUuid) => {
          const propositionList = await getListProfessionalProposition(service.uuid);

          const propositionsWithEvents = await Promise.all(
            propositionList.map(async (prop) => {
              try {
                const event = await getListEventServiceProposition(prop.uuid);

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
      setServiceEventProposition(flattenedList);
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
