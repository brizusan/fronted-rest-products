import { ActionFunctionArgs, Form, Link, redirect, useFetcher } from "react-router-dom";
import { Product } from "../../types";
import { IconDeleteProduct, IconEditProduct } from "../icons";
import { deleteProductById } from "../../services/ProductService";

export async function action({ params}: ActionFunctionArgs) {
  const {id} = params
  await deleteProductById(+id!);
  return redirect("/")
}


export const ItemProduct = ({ product }: { product: Product }) => {
  const fetcher = useFetcher();
  const isAvaliable = product.availability ? "Disponible" : "No Disponible";
  const formatPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);


  return (
    <tr className="border-b text-center ">
      <td className="p-3 text-lg text-gray-800 capitalize font-semibold">
        {product.name}
      </td>
      <td className="p-3 text-lg text-gray-800">{formatPrice}</td>
      <td className={`p-3  `}>
        <fetcher.Form method="POST">
          <button
            type="submit"
            value={product?.availability!.toString()}
            name="availability"
            className={` ${
              isAvaliable === "Disponible"
                ? "text-green-500 bg-green-200"
                : "text-red-500 bg-red-200"
            } font-semibold text-sm py-1 px-2 rounded-md`}
          >
            {isAvaliable}
          </button>
          <input type="hidden" name="id" value={product.id} hidden />
        </fetcher.Form>
      </td>
      <td className="p-3 text-lg text-gray-800 flex gap-3 items-center justify-center">
        <Link to={`/edit-product/${product.id}`} className="text-indigo-400 hover:text-indigo-600">
          <IconEditProduct />
        </Link>
        <Form
          className="flex justify-center items-center "
          method="post"
          action={`/delete-product/${product.id}`}
          onSubmit={(e)=>{
            if(!confirm("Are you sure you want to delete this product?")){
              e.preventDefault()
            }
          }}
        >
          <button
            type="submit" 
            className="text-red-400 hover:text-red-600">
            <IconDeleteProduct />
          </button>
        </Form>
      </td>
    </tr>
  );
};
