import axios from "axios";
import { env } from "../../../config/config";
import { iNota, iNotaApi } from "./../../models/notas.model"

export const createNotaApi = async (nota) => {
  const url = env.URL_DB + "notas/create"
  const token: string | null = localStorage.getItem("token");
  const header = { headers: { token } }

  const newNota = await axios.post(url, nota , header )
  const notaResult: iNotaApi = newNota.data

  return notaResult
}

export const loadNotasApi = async () => {
  const url = env.URL_DB + "notas"
  const token: string | null = localStorage.getItem("token");
  const header = { headers: { token } }

  const newNota = await axios.get(url , header )
  const notaResult: iNotaApi[]= newNota.data

  return notaResult
}

export const saveNotaApi = async (id: number, nota) => {
  const url = env.URL_DB + "notas/update/" + id
  const token: string | null = localStorage.getItem("token");
  const header = { headers: { token } }

  const newNota = await axios.put(url , nota , header )
  const notaResult = newNota.data

  return notaResult
}

export const getNotaApi = async (id: number) => {
  const url = env.URL_DB + "notas/" + id
  const token: string | null = localStorage.getItem("token");
  const header = { headers: { token } }

  const newNota = await axios.get(url , header )
  const notaResult = newNota.data

  return notaResult
}