export interface eventModelDto {
  $attributes: {
    id: number;
    uuid: string;
    type_event: string;
    organisatorUuid: string;
    status: string;
    budget: number;
    duration: string;
    location: string;
    formule: string;
    people: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    date: string[];
    organized_for: string;
    group_type: string;
    theme: string;
  };
  $preloaded: {
    eventServices: [
      {
        id: number;
        uuid: string;
        eventUuid: string;
        professionalServiceUuid?: string;
        sectorName: string;
        serviceUuid: string;
        status: string;
        keywordsUuid: string[];
      },
    ];
  };
}
