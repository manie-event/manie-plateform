export interface errorModel {
  errors: errorDetail[];
}

export interface errorDetail {
  id?: number;
  message: string;
  statusCode?: number;
  field?: string;
  meta?: {
    min?: number;
  };
  rule?: string;
}

interface SimpleError {
  message: string;
}

export type ServerError = errorModel | SimpleError;
