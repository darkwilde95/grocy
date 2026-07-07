import {
  insertHelper,
  paginationHelper,
  updateHelper,
} from "@clients/db/sqlite.client";
import { queryDto } from "@dto/common/query.dto";
import { createProductDto } from "@dto/product/create-product.dto";
import { updateProductDto } from "@dto/product/update-product.dto";
import { Product } from "@entities/product.entity";
import { CustomError, ErrorType } from "@infrastructure/error/CustomError";
import { ProductService } from "@interfaces/product-service.interface";
import { SQLiteDatabase } from "expo-sqlite";

const tableName = "products";

export const productSqlService = (db: SQLiteDatabase): ProductService => ({
  create: async (product: createProductDto): Promise<Product> => {
    const { sql, values } = insertHelper(tableName, product);
    const createdRow = await db.getFirstAsync<{ id: string }>(sql, values);

    if (!createdRow)
      throw new CustomError(
        "No se pudo crear el producto",
        ErrorType.INTERNAL_ERROR,
      );

    return {
      id: createdRow.id,
      name: product.name,
      categoryId: product.categoryId,
    };
  },

  update: async (id: string, product: updateProductDto): Promise<void> => {
    const helpers = updateHelper(tableName, { id }, product);
    if (!helpers) return;

    const result = await db.runAsync(helpers.sql, helpers.values);

    if (result.changes === 0) {
      throw new CustomError(
        `No se encontró ningún producto con el ID: ${id}`,
        ErrorType.NOT_FOUND,
      );
    }
  },
  findById: async (id: string): Promise<Product> => {
    const row = await db.getFirstAsync<Product>(
      `SELECT * FROM products WHERE id = ?`,
      [id],
    );
    if (!row)
      throw new CustomError("Producto no encontrado", ErrorType.NOT_FOUND);
    return row;
  },
  findAll: async (query?: queryDto): Promise<Product[]> => {
    const { sql, values } = paginationHelper(tableName, query);
    return await db.getAllAsync<Product>(sql, values);
  },
  findByCategory: async (categoryId: string): Promise<Product[]> => {
    return await db.getAllAsync<Product>(
      `SELECT * FROM products WHERE categoryId = ?`,
      [categoryId],
    );
  },
  delete: async (id: string): Promise<void> => {
    const result = await db.runAsync(`DELETE FROM products WHERE id = ?`, [id]);
    if (result.changes === 0)
      throw new CustomError(
        `No se encontró ningún producto con el ID: ${id}`,
        ErrorType.NOT_FOUND,
      );
  },
});
