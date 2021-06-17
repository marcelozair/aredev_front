import { createContext, useContext, useEffect, useState } from "react"
import socket from "../../service/socketIO"
import { iNota, iNotaApi } from "../models/notas.model"
import { iNotification } from "../models/notification.model"
import { iUser } from "../models/users.model"
import { userLogin } from "./../../service/userLogin"

import { createNotaApi , loadNotasApi, saveNotaApi, getNotaApi } from "./api/Notas"

// create context
export const appContext: any = createContext<any>({})
export const useGlobalContext: any = () => useContext(appContext)

const AppContext = (props) => {
  const [user, setUser] = useState<iUser | null>(null)
  let [notifications, setNotifications] = useState<iNotification[]>([])
  let [notas, setNotas] = useState<iNotaApi[]>([])

  // user
  const updateUser = (payload) => setUser(payload);
  const getUser = (): iUser | null => user;

  // notifications
  const initialNotifications = async () => {
    // TODO load notifications iniciales
  }

  const updateNotifications = (payload) => {
    const notificatioList = [payload, ...notifications]
    setNotifications(notificatioList);
  }

  const getNotifications = () => notifications;

  // NOTAS 
  const createNota = async (nota: iNota) => {
    const newNota: iNotaApi | any = await createNotaApi(nota)
    if (newNota) {
      setNotas([...notas, newNota])
    }
  }

  const updateNota = async (id: number, nota) => {
    return await saveNotaApi(id, nota)
  }

  const loadNotas = async () => {
    const allNotas : any = await loadNotasApi()
    if (allNotas) {
      setNotas(allNotas)
    }
  }

  const getNotas = () => notas

  const getNotaById = async (id: number) => {
    const nota = await await getNotaApi(id)
    return nota
  }

  const validateToken = async () => {
    const result = await userLogin()
    if (!result.data.expired) {
      setUser(result.data.user);
    }
  }

  const wathSockets = async () => {
    socket.on("conectados", (notificationResponse: iNotification) => {
      updateNotifications(notificationResponse)
    })
  }

  useEffect(() => {
    validateToken()
    initialNotifications()

    wathSockets()
  }, [])

  return (
    <appContext.Provider value={{
      // export context
      updateUser,
      getUser,
      user,
      notifications,
      getNotifications,
      createNota,
      getNotas,
      loadNotas,
      updateNota,
      getNotaById
    }}>
      { props.children}
    </appContext.Provider>
  )
}

export default AppContext
