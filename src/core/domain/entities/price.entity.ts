export interface Price {
  readonly productId: string;
  readonly supermarketId: string;
  value: number;
  previousValue: number;
  updatedAt: number;
}

export const updateValue = (price: Price, newValue: number): Price => ({
  ...price,
  previousValue: price.value,
  value: newValue,
  updatedAt: Date.now(),
});

export const getTrend = (price: Price) =>
  price.value > price.previousValue
    ? "UP"
    : price.value < price.previousValue
      ? "DOWN"
      : "STABLE";
