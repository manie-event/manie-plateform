import type { SectorsDto } from '../dto/sectorsDto';

export interface ProfessionalServiceUuid {
  uuid: string;
  name: string;
  serviceUuid: string;
  professionalUuid: string;
  sector: SectorsDto;
  keywordsUuid: string[];
}
