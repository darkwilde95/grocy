import { ICategoryRepository } from "@/ports/ICategoryRepository";

interface UpdateCategoryRequest {
  name: string;
}

export const UpdateCategoryUseCase =
  (categoryRepo: ICategoryRepository) =>
  async (categoryId: string, request: UpdateCategoryRequest) => {
    const updatedCategory = await categoryRepo.update(categoryId, request);
    return updatedCategory;
  };
