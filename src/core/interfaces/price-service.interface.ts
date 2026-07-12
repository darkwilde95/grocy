import { Order } from "@core/types";
import { CreatePriceDto, UpdatePriceDto } from "@dto/price.dto";
import { Price, PriceWithSupermarket } from "@entities/price.entity";

export interface PriceService {
  create(price: CreatePriceDto): Promise<Price>;
  update(
    productId: string,
    supermarketId: string,
    price: UpdatePriceDto,
  ): Promise<void>;
  findByProduct(
    productId: string,
    order: Order<Price>,
  ): Promise<PriceWithSupermarket[]>;
  delete(supermarketId: string, productId: string): Promise<void>;
}
