export interface errorModel {
  errors: errorDetail[];
}

export interface errorDetail {
  message: string;
  statusCode: number;
  field: string;
  meta?: {
    min?: number;
  };
  rule?: string;
}
