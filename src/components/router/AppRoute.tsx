import { useState , useEffect} from "react";
import { Route, useHistory } from "react-router-dom";
import { userLogin } from "../../service/userLogin"


const Routes = ({ path, component: Component, isPrivate }) => {
  const history = useHistory();

  const [token, setToken] = useState<Boolean>(false);

  const sessionToken = async () => {
    const result : any = await userLogin()
    setToken(result.data.expired)
  }
  
  useEffect(() => {
    sessionToken()
  }, [])

  return (
    <Route
      path={path}
      render={() => isPrivate && !token ? <Component/> : history.push("/sign-in")}
    />
  )
}

export default Routes
