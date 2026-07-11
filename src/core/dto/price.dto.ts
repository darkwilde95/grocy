import { Price } from "@entities/price.entity";

export type CreatePriceDto = Omit<Price, "updatedAt" | "previousValue">;

export type UpdatePriceDto = Partial<Omit<Price, "productId" | "updatedAt">>;
