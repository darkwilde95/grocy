import { Order } from "@core/types";
import { CreatePriceDto, UpdatePriceDto } from "@dto/price.dto";
import { Price, PriceWithSupermarket } from "@entities/price.entity";
import { HttpClient } from "@infrastructure/interfaces/http-client.interface";
import { PriceService } from "@interfaces/price-service.interface";

const pricesUrl = "/prices";

export const priceHttpService = (httpClient: HttpClient): PriceService => ({
  create: async (price: CreatePriceDto): Promise<Price> => {
    return await httpClient.post<Price>(pricesUrl, price);
  },
  update: async (
    productId: string,
    supermarketId: string,
    price: UpdatePriceDto,
  ): Promise<void> => {
    return await httpClient.put(
      `${pricesUrl}/${productId}/${supermarketId}`,
      price,
    );
  },
  findByProduct: async (
    productId: string,
    order: Order<Price>,
  ): Promise<PriceWithSupermarket[]> => {
    return await httpClient.get<PriceWithSupermarket[]>(pricesUrl, order);
  },
  delete: async (supermarketId: string, productId: string): Promise<void> => {
    return await httpClient.delete(
      `${pricesUrl}/${productId}/${supermarketId}`,
    );
  },
});
