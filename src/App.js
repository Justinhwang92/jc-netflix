import React from "react";
// Routes
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./Constants/routes";
// Pages
import { Home, Browse, Signin, Signup } from "./Pages";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}
