export interface eventModel {
  uuid: string;
  organisatorUuid: string;
  isAlreadyCreated: boolean;
  status: string;
  date: string[];
  budget: number;
  location: string;
  name: string;
  people: string;
  eventServices: eventService[];
}

export interface eventService {
  uuid: string;
  eventUuid: string;
  professionalServiceUuid?: string;
  serviceUuid: string;
  status: string;
  keywordsUuid: string[];
}
