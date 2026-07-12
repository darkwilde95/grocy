import { CreatePurchaseWithItemsDto } from "@dto/purchase.dto";
import { PurchaseItem } from "@entities/purchase.entity";
import { ZodShape } from "@schemas/zod.helpers";
import { z } from "zod";

export const purchaseItemSchema = z.object<ZodShape<PurchaseItem>>({
  productId: z
    .string("El id del producto es requerido")
    .min(16, "El id del producto no tiene un formato válido"),
  supermarketId: z
    .string("El id del supermercado es requerido")
    .min(16, "El id del supermercado no tiene un formato válido"),
  purchaseId: z
    .string("El id de la compra es requerido")
    .min(16, "El id de la compra no tiene un formato válido"),
  price: z
    .number("El valor del producto es requerido")
    .positive("El precio debe ser mayor a 0"),
  quantity: z
    .number("La cantidad de productos es requerida")
    .positive("La cantidad debe ser mayor a 0"),
});

export const createPurchaseSchema = z.object<
  ZodShape<CreatePurchaseWithItemsDto>
>({
  total: z
    .number("El valor total es requerido")
    .positive("El valor total debe ser un número mayor a 0"),
  items: z
    .array(purchaseItemSchema)
    .min(1, "La compra debe tener por lo menos un producto"),
});
