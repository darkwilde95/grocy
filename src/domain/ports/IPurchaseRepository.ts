import { Purchase, PurchaseItem } from "@/entities/Purchase";

export interface IPurchaseRepository {
  create(): Promise<Purchase>;
  findById(purchaseId: string): Promise<Purchase | null>;
  addItem(item: PurchaseItem): Promise<Purchase | null>;
  updateItem(item: PurchaseItem): Promise<Purchase | null>;
  remove(purchaseId: string): Promise<Purchase | null>;
}
