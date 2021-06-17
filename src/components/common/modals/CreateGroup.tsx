import React, { useState } from 'react'
import { useGlobalContext } from "./../../context/appContext"

import "./style.css"

const CreateNotas = ({ isOpen, onRequestClose }) => {
  const $store = useGlobalContext();
  const [title, settitle] = useState("Nueva nota")

  function createGroup(e) {
    e.preventDefault()
  }

  return (
    <div className={"modal show_" + isOpen}>
      <div className="modal_content">
        <p>Crea una nueva Nota</p>
        <form onSubmit={createGroup}>
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