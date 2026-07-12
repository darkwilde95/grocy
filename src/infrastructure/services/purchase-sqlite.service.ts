import { getEndDate, getStartDate } from "@/lib/utils/date-limits";
import {
  insertHelper,
  orderHelper,
  paginationHelper,
} from "@clients/db/sqlite.client";
import { DateRange, Order, Pagination } from "@core/types";
import { CreatePurchaseWithItemsDto } from "@dto/purchase.dto";
import {
  Purchase,
  PurchaseItem,
  PurchaseWithItems,
} from "@entities/purchase.entity";
import { CustomError, ErrorType } from "@infrastructure/error/CustomError";
import { PurchaseService } from "@interfaces/purchase-service.interface";
import { SQLiteDatabase } from "expo-sqlite";

const purchaseTable = "purchases";
const purchaseItemsTable = "purchase_items";

export const purchaseSqliteService = (db: SQLiteDatabase): PurchaseService => ({
  create: async (purchase: CreatePurchaseWithItemsDto): Promise<Purchase> => {
    if (purchase.items.length === 0)
      throw new CustomError(
        "La lista de compras no puede estar vacía",
        ErrorType.BAD_REQUEST,
      );

    const newPurchase = {
      total: purchase.total,
      date: Date.now(),
    };
    const { sql, values } = insertHelper(purchaseTable, newPurchase);
    let newPurchaseId;

    await db.withTransactionAsync(async () => {
      const result = await db.getFirstAsync<{ id: string }>(sql, values);

      if (!result) {
        throw new CustomError(
          "No se pudo crear el listado de compras",
          ErrorType.INTERNAL_ERROR,
        );
      }

      newPurchaseId = result.id;

      const statement = await db.prepareAsync(
        `INSERT INTO ${purchaseItemsTable} (
          productId,
          supermarketId,
          purchaseId,
          price,
          quantity
        ) VALUES ($productId, $supermarketId, $purchaseId, $price, $quantity)`,
      );

      try {
        for (const item of purchase.items) {
          await statement.executeAsync({
            $productId: item.productId,
            $supermarketId: item.supermarketId,
            $purchaseId: newPurchaseId,
            $price: item.price,
            $quantity: item.quantity,
          });
        }
      } catch (error) {
        throw new CustomError(
          "Hubo un problema al agregar los articulos de la compra",
          ErrorType.INTERNAL_ERROR,
        );
      } finally {
        await statement.finalizeAsync();
      }
    });

    return {
      id: newPurchaseId!,
      ...newPurchase,
    };
  },
  findById: async (id: string): Promise<PurchaseWithItems> => {
    const rows = await db.getAllAsync<
      PurchaseItem & {
        date: number;
        total: number;
      }
    >(
      `SELECT 
        p.id AS purchaseId, 
        p.total, 
        p.date,
        pi.productId, 
        pi.supermarketId, 
        pi.price, 
        pi.quantity
        FROM ${purchaseTable} p
        INNER JOIN ${purchaseItemsTable} pi ON p.id = pi.purchaseId
        WHERE p.id = ?
      `,
      [id],
    );

    if (rows.length === 0) {
      throw new CustomError(
        `No se encontró ninguna lista de compras con el ID: ${id}`,
        ErrorType.NOT_FOUND,
      );
    }

    const items: PurchaseItem[] = rows.map((r) => ({
      price: r.price,
      productId: r.productId,
      purchaseId: r.purchaseId,
      quantity: r.quantity,
      supermarketId: r.supermarketId,
    }));

    return {
      id: rows[0].purchaseId,
      date: rows[0].date,
      total: rows[0].total,
      items,
    };
  },
  findAll: async (
    range: DateRange,
    pagination: Pagination,
    order: Order<Purchase>,
  ): Promise<Purchase[]> => {
    const { paginationSql, values: paginationValues } =
      paginationHelper(pagination);
    const { orderSql, values: orderValues } = orderHelper<Purchase>(order);

    const startDate = getStartDate(range.start);
    const endDate = getEndDate(range.end);
    try {
      return await db.getAllAsync<Purchase>(
        `SELECT 
          id, 
          total, 
          date 
        FROM ${purchaseTable} 
        WHERE date BETWEEN ? AND ?
        ${orderSql} ${paginationSql}`,
        [startDate, endDate, ...orderValues, ...paginationValues],
      );
    } catch (error) {
      throw new CustomError(
        "No se pudo hacer la consulta de listas de compras",
        ErrorType.INTERNAL_ERROR,
      );
    }
  },
  delete: async (id: string): Promise<void> => {
    const result = await db.runAsync(
      `DELETE FROM ${purchaseTable} WHERE id = ?`,
      [id],
    );
    if (result.changes === 0)
      throw new CustomError(
        `No se encontró ninguna lista de compras con Id: ${id}`,
        ErrorType.NOT_FOUND,
      );
  },
});
