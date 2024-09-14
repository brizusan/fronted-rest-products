import { NavLink } from "react-router-dom";
import { IconHome, IconNewProduct } from "../icons";

export const Navegacion = () => {
  return (
    <nav className="contenedor w-5/6 md:w-11/12 lg:w-full flex justify-end gap-8">
      <NavLink
        to="/"
        className="capitalize text-lg font-semibold flex items-center gap-2 text-slate-800"
      >
        Home
        <IconHome />
      </NavLink>
      <NavLink
        to="/new-product"
        className="capitalize text-lg font-semibold flex items-center text-slate-800 gap-2"
      >
        New Product
        <IconNewProduct />
      </NavLink>
    </nav>
  );
};
