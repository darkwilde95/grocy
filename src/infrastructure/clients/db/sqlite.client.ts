import { Order, Pagination } from "@core/types";
import { DB_NAME, LIMIT } from "@infrastructure/constants";
import { CustomError, ErrorType } from "@infrastructure/error/CustomError";
import { orderSchema } from "@schemas/common/order.dto";
import { paginationSchema } from "@schemas/common/pagination.dto";
import * as SQLite from "expo-sqlite";
import { z } from "zod";

export const initializeDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  const db = await SQLite.openDatabaseAsync(DB_NAME);

  await db.execAsync("PRAGMA foreign_keys = ON;");

  await db.withTransactionAsync(async () => {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS categories (
        id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
        name TEXT NOT NULL
      );
    `);

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS supermarkets (
        id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
        name TEXT NOT NULL
      );
    `);

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
        name TEXT NOT NULL,
        categoryId TEXT NOT NULL,
        FOREIGN KEY (categoryId) REFERENCES categories (id) ON DELETE CASCADE
      );
    `);

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS prices (
        productId TEXT NOT NULL,
        supermarketId TEXT NOT NULL,
        value REAL NOT NULL,
        previousValue REAL NOT NULL,
        updatedAt INTEGER NOT NULL,
        PRIMARY KEY (productId, supermarketId),
        FOREIGN KEY (productId) REFERENCES products (id) ON DELETE CASCADE,
        FOREIGN KEY (supermarketId) REFERENCES supermarkets (id) ON DELETE CASCADE
      );
    `);

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS purchases (
        id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
        date INTEGER NOT NULL,
        total REAL NOT NULL
      );
    `);

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS purchase_items (
        productId TEXT NOT NULL,
        superMarketId TEXT NOT NULL,
        purchaseId TEXT NOT NULL,
        price REAL NOT NULL,
        quantity REAL NOT NULL,
        PRIMARY KEY (productId, superMarketId, purchaseId),
        FOREIGN KEY (purchaseId) REFERENCES purchases (id) ON DELETE CASCADE,
        FOREIGN KEY (productId) REFERENCES products (id),
        FOREIGN KEY (superMarketId) REFERENCES supermarkets (id)
      );
    `);
  });

  console.log("Base de datos inicializada correctamente.");
  return db;
};

export const insertHelper = (
  table: string,
  object: Record<string, SQLite.SQLiteBindValue>,
) => {
  const entries = Object.entries(object);
  const insertClause = entries.map((entry) => entry[0]).join(", ");
  const values = entries.map((entry) => entry[1]);

  return {
    sql: `INSERT INTO ${table} (${insertClause}) VALUES (${values.map(() => "?").join(", ")}) RETURNING id`,
    values,
  };
};

export const updateHelper = (
  table: string,
  ids: Record<string, string>,
  object: Record<string, SQLite.SQLiteBindValue>,
) => {
  const keys = Object.keys(object).filter(
    (key) => object[key] !== undefined && key !== "id",
  );

  if (keys.length === 0) return null;

  const setClause = keys.map((key) => `${key} = ?`).join(", ");

  const idsKeys = Object.keys(ids);
  const idsClause = idsKeys.map((id) => `${id} = ?`).join(" AND ");

  const values: SQLite.SQLiteBindParams = keys
    .map((key) => object[key])
    .concat(idsKeys.map((id) => ids[id]));

  return {
    sql: `UPDATE ${table} SET ${setClause} WHERE ${idsClause}`,
    values,
  };
};

export const paginationHelper = ({ limit = LIMIT, offset = 0 }: Pagination) => {
  const validation = paginationSchema.safeParse({ limit, offset });
  if (!validation.success) {
    const { properties } = z.treeifyError(validation.error);
    throw new CustomError(
      "Los valores de paginación no son válidos",
      ErrorType.BAD_REQUEST,
      {
        limit: properties?.limit?.errors[0] || "",
        offset: properties?.offset?.errors[0] || "",
      },
    );
  }

  return {
    paginationSql: ` LIMIT ? OFFSET ?`,
    values: [limit, offset],
  };
};

export const orderHelper = <T>({ field, order }: Order<T>) => {
  const validation = orderSchema.safeParse({ field, order });
  if (!validation.success) {
    const { properties } = z.treeifyError(validation.error);
    throw new CustomError(
      "Los valores de ordenamieto no son válidos",
      ErrorType.BAD_REQUEST,
      {
        field: properties?.field?.errors[0] || "",
        order: properties?.order?.errors[0] || "",
      },
    );
  }

  return {
    orderSql: ` ORDERBY ? ${order}`,
    values: [field],
  };
};
