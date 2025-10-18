import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';
import { useProfessionalProposition } from '~/services/UseProfessionalProposition';
import { useProfessionalService } from '../../services/UseProfessionalService';

const servicePropositionAvailable = ref(false);

export const useEventServiceProposition = () => {
  const { getListProfessionalServiceByProfessional } = useProfessionalService();
  const { getListProfessionalProposition, getListEventServiceProposition } =
    useProfessionalProposition();
  const { setServiceEventProposition } = usePropositionStore();

  const getServicePropositionForProfessional = async () => {
    try {
      const professionalServices = await getListProfessionalServiceByProfessional();
      console.log(professionalServices, 'professionalServices');

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

  return { getServicePropositionForProfessional, servicePropositionAvailable };
};
