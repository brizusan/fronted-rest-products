import { apiAxios } from "../api/axios";
import {
  DraftProductSchema,
  ProductsApiResponseShema,
  type Product,
  type Products,
  type ProductData,
} from "../types";

export const createProduct = async ({ name, price }: ProductData) => {
  const result = DraftProductSchema.safeParse({ name, price: Number(price) });

  if (result.success) {
    const { name, price } = result.data;

    try {
      const { data } = await apiAxios.post(`/products`, {
        name,
        price,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  } else {
    throw new Error("Datos no validos");
  }
};

export const getProducts = async () => {
  try {
    const { data } = await apiAxios<Products>("/products");
    const result = ProductsApiResponseShema.safeParse(data);
    if (result.success) return result.data.products;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: Product["id"]) => {
  try {
    const { data } = await apiAxios(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (
  id: Product["id"],
  product: ProductData
) => {
  try {
    const { data } = await apiAxios.put(`/products/${id}`, {
      name: product.name,
      price: Number(product.price),
      availability: product.availability === "true" ? true : false,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductById = async (id: Product["id"]) => {
  try {
    const { data } = await apiAxios.delete(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProductAvailability = async (id: Product["id"]) => {
  try {
    await apiAxios.patch(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
};
