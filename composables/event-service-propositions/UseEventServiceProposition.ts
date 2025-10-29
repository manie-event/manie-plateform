import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';
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

      if (!Array.isArray(allEvents) || allEvents.length === 0) {
        console.warn('⚠️ Aucun événement trouvé.');
        return [];
      }

      const propositionList = await Promise.all(
        allEvents.map(async (event) => {
          try {
            // Vérifie la structure
            if (!event?.eventServices?.length) {
              console.warn(`⚠️ Aucun service trouvé pour l'événement ${event.uuid}`);
              return null;
            }

            const firstService = event.eventServices[0];
            if (!firstService?.uuid) {
              console.warn(`⚠️ Service sans UUID pour l'événement ${event.uuid}`);
              return null;
            }

            // Appel API sécurisé
            const serviceList = await getListPropositionByEventService(firstService.uuid);

            if (!Array.isArray(serviceList) || serviceList.length === 0) {
              console.warn(`⚠️ Aucune proposition trouvée pour service ${firstService.uuid}`);
              return null;
            }

            const serviceEngage = servicesFiltered.value?.[0]?.name ?? 'Service inconnu';

            return {
              ...serviceList[0],
              propositionUuid: serviceList[0].uuid,
              propositionStatus: serviceList[0].status,
              ...event,
              serviceEngage,
            };
          } catch (innerError) {
            console.error(`❌ Erreur sur event ${event.uuid}:`, innerError);
            return null;
          }
        })
      );

      const cleanList = propositionList.filter(Boolean);

      setServiceEventPropositionForClient(cleanList);

      return cleanList;
    } catch (error) {
      console.error('❌ Erreur getServicePropositionForClient:', error);
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
