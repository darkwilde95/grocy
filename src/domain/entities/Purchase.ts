export interface PurchaseItem {
  productId: string;
  superMarketId: string;
  purchaseId: string;
  price: number;
  quantity: number;
}

export class Purchase {
  constructor(
    public readonly id: string,
    public date: number,
    public total: number,
    public items: PurchaseItem[],
  ) {}

  public addItem(item: PurchaseItem, quantity: number) {
    if (quantity <= 0)
      throw new Error(
        "Purchase Entity - addItem: No es posible agregar un producto con cantidad 0 o negativa",
      );
    // Verificar si existe antes en la lista
    const existingItem = this.items.find(
      (i) =>
        i.productId === item.productId &&
        i.superMarketId === item.superMarketId,
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(item);
    }
    this.total += item.price * quantity;
  }

  public updateItem(item: PurchaseItem, newQuantity: number) {
    if (newQuantity < 0)
      throw new Error(
        "Purchase Entity - updateItem: No es posible editar un producto con cantidad negativa",
      );
    const existingItem = this.items.find(
      (i) =>
        i.productId === item.productId &&
        i.superMarketId === item.superMarketId,
    );
    if (!existingItem)
      throw new Error(
        "Purchase Entity - updateItem: El elemento de la lista no existe",
      );

    // Calcular el total sin este elemento
    const subTotal = this.total - existingItem.price * existingItem.quantity;
    if (newQuantity > 0) {
      this.total = subTotal + existingItem.price * newQuantity;
    } else {
      this.total = subTotal;
      this.items = this.items.filter(
        (i) =>
          !(
            i.productId === existingItem.productId &&
            i.superMarketId === existingItem.superMarketId
          ),
      );
    }
  }
}
