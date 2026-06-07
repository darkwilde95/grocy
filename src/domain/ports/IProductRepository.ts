import { Product } from "@/entities/Product";

export interface IProductRepository {
  create(product: Product): Promise<Product>;
  findById(productId: string): Promise<Product | null>;
  getAll(filter?: Record<string, unknown>): Promise<Product[]>;
  update(
    productId: string,
    product: Partial<Omit<Product, "id">>,
  ): Promise<Product | null>;
  remove(productId: string): Promise<Product | null>;
}
