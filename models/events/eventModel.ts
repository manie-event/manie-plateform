export interface eventModel {
  uuid: string;
  organisatorUuid: string;
  isAlreadyCreated: boolean;
  status: string;
  budget: number;
  location: string;
  people: string;
  name: string;
  date: string[];
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
