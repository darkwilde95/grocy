import { z } from "zod";

export type ZodShape<T> = {
  [K in keyof T]: z.ZodType<T[K]>;
};
