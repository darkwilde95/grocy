import { Category } from "@/entities/Category";
import { ICategoryRepository } from "@/ports/ICategoryRepository";

interface CreateCategoryRequest {
  name: string;
}

export const CreateCategoryUseCase =
  (categoryRepo: ICategoryRepository) =>
  async (request: CreateCategoryRequest) => {
    const categoryDraft = new Category("", request.name);

    const newCategory = await categoryRepo.create(categoryDraft);
    return newCategory;
  };
