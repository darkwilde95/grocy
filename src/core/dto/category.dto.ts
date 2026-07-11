import { Category } from "@entities/category.entity";

export type CreateCategoryDto = Omit<Category, "id">;
export type UpdateCategoryDto = Partial<Omit<Category, "id">>;
