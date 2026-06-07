import { Price } from "@/entities/Price";
import { IPriceRepository } from "@/ports/IPriceRepository";

interface UpdatePriceRequest {
  value: number;
  previouseValue: number;
  updatedAt: number;
}

export const UpdatePriceUseCase =
  (priceRepo: IPriceRepository) =>
  async (
    productId: string,
    superMarketId: string,
    request: UpdatePriceRequest,
  ) => {
    const prevPrice = new Price(
      productId,
      superMarketId,
      request.value,
      request.previouseValue,
      request.updatedAt,
    );
    const updatedPrice = await priceRepo.update(
      productId,
      superMarketId,
      request,
    );
    return updatedPrice;
  };
