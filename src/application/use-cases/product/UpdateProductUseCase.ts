import { IProductRepository } from "@/ports/IProductRepository";

interface UpdateProductRequest {
  name?: string;
  categoryId?: string;
  unit?: string;
}

export const UpdateProductUseCase =
  (productRepo: IProductRepository) =>
  async (productId: string, request: UpdateProductRequest) => {
    const updatedProduct = await productRepo.update(productId, request);
    return updatedProduct;
  };
