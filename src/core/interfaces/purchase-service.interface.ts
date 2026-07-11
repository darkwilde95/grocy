import { Order, Pagination } from "@/core/types";
import { CreateSupermarketDto } from "@dto/supermarket.dto";
import { Purchase } from "@entities/purchase.entity";

export interface PurchaseService {
  create(pruchase: CreateSupermarketDto): Promise<Purchase>;
  findAll(
    date: number,
    pagination: Pagination,
    order: Order<Purchase>,
  ): Promise<Purchase[]>;
  delete(id: string): Promise<void>;
}
