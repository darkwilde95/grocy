import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string({ error: "El nombre de la categoria es requerido" }),
});

export type CreateCategoryDto = z.infer<typeof createCategorySchema>;
