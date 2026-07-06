import { queryDto } from "@dto/common/query.dto";
import { createProductDto } from "@dto/product/create-product.dto";
import { updateProductDto } from "@dto/product/update-product.dto";
import { Product } from "@entities/product.entity";
import { ProductService } from "@interfaces/product-service.interface";

export const productSqlService: ProductService = {
  createProduct: async (product: createProductDto): Promise<Product> => {
    throw new Error("Function not implemented.");
  },
  updateProduct: async (product: updateProductDto): Promise<Product> => {
    throw new Error("Function not implemented.");
  },
  findProductById: async (id: string): Promise<Product> => {
    throw new Error("Function not implemented.");
  },
  findAllProducts: async (query?: queryDto): Promise<Product[]> => {
    throw new Error("Function not implemented.");
  },
  findProductsByCategory: async (categoryId: string): Promise<Product[]> => {
    throw new Error("Function not implemented.");
  },
};
