export class Price {
  constructor(
    public readonly productId: string,
    public readonly superMarketId: string,
    public value: number,
    public previousValue: number,
    public updatedAt: number,
  ) {}

  public updateValue(newValue: number) {
    this.previousValue = this.value;
    this.value = newValue;
    this.updatedAt = Date.now();
  }

  public getTrend() {
    return this.value > this.previousValue
      ? "UP"
      : this.value < this.previousValue
        ? "DOWN"
        : "STABLE";
  }
}
