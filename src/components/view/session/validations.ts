import { iUserLogin, iUserSignUp } from "../../models/users.model";
import { iValidation } from "../../models/validation.model";

const regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


export class MessageAlerts {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}



export const validationSignIn = (user: iUserLogin) => {

  const errors : iValidation[] = [] 

  if(user.email) {
    if(!regEmail.test(user.email)) 
      errors.push(new MessageAlerts(0, "Ingresa un correo valido"))
  } else {
    errors.push(new MessageAlerts(0, "Ingresa un correo"))
  }

  if(!user.password) {
    errors.push(new MessageAlerts(0, "Ingresa un contraseña"))
  }

  return errors
}


export const validationSignUp = (user: iUserSignUp) => {

  const errors : iValidation[] = [] 
  
  if(!user.name) {
    errors.push(new MessageAlerts(0, "Ingresa tu nombre"))
  }

  if(user.email) {
    if(!regEmail.test(user.email)) 
      errors.push(new MessageAlerts(0, "Ingresa un correo valido"))
  } else {
    errors.push(new MessageAlerts(0, "Ingresa un correo"))
  }

  if(!user.password) {
    errors.push(new MessageAlerts(0, "Ingresa una contraseña"))
  }

  return errors
}