import {
  insertHelper,
  orderHelper,
  paginationHelper,
  updateHelper,
} from "@clients/db/sqlite.client";
import { Pagination } from "@core/types";
import { CreateCategoryDto, UpdateCategoryDto } from "@dto/category.dto";
import { Category } from "@entities/category.entity";
import { CustomError, ErrorType } from "@infrastructure/error/CustomError";
import { CategoryService } from "@interfaces/category-service.interface";
import { SQLiteBindParams, SQLiteDatabase } from "expo-sqlite";

const tableName = "categories";

export const categorySqlService = (db: SQLiteDatabase): CategoryService => ({
  create: async (category: CreateCategoryDto): Promise<Category> => {
    const { sql, values } = insertHelper(tableName, category);
    const createdRow = await db.getFirstAsync<{ id: string }>(sql, values);
    if (!createdRow)
      throw new CustomError(
        "No se pudo crear el producto",
        ErrorType.INTERNAL_ERROR,
      );

    return {
      id: createdRow.id,
      name: category.name,
    };
  },
  update: async (id: string, category: UpdateCategoryDto): Promise<void> => {
    const helpers = updateHelper(tableName, { id }, category);
    if (!helpers) return;

    const result = await db.runAsync(helpers.sql, helpers.values);
    if (result.changes === 0)
      throw new CustomError(
        `No se encontró ningúna categoría con el ID: ${id}`,
        ErrorType.NOT_FOUND,
      );
  },
  findById: async (id: string): Promise<Category> => {
    const row = await db.getFirstAsync<Category>(
      `SELECT * FROM categories WHERE id = ?`,
      [id],
    );
    if (!row)
      throw new CustomError(
        `No se encontró ningúna categoría con el ID: ${id}`,
        ErrorType.NOT_FOUND,
      );
    return row;
  },
  findAll: async (
    query: string,
    pagination: Pagination,
  ): Promise<Category[]> => {
    let sql = `SELECT * FROM ${tableName}`;
    const values: SQLiteBindParams = [];

    if (query !== "") {
      sql += ` WHERE name = ?`;
      values.push(query);
    }

    const paginationResult = paginationHelper(pagination);
    sql += ` ${paginationResult.paginationSql}`;
    values.push(...paginationResult.values);

    const orderResult = orderHelper<Category>({ field: "name", order: "ASC" });
    sql += ` ${orderResult.orderSql}`;
    values.push(...orderResult.values);

    return await db.getAllAsync<Category>(sql, values);
  },
  delete: async (id: string): Promise<void> => {
    const result = await db.runAsync(`DELETE FROM categories WHERE id = ?`, [
      id,
    ]);
    if (result.changes === 0)
      throw new CustomError(
        `No se encontró ningúna categoría con el ID: ${id}`,
        ErrorType.NOT_FOUND,
      );
  },
});
