import z from "zod";

export const DraftProductSchema = z.object({
  name: z.string(),
  price: z.number(),
});

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  availability: z.boolean().optional(),
});

export const ProductsApiResponseShema = z.object({
  products: z.array(ProductSchema),
});

export type ProductData = {
  [k: string]: FormDataEntryValue;
};

export type DraftProduct = z.infer<typeof DraftProductSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type Products = z.infer<typeof ProductsApiResponseShema>;
