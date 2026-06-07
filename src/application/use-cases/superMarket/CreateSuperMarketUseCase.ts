import { SuperMarket } from "@/entities/SuperMarket";
import { ISuperMarketRepository } from "@/ports/ISuperMarketRepository";

interface CreateSuperMarketRequest {
  name: string;
}

export const CreateSuperMarketUseCase =
  (superMarketRepo: ISuperMarketRepository) =>
  async (request: CreateSuperMarketRequest) => {
    const superMarketDraft = new SuperMarket("", request.name);
    const newSuperMarket = await superMarketRepo.create(superMarketDraft);
    return newSuperMarket;
  };
