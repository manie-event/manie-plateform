import type { SectorsDto } from '../dto/sectorsDto';

export interface ProfessionalServiceUpdate {
  uuid: string;
  name: string;
  serviceUuid: string;
  professionalUuid: string;
  sector: SectorsDto;
  keywordsUuid: string[];
  isVerified?: boolean;
}
