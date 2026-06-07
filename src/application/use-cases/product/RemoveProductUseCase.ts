import { IProductRepository } from "@/ports/IProductRepository";

export const RemoveProductUseCase =
  (productRepo: IProductRepository) => async (productId: string) => {
    const removedProduct = await productRepo.remove(productId);
    return removedProduct;
  };
