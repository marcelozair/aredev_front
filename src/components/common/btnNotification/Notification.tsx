import React, { useEffect, useState } from 'react'
import NotificationList from './NotificationList'
import { useGlobalContext } from "./../../context/appContext";
import Alert from '../alerts/Alert';
import "./style.css"


const Notification = () => {
  const $store = useGlobalContext();
  const [active, setActive] = useState<string>("")

  const showNotifications = () => {
    setActive(active ? "" : "active")
  }

  document.addEventListener("click", (e) => {
    const iconNtf = document.getElementById(`icon-ntf`);
    const listNtf = document.getElementById(`list-ntf`);
    if(active) {
      if (e.target !== iconNtf && e.target !== listNtf) {
        setActive("")
      }
    }
  })


  return (
    <div className="notifications">
      <i onClick = { () => showNotifications()}
      className="fas fa-bell icon-ntf" id="icon-ntf"></i>
      <NotificationList classState = { active } list={$store.getNotifications()} />
    </div>
  )
}

export default Notification
