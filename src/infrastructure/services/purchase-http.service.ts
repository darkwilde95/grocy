import { DateRange, Order, Pagination } from "@core/types";
import { CreatePurchaseWithItemsDto } from "@dto/purchase.dto";
import { Purchase, PurchaseWithItems } from "@entities/purchase.entity";
import { HttpClient } from "@infrastructure/interfaces/http-client.interface";
import { PurchaseService } from "@interfaces/purchase-service.interface";

const purchaseUrl = "/purchases";

export const purchaseHttpService = (
  httpClient: HttpClient,
): PurchaseService => ({
  create: async (purchase: CreatePurchaseWithItemsDto): Promise<Purchase> => {
    return await httpClient.post<Purchase>(purchaseUrl, purchase);
  },
  findById: async (id: string): Promise<PurchaseWithItems> => {
    return await httpClient.get<PurchaseWithItems>(`${purchaseUrl}/${id}`);
  },
  findAll: async (
    range: DateRange,
    pagination: Pagination,
    order: Order<Purchase>,
  ): Promise<Purchase[]> => {
    return await httpClient.get<Purchase[]>(purchaseUrl, {
      ...range,
      ...pagination,
      ...order,
    });
  },
  delete: async (id: string): Promise<void> => {
    return await httpClient.delete(`${purchaseUrl}/${id}`);
  },
});
