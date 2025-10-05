export interface EventModelForProposition {
  id: number;
  uuid: string;
  organisator_uuid: string;
  status: string;
  budget: number;
  location: string;
  people: string;
  created_at: string;
  updated_at: string;
  name: string;
  date: string[];
  theme: string;
  group_type: string;
  duration: string;
  organized_for: string;
  proposition: PropositionInterface;
}

export interface PropositionInterface {
  uuid: string;
  status: string;
  professionalMessage: string;
  tokens: number;
}
