import { Form } from "react-router-dom";
import { Product } from "../../types";

type FormProductProps = {
  children: React.ReactNode;
  initialData?: Product;
};

export const FormProduct = ({ children, initialData }: FormProductProps) => {
  return (
    <Form method="post" className="max-w-lg mx-auto mt-10">
      <div className="mb-4">
        <label className="text-gray-800 font-semibold" htmlFor="name">
          Nombre Producto:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del Producto"
          name="name"
          defaultValue={initialData?.name}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800 font-semibold" htmlFor="price">
          Precio:
        </label>
        <input
          id="price"
          type="number"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Precio Producto. ej. 200, 300"
          name="price"
          defaultValue={initialData?.price}
        />
      </div>
      {children}
    </Form>
  );
};
