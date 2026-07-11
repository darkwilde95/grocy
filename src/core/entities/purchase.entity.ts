import { CustomError, ErrorType } from "@/infrastructure/error/CustomError";

export interface PurchaseItem {
  productId: string;
  supermarketId: string;
  purchaseId: string;
  price: number;
  quantity: number;
}

export interface Purchase {
  readonly id: string;
  date: number;
  total: number;
  items: PurchaseItem[];
}

export const addItem = (
  purchase: Purchase,
  item: PurchaseItem,
  quantity: number,
) => {
  if (quantity <= 0)
    throw new CustomError(
      "Purchase - addItem: No es posible agregar un producto con cantidad 0 o negativa",
      ErrorType.BAD_REQUEST,
    );

  const existingItem = purchase.items.find(
    (i) =>
      i.productId === item.productId && i.supermarketId === item.supermarketId,
  );
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    purchase.items.push(item);
  }
  purchase.total += item.price * quantity;
};

export const updateItem = (
  purchase: Purchase,
  item: PurchaseItem,
  newQuantity: number,
) => {
  if (newQuantity < 0)
    throw new Error(
      "Purchase Entity - updateItem: No es posible editar un producto con cantidad negativa",
    );
  const existingItem = purchase.items.find(
    (i) =>
      i.productId === item.productId && i.supermarketId === item.supermarketId,
  );
  if (!existingItem)
    throw new Error(
      "Purchase Entity - updateItem: El elemento de la lista no existe",
    );

  const subTotal = purchase.total - existingItem.price * existingItem.quantity;
  if (newQuantity > 0) {
    purchase.total = subTotal + existingItem.price * newQuantity;
  } else {
    purchase.total = subTotal;
    purchase.items = purchase.items.filter(
      (i) =>
        !(
          i.productId === existingItem.productId &&
          i.supermarketId === existingItem.supermarketId
        ),
    );
  }
};
