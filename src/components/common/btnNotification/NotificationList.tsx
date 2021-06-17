import React, { useEffect } from 'react'
import { iNotification } from '../../models/notification.model'

const NotificationList = ({ classState, list}) => {
  return (
    <ul className={`menu-notifications ${classState}`} id="list-ntf">
      {
        list.map((notification: iNotification) => {
          return (
            <li key={notification.id}>
              <div className="text">
                <span className="icon"></span>
                <p>{notification.message}</p>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default NotificationList
