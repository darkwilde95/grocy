export enum ErrorType {
  NETWORK = 0,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export class CustomError extends Error {
  constructor(
    public message: string,
    public status: ErrorType,
    public validations: Record<string, string> = {},
  ) {
    super(message || "Error desconocido");
  }
}
