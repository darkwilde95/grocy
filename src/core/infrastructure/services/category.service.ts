import { CreateCategoryDto } from "@dto/category/create-category.dto";
import { UpdateCategoryDto } from "@dto/category/update-category.dto";
import { Category } from "@entities/category.entity";

export interface CategoryService {
  createCategory(category: CreateCategoryDto): Promise<Category>;
  updateCategory(category: UpdateCategoryDto): Promise<Category>;
}
