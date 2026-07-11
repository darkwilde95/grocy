import { z } from "zod";

export const orderSchema = z.object({
  field: z
    .string("El campo para ordenar no tiene un formato válido")
    .min(1, "El campo para ordenar es requerido"),
  order: z.enum(["ASC", "DESC"], "El orden solo puede ser de valor ASC o DESC"),
});
