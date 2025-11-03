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

  const { addSuccess, addError } = useToaster();

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
      addSuccess('Propositions de services récupérées avec succès.');
      return cleanList;
    } catch (error) {
      addError({ message: 'Une erreur est survenue lors de la récupération des propositions.' });
      console.error('❌ Erreur getServicePropositionForClient:', error);
      throw error;
    }
  };

  //Pour récupérer les propositions dans le dashboard prestataire
  const getServicePropositionForProfessional = async () => {
    try {
      const professionalServices = await getListProfessionalServiceByProfessional();

      console.log(professionalServices, 'professionalServices');

      // ✅ On s'assure d'avoir un tableau
      const servicesArray = Array.isArray(professionalServices)
        ? professionalServices
        : (professionalServices?.data ?? []);

      if (servicesArray.length === 0) {
        console.warn('Aucun service professionnel trouvé pour ce profil.');
        return [];
      }

      const allPropositions = await Promise.all(
        servicesArray.map(async (service: ProfessionalServiceUuid) => {
          const propositionList = await getListProfessionalProposition(service.uuid);

          console.log(propositionList, 'propositionList');

          const propositionsWithEvents = await Promise.all(
            (propositionList ?? []).map(async (prop) => {
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
                addError({
                  message: `Une erreur est survenue lors de la récupération de l'événement pour une proposition.`,
                });
                return null;
              }
            })
          );

          console.log(propositionsWithEvents, 'propositionsWithEvents');
          setServiceEventPropositionForPresta(propositionsWithEvents);
          return propositionsWithEvents.filter(Boolean);
        })
      );

      addSuccess('Événement créé avec succès.');
      return allPropositions.flat(); // ✅ utile pour aplatir le tableau final
    } catch (error) {
      addError({
        message: `Une erreur est survenue lors de la récupération de l'événement pour une proposition.`,
      });
      return [];
    }
  };

  const propositionAcceptedByClient = async (propositionUuid: string) => {
    try {
      // Appeler une méthode du service pour accepter la proposition
      await acceptedByClient(propositionUuid);
      // Mettre à jour la liste des propositions après l'acceptation
      addSuccess('Proposition acceptée avec succès.');
    } catch (error) {
      addError({ message: "Une erreur est survenue lors de l'acceptation de la proposition." });
      console.error('❌ Erreur propositionAcceptedByClient:', error);
    }
  };

  const propositionDeclinedByClient = async (propositionUuid: string) => {
    try {
      // Appeler une méthode du service pour refuser la proposition
      await declinedByClient(propositionUuid);
      // Mettre à jour la liste des propositions après le refus
      addSuccess('Proposition refusée avec succès.');
    } catch (error) {
      addError({ message: 'Une erreur est survenue lors du refus de la proposition.' });
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
