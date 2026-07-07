import { CreateCategoryDto } from "@dto/category/create-category.dto";
import { UpdateCategoryDto } from "@dto/category/update-category.dto";
import { queryDto } from "@dto/common/query.dto";
import { Category } from "@entities/category.entity";

export interface CategoryService {
  create(category: CreateCategoryDto): Promise<Category>;
  update(id: string, category: UpdateCategoryDto): Promise<void>;
  findById(id: string): Promise<Category>;
  findAll(query?: queryDto): Promise<Category[]>;
  delete(id: string): Promise<void>;
}
