import { ISuperMarketRepository } from "@/ports/ISuperMarketRepository";

interface UpdateSuperMarketRequest {
  name?: string;
}

export const CreateSuperMarketUseCase =
  (superMarketRepo: ISuperMarketRepository) =>
  async (superMarketId: string, request: UpdateSuperMarketRequest) => {
    const updatedSuperMarket = await superMarketRepo.update(
      superMarketId,
      request,
    );
    return updatedSuperMarket;
  };
