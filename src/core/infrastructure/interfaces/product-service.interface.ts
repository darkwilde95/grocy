import { queryDto } from "@dto/common/query.dto";
import { createProductDto } from "@dto/product/create-product.dto";
import { updateProductDto } from "@dto/product/update-product.dto";
import { Product } from "@entities/product.entity";

export interface ProductService {
  create(product: createProductDto): Promise<Product>;
  update(id: string, product: updateProductDto): Promise<void>;
  findById(id: string): Promise<Product>;
  findAll(query?: queryDto): Promise<Product[]>;
  findByCategory(categoryId: string): Promise<Product[]>;
  delete(id: string): Promise<void>;
}
