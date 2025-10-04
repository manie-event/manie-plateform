import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';
import { useProfessionalProposition } from '~/services/UseProfessionalProposition';
import { useProfessionalService } from '../../services/UseProfessionalService';

export const useEventServiceProposition = () => {
  const { getListProfessionalServiceByProfessional } = useProfessionalService();
  const { getListProfessionalProposition, getListEventServiceProposition } =
    useProfessionalProposition();
  const { setServiceEventProposition } = usePropositionStore();

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

      setServiceEventProposition(cleanList);
    } catch (error) {
      console.error('❌ Erreur getServicePropositionForProfessional:', error);
    }
  };

  return { getServicePropositionForProfessional };
};
