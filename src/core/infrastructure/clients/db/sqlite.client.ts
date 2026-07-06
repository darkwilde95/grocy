import * as SQLite from "expo-sqlite";

// Nombre de tu base de datos
export const DB_NAME = "supermarket_app.db";

export const initializeDatabase = async () => {
  const db = await SQLite.openDatabaseAsync(DB_NAME);

  // Activamos el soporte de llaves foráneas en SQLite
  await db.execAsync("PRAGMA foreign_keys = ON;");

  // Ejecutamos la creación de tablas en una transacción
  await db.withTransactionAsync(async () => {
    // 1. Tabla Categorías
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS categories (
        id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
        name TEXT NOT NULL
      );
    `);

    // 2. Tabla Supermercados
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS supermarkets (
        id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
        name TEXT NOT NULL
      );
    `);

    // 3. Tabla Productos (Relación con Categoría)
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
        name TEXT NOT NULL,
        categoryId TEXT NOT NULL,
        FOREIGN KEY (categoryId) REFERENCES categories (id) ON DELETE CASCADE
      );
    `);

    // 4. Tabla Precios (Llave primaria compuesta)
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

    // 5. Tabla Compras (Purchase)
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS purchases (
        id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
        date INTEGER NOT NULL,
        total REAL NOT NULL
      );
    `);

    // 6. Tabla Ítems de Compra (PurchaseItem - Relación N a 1 con Purchase)
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
};
