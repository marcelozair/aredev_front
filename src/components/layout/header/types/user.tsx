import { Link, useHistory } from "react-router-dom"
import Notification from "../../../common/btnNotification/Notification"
import { useGlobalContext } from "../../../context/appContext"
import "./../style.css"

const User = () => {
  const histoty = useHistory()
  const $store = useGlobalContext()

  const cerrarSession = () => {
    localStorage.removeItem("token");
    $store.updateUser(null);
    histoty.push("/sign-in");
  }

  return (
    <>
      <div id="sidevar">
        <Link to="/inicio" className="logo-sidebar">
          <img src="./../../../assets/img/logo_web.svg" alt="" />
        </Link>
        <div className="menu-links">
          <Link to="/inicio">Inicio</Link>
          <Link to="/notas">Notas</Link>
          <Link to="grupos">Grupos</Link>
          <Link to="calendario">Calendario</Link>
          <Link to="contactos">Contactos</Link>
          <hr className="line-menu" />
        </div>
        <div className="menu-links">
          <Link to="grupos">
            <i className="fas fa-plus-square"></i>
            <p>Crear un grupo</p>
          </Link>
        </div>
      </div>
      <header className="header_user container">
        <nav className="container_2 header_user_menu">
            <Link to="/cuenta">Mi cuenta</Link>
            <a onClick={cerrarSession}>Cerrar sessión</a>
        </nav>
      </header>
    </>

  )

  /*
  return (
    <>
      <header className="header">
        <nav className="navbar container pt-4 pb-4" role="navigation" aria-label="main navigation">
          <h1 className="title-logo">Notify</h1>
          <ul className="navbar-menu-links">
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link onClick={logoutSession} >Logut</Link>
            </li>
            <li>
              <Notification />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )*/
}

export default User
