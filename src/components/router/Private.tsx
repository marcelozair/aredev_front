import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import { userLogin } from "./../../service/userLogin"
import Session from "./Session";

const Private = ({ path, component: Component, isProps = false }) => {
  const [token, setToken] = useState<any>({})
  const history = useHistory()

  const authPrivateRoute = () => {
    if(token["expired"]){
      if (!token.expired) {
        return <Route path={path} component={Component} />
      } else {
        history.push("/sign-in")
        return;
      }
    }

  }

  const tokenResult = async () => {
    const result = await userLogin()
    setToken(result.data);
  } 


  useEffect (() => {
    tokenResult()
  }, [])
  
  return <> { authPrivateRoute()} </>
}

export default Private