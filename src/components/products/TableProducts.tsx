import { ActionFunctionArgs } from "react-router-dom";
import { Product } from "../../types";
import { ItemProduct } from "./ItemProduct";
import {  updateProductAvailability } from "../../services/ProductService";

type TableProductsProps = {
  products: Product[];
};


export async function action({request}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  await updateProductAvailability(+data.id)
  return []
}


export const TableProducts = ({ products }: TableProductsProps) => {
  return (
    <section className="w-11/12 mx-auto">
      <table className="w-full mt-5 table-auto">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-2">Producto</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Disponibilidad</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ItemProduct key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
