import { Product } from "@/entities/Product";
import { IProductRepository } from "@/ports/IProductRepository";

interface CreateProductRequest {
  name: string;
  categoryId: string;
  unit?: string;
}

export const CreateProductUseCase =
  (productRepo: IProductRepository) =>
  async (request: CreateProductRequest) => {
    const productDraft = new Product(
      "",
      request.name,
      request.categoryId,
      request.unit,
    );

    const newProduct = await productRepo.create(productDraft);
    return newProduct;
  };
