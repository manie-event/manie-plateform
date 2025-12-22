export interface eventModel {
  uuid: string;
  type_event: string;
  organisatorUuid: string;
  isAlreadyCreated: boolean;
  status?: string;
  date: string[];
  budget: number;
  formule?: string;
  location: string;
  name: string;
  people: number;
  eventServices: eventService[];
  group_type?: string;
  duration: string;
  theme?: string;
  organized_for: string;
}

export interface eventService {
  uuid: string;
  eventUuid: string;
  sectorName: string;
  professionalServiceUuid?: string;
  serviceUuid: string;
  status: string;
  keywordsUuid: string[];
}
