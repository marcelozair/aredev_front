import React, { useEffect, useState } from 'react'
import CreateNotas from '../../common/modals/CreateNotas'
import Box from '../../common/box/Box'
import { useGlobalContext } from '../../context/appContext'

import "./style.css"

const Notas = () => {
  const [show, setShow] = useState<boolean>(false)
  const $store = useGlobalContext();

  function toggleModal() {
    setShow(!show);
  }

  useEffect(() => {
    $store.loadNotas()
  }, [])


  return (
    <div className="wrapper container">
      <div className="cabezara">
        <div className="container_2 cabezara_container">
          <div className="cabezara_text">
            <h1 className="title-cabezera">Tus Notas</h1>
            <button className="button_btn" onClick={toggleModal} >Nueva nota</button>
          </div>
        </div>
      </div>
      <div className="container_2">
        
        <div className="notas">
          {
            $store.getNotas().map((nota) => {
              const time = new Intl.DateTimeFormat('en-US').format(new Date(nota.created_at))
              const link = "notas/" + nota.id
              return <Box title={nota.title} text={time} link={link} key={nota.id}/>
            })
          }
        </div>
      </div>
      <CreateNotas
        isOpen={show}
        onRequestClose={toggleModal}
      />
    </div>
  )
}

export default Notas
/*
*/