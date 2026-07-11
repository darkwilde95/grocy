import { Pagination } from "@core/types";
import { CreateProductDto, UpdateProductDto } from "@dto/product.dto";
import { Product } from "@entities/product.entity";
import { HttpClient } from "@infrastructure/interfaces/http-client.interface";
import { ProductService } from "@interfaces/product-service.interface";

const productsUrl = "/products";

export const productHttpService = (httpClient: HttpClient): ProductService => ({
  create: async (product: CreateProductDto): Promise<Product> => {
    return await httpClient.post<Product>(productsUrl, product);
  },
  update: async (id: string, product: UpdateProductDto): Promise<void> => {
    return await httpClient.put(`${productsUrl}/${id}`, product);
  },
  findById: async (id: string): Promise<Product> => {
    return await httpClient.get<Product>(`${productsUrl}/${id}`);
  },
  findAll: async (
    query: string,
    categoryId: string,
    pagination: Pagination,
  ): Promise<Product[]> => {
    return await httpClient.get<Product[]>(productsUrl, {
      query,
      categoryId,
      ...pagination,
    });
  },
  delete: async (id: string): Promise<void> => {
    return await httpClient.delete(`${productsUrl}/${id}`);
  },
});
