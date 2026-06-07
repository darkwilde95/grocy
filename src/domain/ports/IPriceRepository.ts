import { Price } from "@/entities/Price";

export interface IPriceRepository {
  create(price: Price): Promise<Price>;
  findByProductAndSuperMarket(
    productId: string,
    superMarketId: string,
  ): Promise<Price | null>;
  update(
    productId: string,
    superMarketId: string,
    price: Partial<Omit<Price, "productId, superMarketId">>,
  ): Promise<Price | null>;
  remove(productId: string, superMarketId: string): Promise<Price | null>;
}
