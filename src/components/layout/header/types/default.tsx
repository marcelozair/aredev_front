import { Link } from "react-router-dom"
import React from 'react'

import "./../style.css"

const Default = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <h1 className="title-logo">Notify</h1>
          <ul className="navbar-menu-links">
            <li>
              <Link to="/sign-in">Sign in</Link>
            </li>
            <li>
              <Link className="active" to="/sign-up">Sign up</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Default
