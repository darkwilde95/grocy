import { SuperMarket } from "@/entities/SuperMarket";

export interface ISuperMarketRepository {
  create(superMarket: SuperMarket): Promise<SuperMarket>;
  findById(superMarketId: string): Promise<SuperMarket | null>;
  findByName(superMarketName: string): Promise<SuperMarket[]>;
  update(
    superMarketId: string,
    superMarket: Partial<Omit<SuperMarket, "id">>,
  ): Promise<SuperMarket | null>;
  remove(superMarketId: string): Promise<SuperMarket | null>;
}
