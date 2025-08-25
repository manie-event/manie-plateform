import type { Keywords } from '@/models/professionalService/Keywords';
import type { KeywordsDto } from '~/models/dto/KeywordsDto';

export const keyWordsDtoToKeywords = (data: KeywordsDto): Keywords => {
  return {
    id: data.id,
    uuid: data.uuid,
    sector: data.sector,
    category: data.category,
    value: data.value,
    isSelected: false,
  };
};
