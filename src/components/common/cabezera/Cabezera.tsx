import React from 'react'
import "./style.css"
const Cabezera = ({textOne}) => {
  
  const style = {
  }

  return (
    <div className="header-top">
      <div className="user_data container_2">
        <div className="user_img">
        </div>
        <div className="user_text">
          <h1 className="name_title">{textOne}</h1>
          <p>Desarrollador Full Stack</p>
        </div>
      </div>
    </div>
  )
}

export default Cabezera
