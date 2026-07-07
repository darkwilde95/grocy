export interface HttpError {
  message: string;
  validations: Record<string, string>;
}

export interface HttpResponse<T> {
  status: number;
  data: T;
  error?: HttpError;
}
