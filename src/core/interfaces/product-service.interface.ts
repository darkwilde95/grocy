import { Pagination } from "@core/types";
import { CreateProductDto, UpdateProductDto } from "@dto/product.dto";
import { Product } from "@entities/product.entity";

export interface ProductService {
  create(product: CreateProductDto): Promise<Product>;
  update(id: string, product: UpdateProductDto): Promise<void>;
  findById(id: string): Promise<Product>;
  findAll(
    query: string,
    categoryId: string,
    pagination: Pagination,
  ): Promise<Product[]>;
  delete(id: string): Promise<void>;
}
