export class ValidationError extends Error {
  public fields: Record<string, string>;

  constructor(fields: Record<string, string>) {
    super("Error de validación");
    this.name = "ValidationError";
    this.fields = fields;
  }
}
