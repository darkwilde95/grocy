import { queryDto } from "@dto/common/query.dto";
import { createProductDto } from "@dto/product/create-product.dto";
import { updateProductDto } from "@dto/product/update-product.dto";
import { Product } from "@entities/product.entity";

export interface ProductService {
  createProduct(product: createProductDto): Promise<Product>;
  updateProduct(product: updateProductDto): Promise<Product>;
  findProductById(id: string): Promise<Product>;
  findAllProducts(query?: queryDto): Promise<Product[]>;
  findProductsByCategory(categoryId: string): Promise<Product[]>;
}
