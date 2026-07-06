import { z } from "zod";

export const querySchema = z.object({
  query: z.string().min(0).optional(),
  offset: z.number().min(0),
  limit: z.number().min(10),
});

export type queryDto = z.infer<typeof querySchema>;
