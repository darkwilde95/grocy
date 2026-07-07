import { CreateCategoryDto } from "@dto/category/create-category.dto";
import { UpdateCategoryDto } from "@dto/category/update-category.dto";
import { queryDto } from "@dto/common/query.dto";
import { Category } from "@entities/category.entity";
import { CategoryService } from "@interfaces/category-service.interface";
import { HttpClient } from "@interfaces/http-client.interface";

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
  findAll: async (query?: queryDto): Promise<Category[]> => {
    return await httpClient.get<Category[]>(categoriesUrl, query);
  },
  delete: async (id: string): Promise<void> => {
    return await httpClient.delete(`${categoriesUrl}/${id}`);
  },
});
