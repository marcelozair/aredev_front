import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

const Session = () => {

  useEffect( () => {
    const history = useHistory()
    history.push("/sign-in")
  }, [])

  return (
    <div>
      <h1>Necesitas iniciar session</h1>
    </div>
  )
}

export default Session
