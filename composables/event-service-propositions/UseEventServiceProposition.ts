import { useProfessionalServiceService } from '@/services/UseProfessionalServiceService';
import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';
import { useEventServiceService } from '~/services/UseEventServiceService';
import { useProfessionalProposition } from '~/services/UseProfessionalProposition';

const servicePropositionAvailable = ref(false);

export const useEventServiceProposition = () => {
  const { getListProfessionalServiceByProfessional } = useProfessionalServiceService();
  const {
    getListProfessionalProposition,
    getListEventServiceProposition,
    getListPropositionByEventService,
    acceptedByClient,
    declinedByClient,
  } = useProfessionalProposition();
  const { services, servicesFiltered } = storeToRefs(useSectorStore());
  const { getEventsPerOrganisator, getEventServiceList } = useEventServiceService();
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
      const allPropositions = await Promise.all(
        allEvents.map(async (event) => {
          if (!event?.eventServices?.length) return [];

          // Pour chaque service de l'événement
          const allServicePropositions = await Promise.all(
            event.eventServices.map(async (service) => {
              const propositions = await getListPropositionByEventService(service.uuid);

              // On cherche le nom du service via service.serviceUuid
              const engagedService = services.value.find((s) => s.uuid === service.serviceUuid);
              const serviceName = engagedService ? engagedService.name : 'Service inconnu';

              // Chaque prestataire ayant fait une proposition sur ce service
              return propositions.map((proposition) => ({
                ...event,
                ...proposition,
                propositionUuid: proposition.uuid,
                propositionStatus: proposition.status,
                eventUuid: event.uuid,
                eventName: event.name,
                // on ajoute le nom du service engagé
                serviceEngage: serviceName,
              }));
            })
          );

          // aplatissement : [[...], [...]] → [...]
          return allServicePropositions.flat();
        })
      );

      // Nettoyage : suppression des valeurs null
      const cleanList = allPropositions.flat().filter(Boolean);

      setServiceEventPropositionForClient(cleanList);
      addSuccess('Propositions de services récupérées avec succès.');
      return cleanList;
    } catch (error) {
      console.error('❌ Erreur getServicePropositionForClient:', error);
      addError({
        message: 'Une erreur est survenue lors de la récupération des propositions.',
      });
      throw error;
    }
  };

  //Pour récupérer les propositions dans le dashboard prestataire
  const getServicePropositionForProfessional = async () => {
    try {
      const professionalServices = await getListProfessionalServiceByProfessional();

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

          setServiceEventPropositionForPresta(propositionsWithEvents);
          return propositionsWithEvents.filter(Boolean);
        })
      );

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
      await acceptedByClient(propositionUuid);
      await getServicePropositionForClient();
      addSuccess('Proposition acceptée avec succès.');
    } catch (error) {
      addError({ message: "Une erreur est survenue lors de l'acceptation de la proposition." });
      console.error('❌ Erreur propositionAcceptedByClient:', error);
    }
  };

  const propositionDeclinedByClient = async (propositionUuid: string) => {
    try {
      await declinedByClient(propositionUuid);
      await getServicePropositionForClient();
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
