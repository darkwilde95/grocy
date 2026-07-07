import { queryDto } from "@dto/common/query.dto";
import { createProductDto } from "@dto/product/create-product.dto";
import { updateProductDto } from "@dto/product/update-product.dto";
import { Product } from "@entities/product.entity";
import { HttpClient } from "@interfaces/http-client.interface";
import { ProductService } from "@interfaces/product-service.interface";

const productsUrl = "/products";

export const productHttpService = (httpClient: HttpClient): ProductService => ({
  create: async (product: createProductDto): Promise<Product> => {
    return await httpClient.post<Product>(productsUrl, product);
  },
  update: async (id: string, product: updateProductDto): Promise<void> => {
    return await httpClient.put(`${productsUrl}/${id}`, product);
  },
  findById: async (id: string): Promise<Product> => {
    return await httpClient.get<Product>(`${productsUrl}/${id}`);
  },
  findAll: async (query?: queryDto): Promise<Product[]> => {
    return await httpClient.get<Product[]>(productsUrl, query);
  },
  findByCategory: async (categoryId: string): Promise<Product[]> => {
    return await httpClient.get<Product[]>(
      `${productsUrl}/byCategory/${categoryId}`,
    );
  },
  delete: async (id: string): Promise<void> => {
    return await httpClient.delete(`${productsUrl}/${id}`);
  },
});
