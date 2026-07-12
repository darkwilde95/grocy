import { orderHelper, updateHelper } from "@clients/db/sqlite.client";
import { Order } from "@core/types";
import { CreatePriceDto, UpdatePriceDto } from "@dto/price.dto";
import { Price, PriceWithSupermarket } from "@entities/price.entity";
import { CustomError, ErrorType } from "@infrastructure/error/CustomError";
import { PriceService } from "@interfaces/price-service.interface";
import { SQLiteDatabase } from "expo-sqlite";

const tableName = "prices";
const supermarketTable = "supermarkets";

export const priceSqliteService = (db: SQLiteDatabase): PriceService => ({
  create: async (price: CreatePriceDto): Promise<Price> => {
    const createdRow = await db.getFirstAsync<Price>(
      `INSERT INTO ${tableName} (
        productId, 
        supermarketId, 
        value, 
        previousValue, 
        updatedAt
      ) VALUES (?, ?, ?, ?, ?)`,
      [price.productId, price.supermarketId, price.value, 0, Date.now()],
    );

    if (!createdRow) {
      throw new CustomError(
        "No se pudo guardar el precio",
        ErrorType.INTERNAL_ERROR,
      );
    }

    return createdRow;
  },
  update: async (
    productId: string,
    supermarketId: string,
    price: UpdatePriceDto,
  ): Promise<void> => {
    const helpers = updateHelper(
      tableName,
      { productId, supermarketId },
      price,
    );

    if (!helpers) return;

    const result = await db.runAsync(helpers.sql, helpers.values);
    if (result.changes === 0) {
      throw new CustomError(
        `No se encontró ningún precio con productId: ${productId} y supermarketId: ${supermarketId}`,
        ErrorType.NOT_FOUND,
      );
    }
  },
  findByProduct: async (
    productId: string,
    order: Order<Price>,
  ): Promise<PriceWithSupermarket[]> => {
    const { orderSql, values } = orderHelper<Price>(order);

    const sql = `
      SELECT 
        p.productId,
        p.supermarketId,
        p.value,
        p.previousValue,
        p.updatedAt,
        s.name as supermarketName
      FROM ${tableName} p JOIN ${supermarketTable} s
      ON p.supermarketId = s.id WHERE p.productId = ? ${orderSql}
      `;

    return await db.getAllAsync<PriceWithSupermarket>(sql, [
      productId,
      ...values,
    ]);
  },
  delete: async (supermarketId: string, productId: string): Promise<void> => {
    const result = await db.runAsync(
      `DELETE FROM ${tableName} WHERE productId = ? AND supermarketId = ?`,
      [productId, supermarketId],
    );
    if (result.changes === 0)
      throw new CustomError(
        `No se encontró ningún precio con productId: ${productId} y supermarketId: ${supermarketId}`,
        ErrorType.NOT_FOUND,
      );
  },
});
