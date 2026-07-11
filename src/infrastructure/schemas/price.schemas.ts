import { CreatePriceDto } from "@dto/price.dto";
import { ZodShape } from "@schemas/zod.helpers";
import { z } from "zod";

export const createPriceSchema = z
  .object<ZodShape<CreatePriceDto>>({
    productId: z
      .string("El id del producto es requerido")
      .min(16, "El id del producto no tiene un formato válido"),
    supermarketId: z
      .string("El id del supermercado es requerido")
      .min(16, "El id del supermercado no tiene un formato válido"),
    value: z
      .number("El precio es requerido")
      .positive("El precio debe ser un número mayor a 0"),
  })
  .strict();

export const updatePriceSchema = createPriceSchema
  .omit({ productId: true })
  .partial()
  .strict();
