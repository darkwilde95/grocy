import { createProductDto } from "@dto/product/create-product.dto";
import { UpdateProductDto } from "@dto/product/update-product.dto";
import { Product } from "@entities/product.entity";

export interface ProductService {
  createProduct(product: createProductDto): Promise<Product>;
  updateProduct(product: UpdateProductDto): Promise<Product>;
}
