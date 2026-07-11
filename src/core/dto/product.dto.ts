import { Product } from "@entities/product.entity";

export type CreateProductDto = Omit<Product, "id">;

export type UpdateProductDto = Partial<Omit<Product, "id">>;
