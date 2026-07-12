import { DateRange, Order, Pagination } from "@/core/types";
import { CreatePurchaseWithItemsDto } from "@dto/purchase.dto";
import { Purchase, PurchaseWithItems } from "@entities/purchase.entity";

export interface PurchaseService {
  create(purchase: CreatePurchaseWithItemsDto): Promise<Purchase>;
  findById(id: string): Promise<PurchaseWithItems>;
  findAll(
    range: DateRange,
    pagination: Pagination,
    order: Order<Purchase>,
  ): Promise<Purchase[]>;
  delete(id: string): Promise<void>;
}
