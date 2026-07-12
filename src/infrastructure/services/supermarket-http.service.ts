import { Pagination } from "@core/types";
import {
  CreateSupermarketDto,
  UpdateSupermarketDto,
} from "@dto/supermarket.dto";
import { Supermarket } from "@entities/supermarket.entity";
import { HttpClient } from "@infrastructure/interfaces/http-client.interface";
import { SupermarketService } from "@interfaces/supermarket-service.interface";

const supermarketsUrl = "/supermarkets";

export const categoriesHttpService = (
  httpClient: HttpClient,
): SupermarketService => ({
  create: async (supermarket: CreateSupermarketDto): Promise<Supermarket> => {
    return await httpClient.post<Supermarket>(supermarketsUrl, supermarket);
  },
  update: async (
    id: string,
    supermarket: UpdateSupermarketDto,
  ): Promise<void> => {
    return await httpClient.put(`${supermarketsUrl}/${id}`, supermarket);
  },
  findById: async (id: string): Promise<Supermarket> => {
    return await httpClient.get<Supermarket>(`${supermarketsUrl}/${id}`);
  },
  findAll: async (
    query: string,
    pagination: Pagination,
  ): Promise<Supermarket[]> => {
    return await httpClient.get<Supermarket[]>(supermarketsUrl, {
      query,
      ...pagination,
    });
  },
  delete: async (id: string): Promise<void> => {
    return await httpClient.delete(`${supermarketsUrl}/${id}`);
  },
});
