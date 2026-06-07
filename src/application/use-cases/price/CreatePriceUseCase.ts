import { Price } from "@/entities/Price";
import { IPriceRepository } from "@/ports/IPriceRepository";

interface CreatePriceRequest {
  productId: string;
  superMarketId: string;
  value: number;
}

export const CreatePriceUseCase =
  (priceRepo: IPriceRepository) => async (request: CreatePriceRequest) => {
    const priceDraft = new Price(
      request.productId,
      request.superMarketId,
      request.value,
      0,
      Date.now(),
    );
    const newPrice = await priceRepo.create(priceDraft);
    return newPrice;
  };
