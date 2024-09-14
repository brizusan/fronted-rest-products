import {
  ActionFunctionArgs,
  redirect,
  useActionData,
} from "react-router-dom";
import { Alerta, FormProduct } from "../components";
import { createProduct } from "../services/ProductService";
import { useEffect } from "react";

export async function action({ request }: ActionFunctionArgs) {
  let alert = "";

  const data = Object.fromEntries(await request.formData());
  if (Object.values(data).includes("")) {
    alert = "Por favor rellene todos los campos";
  }

  if(alert.length > 0) return alert

  const respuesta = await createProduct(data);

  if (respuesta) {
    return alert = respuesta.message;
  }

  return redirect('/');

}

export default function RegisterProductPage() {
  const response = useActionData() as string;
 
  useEffect(() => {
    if(response === 'Product created'){ 
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    }
  }, [response])
  

  return (
    <>
      <h1 className="text-center text-2xl font-semibold text-cyan-800">
        Registrar Nuevo Producto
      </h1>

      {response && <Alerta >{response}</Alerta>}

      <FormProduct>
          <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 transition-colors p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </FormProduct>
    </>
  );
}
