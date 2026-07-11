import { Pagination } from "@core/types";
import { CreateCategoryDto, UpdateCategoryDto } from "@dto/category.dto";
import { Category } from "@entities/category.entity";

export interface CategoryService {
  create(category: CreateCategoryDto): Promise<Category>;
  update(id: string, category: UpdateCategoryDto): Promise<void>;
  findById(id: string): Promise<Category>;
  findAll(query: string, pagination: Pagination): Promise<Category[]>;
  delete(id: string): Promise<void>;
}
