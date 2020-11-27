import React, { useLayoutEffect, useState } from 'react';
import "./assets/css/main.css"
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Menu from "./pages/Menu.js";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Firebase from './services/FirebaseConnect'

export default function App() {

  const [user, setUser] = useState(null)

  useLayoutEffect(() => {
    Firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user !== null) {
          setUser(user.uid)
        } else {
          setUser(null)
        }
      })
  }, [])

  const PrivateRoute = ({ component: Component }) => {
    return <Route
      render={(props => {
        if (user) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: "/Login" }} />
        }
      })}
    />
  }

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Login" component={Login} />
        <PrivateRoute path="/Menu" component={Menu} />
      </Switch>
    </HashRouter>
  );
}