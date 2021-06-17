import Header from "./components/layout/header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./style.css";

import Signup from "./components/view/session/Signup/Signup";
import Signin from "./components/view/session/Signin/Signin";

import AppContext from "./components/context/appContext";

import { RouterView } from "./routes/routes";
import Alert from "./components/common/alerts/Alert";
import AppRoute from "./components/router/AppRoute"

export default function App(){
    return (
      <AppContext>
      <Router>
        <Header />
        <Alert />
        <Switch>
          {
            RouterView.map(route => {
              return (<AppRoute 
              key={route.path}
              path={route.path} 
              component={route.component}
              isPrivate={route.isPrivate}/>)
            })
          }
          <Route path="/sign-up" component={ Signup } />
          <Route path="/sign-in" component={ Signin } />
          <Route path="/" exact component={ Signup } />
        </Switch>
      </Router>
      </AppContext>
    )
}