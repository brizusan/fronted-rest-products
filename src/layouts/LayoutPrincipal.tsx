import { Link, Outlet } from "react-router-dom";
import { Navegacion } from "../components/navegacion/Navegacion";

export const LayoutPrincipal = () => {
  return (
    <>
      <header className="bg-indigo-500 text-white ">
        <div className="contenedor ">
          <Link to="/"
            className="capitalize text-2xl lg:text-4xl font-bold "
          >administrador de Productos</Link>

        </div>
      </header>

      <Navegacion />

      <main className="contenedor bg-white rounded shadow border ">
        <Outlet />
      </main>
    </>
  );
};
