import axios from "axios"
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react"
import { userLogin } from "../../../../service/userLogin"
import { useGlobalContext } from "../../../context/appContext";
import socket from "./../../../../service/socketIO";

// interfaces
import { iUserLogin } from "../../../models/users.model";

// estilos
import "./../style.css"
import { validationSignIn , MessageAlerts } from "../validations";
import { iValidation } from "../../../models/validation.model";
import { resolve } from "path";

const Signin = () => {
  const $store = useGlobalContext();
  const history = useHistory();
  const [errors, setErrors] = useState<iValidation[]>([])

  const setErrorsList = (errros: iValidation[]) => {
    setErrors(errros)
    setTimeout(() => {
      setErrors([])
    }, 3000)
  }

  const siginUser = async (e) => {
    e.preventDefault()

    const user: iUserLogin = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    const errorsResult : iValidation[] = validationSignIn(user)

    if (errorsResult.length > 0) {
      setErrorsList(errorsResult)
      return;
    }

    try {
      const result = await axios.post("http://localhost:3000/signin", user)

      if(result.status === 201) {
        const createMessage = new MessageAlerts(0, result.data.message)
        setErrorsList([createMessage])
        return;
      }

      if(result.status === 202) {
        const createMessage = new MessageAlerts(0, result.data.message)
        setErrorsList([createMessage])
        return;
      }

      $store.updateUser(result.data)
      localStorage.setItem("token", result.data.token)
      socket.emit("conectado", result.data.id)
      history.push("/cuenta");
    } catch (error) {
    }
  }

  const validateToken = async () => {
    const result = await userLogin()
    if (!result.data.expired) return history.push("/cuenta")
  }

  const errorPrint = () => {
    if(errors.length ) {
      return (
        <div className="errors"> 
          {
            errors.map(item => {
              return <p key={item.message} > {item.message}</p>
            })
          }
        </div>
      )
    } else {
      ""
    }
      
  }

  useEffect(() => {
    validateToken()
  }, [])

  return (
    <div className="fondo">
      <div className="containerflex">
        <form onSubmit={(e) => siginUser(e)}>
          <div className="form_user">
          <div className="titles">
            <p className="title">Sign In</p>
            <p className="subtitle">Enter your data</p>
            <div className="message-alerts">
              {errorPrint() }
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input autoComplete="off" className="input" name="email" type="email" placeholder="example@example.com" />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input autoComplete="off" className="input" name="password" type="password" placeholder="Your password" />
            </div>
          </div>
          <div className="buttons mt-5">
            <button type="submit" className="button">Sign In</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin