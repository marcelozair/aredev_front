import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/appContext';
import { iNotification } from '../../models/notification.model';
import "./style.css"

const Alert = () => {
  const $store = useGlobalContext();

  const [popNotification, setPopNotification] = useState<iNotification[]>([])

  const showAlert = () => {
    // obtener ultima notificacion agregada
    const oneNotification = $store.getNotifications()[0]
    if(oneNotification){
      // agregamos esta notificacion a la alerta
      setPopNotification([oneNotification, ...$store.getNotifications()])
      setTimeout(() => {
        // quitamos la notificacion luego de 3 segundos
        const curretNtf = popNotification.splice(0 , 1)
        setPopNotification(curretNtf)
      }, 3000)
    }
  }

  useEffect(() => {
    showAlert()
  }, [$store.getNotifications()])

  return (
    <>
    {
      popNotification.length ? (
        popNotification.map((item, index) => (
        <div key={index} className="alert danger-alert">
          <div className="color-header-alert">
          </div>
          <div className="text-alert">
            <p>{ item.message }</p>
          </div>
        </div>
        ))
      ) : (null)
    }
    </>
  )
}

export default Alert
/* 
  {
      popNotification.length ?(
        popNotification.map(item => {
          return <Alert classType="alert danger-alert" message={item.message}/>
        })
      ) : ("")
      
    }
*/