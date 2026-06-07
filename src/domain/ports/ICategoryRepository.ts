import { Category } from "@/entities/Category";

export interface ICategoryRepository {
  create(category: Category): Promise<Category>;
  findById(categoryId: string): Promise<Category | null>;
  findByName(name: string): Promise<Category[]>;
  update(
    categoryId: string,
    category: Partial<Omit<Category, "id">>,
  ): Promise<Category | null>;
  remove(categoryId: string): Promise<Category | null>;
}
