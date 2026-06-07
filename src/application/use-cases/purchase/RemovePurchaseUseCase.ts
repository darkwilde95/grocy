import { IPurchaseRepository } from "@/ports/IPurchaseRepository";

export const RemovePurchaseUseCase =
  (purchaseRepo: IPurchaseRepository) => async (purchaseId: string) => {
    const removedPurchase = await purchaseRepo.remove(purchaseId);
    return removedPurchase;
  };
