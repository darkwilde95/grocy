import { z } from "zod";

export const paginationSchema = z.object({
  offset: z
    .number("El desplazamiento es requerido")
    .int("El desplazamiento debe ser un número entero")
    .nonnegative("El desplazamiento debe ser un número mayor o igual a 0"),
  limit: z
    .number("El limite es requerido")
    .int("El límite debe ser un número entero")
    .min(10, "El valor mínimo del limite es 10"),
});
