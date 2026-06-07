import { IPurchaseRepository } from "@/ports/IPurchaseRepository";

export const CreatePurchaseUseCase =
  (purchaseRepo: IPurchaseRepository) => async () => {
    const newPurchase = await purchaseRepo.create();
    return newPurchase;
  };
