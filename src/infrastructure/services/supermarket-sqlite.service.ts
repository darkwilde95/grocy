import { sqlErrorHandler } from "@/lib/sql-error-handler";
import {
  insertHelper,
  paginationHelper,
  updateHelper,
} from "@clients/db/sqlite.client";
import { Pagination } from "@core/types";
import {
  CreateSupermarketDto,
  UpdateSupermarketDto,
} from "@dto/supermarket.dto";
import { Supermarket } from "@entities/supermarket.entity";
import { CustomError, ErrorType } from "@infrastructure/error/CustomError";
import { SupermarketService } from "@interfaces/supermarket-service.interface";
import { SQLiteBindParams, SQLiteDatabase } from "expo-sqlite";

const tableName = "supermarkets";

export const supermarketSqlService = (
  db: SQLiteDatabase,
): SupermarketService => ({
  create: async (supermarket: CreateSupermarketDto): Promise<Supermarket> => {
    const { sql, values } = insertHelper(tableName, supermarket);
    const createdRow = await sqlErrorHandler(
      "Hubo un error al intentar crear un supermercado",
      () => db.getFirstAsync<{ id: string }>(sql, values),
    );

    if (!createdRow)
      throw new CustomError(
        "No se pudo crear el supermercado",
        ErrorType.INTERNAL_ERROR,
      );

    return {
      id: createdRow.id,
      ...supermarket,
    };
  },
  update: async (
    id: string,
    supermarket: UpdateSupermarketDto,
  ): Promise<void> => {
    const helpers = updateHelper(tableName, { id }, supermarket);

    if (!helpers) return;

    const result = await sqlErrorHandler(
      "Hubo un error al intentar actualizar un supermercado",
      () => db.runAsync(helpers.sql, helpers.values),
    );

    if (result.changes === 0) {
      throw new CustomError(
        `No se encontró ningún supermercado con el ID: ${id}`,
        ErrorType.NOT_FOUND,
      );
    }
  },
  findById: async (id: string): Promise<Supermarket> => {
    const row = await sqlErrorHandler(
      "Hubo un error al intentar buscar un supermercado",
      () =>
        db.getFirstAsync<Supermarket>(
          `SELECT * FROM ${tableName} WHERE id = ?`,
          [id],
        ),
    );
    if (!row)
      throw new CustomError("Supermercado no encontrado", ErrorType.NOT_FOUND);
    return row;
  },
  findAll: async (
    query: string,
    pagination: Pagination,
  ): Promise<Supermarket[]> => {
    let sql = `SELECT * FROM ${tableName}`;
    const values: SQLiteBindParams = [];

    if (query !== "") {
      sql += "WHERE name LIKE %?%";
      values.push(query);
    }

    const paginationResult = paginationHelper(pagination);
    sql += " " + paginationResult.paginationSql;
    values.push(...paginationResult.values);

    return await sqlErrorHandler(
      "Hubo un error al intentar buscar supermercados",
      () => db.getAllAsync<Supermarket>(sql, values),
    );
  },
  delete: async (id: string): Promise<void> => {
    const result = await sqlErrorHandler(
      "Hubo un error al intentar eliminar un supermercado",
      () => db.runAsync(`DELETE FROM ${tableName} WHERE id = ?`, [id]),
    );
    if (result.changes === 0)
      throw new CustomError(
        `No se encontró ningún supermercado con el ID: ${id}`,
        ErrorType.NOT_FOUND,
      );
  },
});
