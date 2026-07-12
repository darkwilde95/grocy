import {
  insertHelper,
  paginationHelper,
  updateHelper,
} from "@clients/db/sqlite.client";
import { Pagination } from "@core/types";
import { CreateProductDto, UpdateProductDto } from "@dto/product.dto";
import { Product } from "@entities/product.entity";
import { CustomError, ErrorType } from "@infrastructure/error/CustomError";
import { ProductService } from "@interfaces/product-service.interface";
import { SQLiteBindParams, SQLiteDatabase } from "expo-sqlite";

const tableName = "products";

export const productSqliteService = (db: SQLiteDatabase): ProductService => ({
  create: async (product: CreateProductDto): Promise<Product> => {
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

  update: async (id: string, product: UpdateProductDto): Promise<void> => {
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
      `SELECT * FROM ${tableName} WHERE id = ?`,
      [id],
    );
    if (!row)
      throw new CustomError("Producto no encontrado", ErrorType.NOT_FOUND);
    return row;
  },
  findAll: async (
    query: string,
    categoryId: string,
    pagination: Pagination,
  ): Promise<Product[]> => {
    let sql = `SELECT * FROM ${tableName}`;
    const values: SQLiteBindParams = [];

    const whereClause = [];

    if (categoryId !== "") {
      whereClause.push("categoryId = ?");
      values.push(categoryId);
    }

    if (query !== "") {
      whereClause.push("name LIKE %?%");
      values.push(query);
    }

    if (whereClause.length > 0) sql += ` WHERE ${whereClause.join(" AND ")}`;

    const paginationResult = paginationHelper(pagination);
    sql += " " + paginationResult.paginationSql;
    values.push(...paginationResult.values);

    return await db.getAllAsync<Product>(sql, values);
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
