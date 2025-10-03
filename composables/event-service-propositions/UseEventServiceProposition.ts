import type { ProfessionalServiceUuid } from '~/models/professionalService/professionalServiceUuid';
import { useProfessionalProposition } from '~/services/UseProfessionalProposition';
import { useProfessionalService } from '../../services/UseProfessionalService';

export const useEventServiceProposition = () => {
  const { getListProfessionalService } = useProfessionalService();
  const { getListProfessionalProposition, getListEventServiceProposition } =
    useProfessionalProposition();
  const { setServiceEventProposition } = propositionStore();

  const getServicePropositionForProfessional = async () => {
    const professionalService = await getListProfessionalService();

    const eventList = await Promise.all(
      professionalService.map(async (ps: ProfessionalServiceUuid) => {
        const proposition = await getListProfessionalProposition(ps.uuid);
        return getListEventServiceProposition(proposition.uuid);
      })
    );

    setServiceEventProposition(eventList);
  };

  return { getServicePropositionForProfessional };
};
