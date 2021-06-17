import axios from "axios"
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react"
import { userLogin } from "../../../../service/userLogin"
import { iUserSignUp } from "../../../models/users.model";

import "./../style.css"
import { useGlobalContext } from "../../../context/appContext";
import { MessageAlerts, validationSignUp } from "../validations";
import { iValidation } from "../../../models/validation.model";

const Sigup = () => {
  const history = useHistory();
  const $store = useGlobalContext()
  const [errors, setErrors] = useState<iValidation[]>([])

  const setErrorsList = (errros: iValidation[]) => {
    setErrors(errros)
    setTimeout(() => {
      setErrors([])
    }, 3000)
  }

  const siginUser = async (e) => {
    e.preventDefault()

    const user : iUserSignUp = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    const errorsResult =  validationSignUp(user)
    
    if (errorsResult.length > 0) {
      setErrorsList(errorsResult)
      return;
    }


    try {
      // vereficando y almacenando credenciales
      const result = await axios.post("http://localhost:3000/signup", user)

      // 201 el usuario no existe
      if(result.status === 201) {
        const createMessage = new MessageAlerts(0, result.data.message)
        setErrorsList([createMessage])
        return;
      }

      $store.updateUser(result.data)
      localStorage.setItem("token", result.data.token)
      // redirection in account user
      history.push("/cuenta");
    } catch (err) {
    }
  }

  const validateToken = async () => {
    const result: any = await userLogin()
    if (!result.data.expired)
      history.push("/cuenta")
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
  })

  return (
    <div className="containerflex">
      <form className="form_user" onSubmit={(e) => siginUser(e)}>
        <div className="titles">
          <p className="title">Sign Up</p>
          <p className="subtitle">Enter your data</p>
          {errorPrint() }
        </div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input autoComplete="off" className="input" name="name" type="text" placeholder="Your name" />
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
        <div className="buttons">
          <button className="button">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Sigup