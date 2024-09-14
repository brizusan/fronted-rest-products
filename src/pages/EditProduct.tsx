import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import { getProductById, updateProduct } from "../services/ProductService";
import { Product } from "../types";
import { Alerta, FormProduct } from "../components";

export async function loader(request: LoaderFunctionArgs) {
  const { id } = request.params;
  if (!id) throw new Error("No hay id");
  const data = await getProductById(+id);
  if (data) return data.product;
  return [];
}

export async function action({ request , params }: ActionFunctionArgs) {
  let alert = "";
  const data = Object.fromEntries(await request.formData());
  if (Object.values(data).includes("")) {
    alert = "Por favor rellene todos los campos";
  }
  if (alert.length > 0) return alert;
  const {id} = params
  await updateProduct(+id! ,data);

  return redirect("/");
}

const availabilityOptions = [
  { name: 'Disponible', value: true},
  { name: 'No Disponible', value: false}
]

export default function EditProduct() {
  const data = useLoaderData() as Product;
  const response = useActionData() as string;

  return (
    <>
      <h1 className="text-center text-3xl font-semibold text-cyan-800">
        Editar Producto
      </h1>
      <p className="text-center text-lg font-semibold capitalize text-gray-400">
        actualizar informacion del producto
      </p>

      {response && <Alerta>{response}</Alerta>}

      <FormProduct initialData={data}>
        <div className="mb-4 flex gap-4 items-center">
          <label className="text-gray-800 font-semibold" htmlFor="price">
            Disponibilidad:
          </label>
          <select
            defaultValue={data?.availability?.toString()}
            name="availability"
            id="availability"
            className="max-w-sm mt-2 py-1 rounded border border-gray-300 w-full text-center font-semibold text-slate-800"
          >
             {availabilityOptions.map(option => (
              <option key={option.name} value={option.value.toString()}>{option.name}</option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 transition-colors p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Actualizar Producto"
        />
      </FormProduct>
    </>
  );
}
