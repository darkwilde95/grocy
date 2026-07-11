import { Supermarket } from "@entities/supermarket.entity";

export type CreateSupermarketDto = Omit<Supermarket, "id">;

export type UpdateSupermarketDto = Partial<Omit<Supermarket, "id">>;
