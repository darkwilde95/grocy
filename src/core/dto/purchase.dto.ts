import { PurchaseItem, PurchaseWithItems } from "@entities/purchase.entity";

export type CreatePurchaseWithItemsDto = Omit<PurchaseWithItems, "id" | "date">;

export type CreatePurchaseItemDto = Omit<PurchaseItem, "purchaseId">;
