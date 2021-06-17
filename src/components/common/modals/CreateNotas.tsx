import React, { useState } from 'react'
import { useGlobalContext } from "./../../context/appContext"
import "./style.css"
const CreateNotas = ({ isOpen, onRequestClose }) => {
  const $store = useGlobalContext();
  const [title, settitle] = useState("Nueva nota")

  function createNota(e) {
    e.preventDefault()
    $store.createNota({title, body: ""})
  }

  // seguimiento de tareas - asignar tareas - tiempo de usar la tarea
  // medir el tiempo que te toma hacer una tarea
  // integraciones de git hub - git hub
  // plataforma de llamadas

  return (
    <div className={"modal show_" + isOpen}>
      <div className="modal_content">
        <p>Crea una nueva Nota</p>
        <form onSubmit={createNota}>
          <input value={title} className="input_darck" type="text" onChange={(e) => settitle(e.target.value)} />
          <div className="buttons">
            <button type="button" className="btn_white" onClick={onRequestClose}>cerrar</button>
            <button type="submit" className="btn_white">Crear nota</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNotas