import { Purchase } from "@entities/purchase.entity";

export type CreatePurchaseDto = Omit<Purchase, "id" | "date">;
