export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public categoryId: string,
    public unit?: string,
  ) {}
}
