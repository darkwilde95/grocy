import { CreateProductDto } from "@dto/product.dto";
import { ZodShape } from "@schemas/zod.helpers";
import { z } from "zod";

export const createProductSchema = z
  .object<ZodShape<CreateProductDto>>({
    name: z.string({ error: "El nombre es obligatorio" }),
    categoryId: z.string({
      error: "La categoria del producto es obligatoria ",
    }),
  })
  .strict();

export const updateProductSchema = createProductSchema.partial().strict();
