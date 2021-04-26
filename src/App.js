import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./routes/home/Home";
import Login from "./routes/login/Login";

function App() {
  return (
    <Switch>
      {/**<PrivateRoute path="/account/:id" /> */}
      {/**<PrivateRoute path="/recipes/add" /> */}
      {/**<PrivateRoute path="/recipes/:id/edit" /> */}
      {/**<PrivateRoute path="/recipes/:id" /> */}
      {/**<Route path="/recipes" /> */}
      {/**<Route path="/register" /> */}

      <Route path="/login" component={Login}/>
      <Route path="/" component={Home}/> 
    </Switch>
  );
}

export default App;
