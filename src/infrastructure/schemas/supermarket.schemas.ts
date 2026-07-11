import { CreateSupermarketDto } from "@dto/supermarket.dto";
import { ZodShape } from "@schemas/zod.helpers";
import { z } from "zod";

export const createSupermarketSchema = z
  .object<ZodShape<CreateSupermarketDto>>({
    name: z.string().min(1, "El nombre del supermercado es requerido"),
  })
  .strict();

export const UpdateSupermarketSchema = createSupermarketSchema
  .partial()
  .strict();
