import { Pagination } from "@core/types";
import { CreateCategoryDto, UpdateCategoryDto } from "@dto/category.dto";
import { Category } from "@entities/category.entity";
import { HttpClient } from "@infrastructure/interfaces/http-client.interface";
import { CategoryService } from "@interfaces/category-service.interface";

const categoriesUrl = "/categories";

export const categoriesHttpService = (
  httpClient: HttpClient,
): CategoryService => ({
  create: async (category: CreateCategoryDto): Promise<Category> => {
    return await httpClient.post<Category>(categoriesUrl, category);
  },
  update: async (id: string, category: UpdateCategoryDto): Promise<void> => {
    return await httpClient.put(`${categoriesUrl}/${id}`, category);
  },
  findById: async (id: string): Promise<Category> => {
    return await httpClient.get<Category>(`${categoriesUrl}/${id}`);
  },
  findAll: async (
    query: string,
    pagination: Pagination,
  ): Promise<Category[]> => {
    return await httpClient.get<Category[]>(categoriesUrl, {
      query,
      pagination,
    });
  },
  delete: async (id: string): Promise<void> => {
    return await httpClient.delete(`${categoriesUrl}/${id}`);
  },
});
