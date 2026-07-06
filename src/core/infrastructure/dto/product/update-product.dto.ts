import { z } from "zod";
import { createProductSchema } from "./create-product.dto";

export const updateProductSchema = createProductSchema.partial();

export type updateProductDto = z.infer<typeof updateProductSchema>;
