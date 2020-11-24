import React from 'react';
import "./assets/css/main.css"
import Home from "./pages/Home.js";
import Films from "./pages/Films.js";
import Starships from "./pages/Starships.js";
import People from "./pages/People.js";
import Planets from "./pages/Planets.js";
import Species from "./pages/Species.js";
import Login from "./pages/Login.js";
import { HashRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Films" component={Films} />
          <Route path="/Starships" component={Starships} />
          <Route path="/People" component={People} />
          <Route path="/Planets" component={Planets} />
          <Route path="/Species" component={Species} />
          <Route path="/Login" component={Login} />
        </Switch>
      </HashRouter>
  );
}