import { Pagination } from "@core/types";
import {
  CreateSupermarketDto,
  UpdateSupermarketDto,
} from "@dto/supermarket.dto";
import { Supermarket } from "@entities/supermarket.entity";

export interface SupermarketService {
  create(supermarket: CreateSupermarketDto): Promise<Supermarket>;
  update(id: string, product: UpdateSupermarketDto): Promise<void>;
  findById(id: string): Promise<Supermarket>;
  findAll(query: string, pagination: Pagination): Promise<Supermarket[]>;
  delete(id: string): Promise<void>;
}
