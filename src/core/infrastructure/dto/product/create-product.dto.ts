import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string({ error: "El nombre es obligatorio" }),
  categoryId: z.string({ error: "La categoria del producto es obligatoria " }),
});

export type createProductDto = z.infer<typeof createProductSchema>;
