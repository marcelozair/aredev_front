import React from 'react'
import { Link } from "react-router-dom"
import "./style.css"

const Box = ({ title, text, link }) => {
  return (
    <div className="box">
      <Link to={link}>
        <div className="box-img">
          <p>{title[0]}</p>
        </div>
        <div className="box_text">
          <p className="title_box">{title}</p>
          <p className="text_box">{text}</p>
        </div>
      </Link>
    </div>
  )
}

export default Box
