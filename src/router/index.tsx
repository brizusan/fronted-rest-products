import {lazy , Suspense} from "react"
import { createBrowserRouter} from "react-router-dom"
import { LayoutPrincipal } from "../layouts/LayoutPrincipal"
import {loader as loaderHomePage } from "../pages/HomePage"
import {action as actionRegisterProduct} from "../pages/RegisterProductPage"
import {loader as loaderEditProduct , action as actionEditProduct} from "../pages/EditProduct"
import { action  as deleteProductAction} from "../components/products/ItemProduct"
import { action  as updateProductAvailability} from "../components/products/TableProducts"

const HomePage = lazy(() => import("../pages/HomePage"))
const NewProduct = lazy(() => import("../pages/RegisterProductPage"))
const EditProduct = lazy(() => import("../pages/EditProduct"))

const router = createBrowserRouter([
  {
    path: "/",
    element : <LayoutPrincipal />,
    children : [
      {
        index : true,
        element : <Suspense fallback={<div>Loading...</div>}>
          <HomePage />
        </Suspense>,
        loader : loaderHomePage,
        action: updateProductAvailability
      },
      {
        path:"new-product",
        element:<Suspense fallback={<div>Loading...</div>}>
          <NewProduct />
        </Suspense>,
        action : actionRegisterProduct,

      },
      {
        path:"edit-product/:id",
        element : <Suspense fallback={<div>Loading...</div>}>
          <EditProduct />
        </Suspense>,
        loader : loaderEditProduct,
        action : actionEditProduct
      },
      {
        path:"delete-product/:id",
        action:deleteProductAction
      }
    ]
  }
])

export default router;