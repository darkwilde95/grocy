import { CreateCategoryDto } from "@dto/category.dto";
import { ZodShape } from "@schemas/zod.helpers";
import { z } from "zod";

export const createCategorySchema = z
  .object<ZodShape<CreateCategoryDto>>({
    name: z.string({ error: "El nombre de la categoria es requerido" }),
  })
  .strict();

export const updateCategorySchema = createCategorySchema.partial().strict();
