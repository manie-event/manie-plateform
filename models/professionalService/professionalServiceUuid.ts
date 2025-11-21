import type { SectorsDto } from '../dto/sectorsDto';
export interface ProfessionalServiceUuid {
  uuid: string;
  linkUuid: string;
  name: string;
  serviceUuid: string;
  professionalUuid: string;
  sector: SectorsDto;
  keywordsUuid: string[];
  isVerified?: boolean;
}
