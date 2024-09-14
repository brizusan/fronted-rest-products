import { useMemo } from "react"
import {  useLoaderData } from "react-router-dom"
import { getProducts } from "../services/ProductService"
import { Product } from "../types"
import { TableProducts } from "../components"

export async function loader() {
  const data = await getProducts()
  
  if(!data) return []
  return data
}


export default function HomePage() {

  const state = useLoaderData() as Product[]

  const isEmpty = useMemo(() => state.length === 0, [state])

  return (

    <>
      <h1 className=" text-center text-3xl font-semibold text-cyan-800">
        {isEmpty ? 'No hay Productos' : 'Listado de Productos'}
      </h1>

      {
        !isEmpty && (
          <TableProducts products={state}/>
        )
      }
    
    </>
  )
}
