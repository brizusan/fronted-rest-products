import axios from "axios";


export const apiAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

