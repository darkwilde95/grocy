import { ISuperMarketRepository } from "@/ports/ISuperMarketRepository";

export const RemoveSuperMarketUseCase =
  (superMarketRepo: ISuperMarketRepository) =>
  async (superMarketId: string) => {
    const removedSuperMarket = await superMarketRepo.remove(superMarketId);
    return removedSuperMarket;
  };
