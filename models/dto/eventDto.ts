export interface eventModelDto {
  id: number;
  uuid: string;
  organisatorUuid: string;
  status: string;
  budget: number;
  location: string;
  formule: string;
  people: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  date: string[];
  eventServices: eventService[];
}

export interface eventService {
  id: number;
  uuid: string;
  eventUuid: string;
  professionalServiceUuid?: string;
  serviceUuid: string;
  status: string;
  keywordsUuid: string[];
}
