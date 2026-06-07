import { ICategoryRepository } from "@/ports/ICategoryRepository";

export const RemoveCategoryUseCase =
  (categoryRepo: ICategoryRepository) => async (categoryId: string) => {
    const removedCategory = await categoryRepo.remove(categoryId);
    return removedCategory;
  };
