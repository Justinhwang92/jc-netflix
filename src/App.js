import React from "react";
// Routes
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./Constants/routes";
// Pages
import { Home, Browse, Signin, Signup } from "./Pages";
// Helpers
import { IsUserRedirect } from "./Helpers/Route";

export default function App() {
  const user = {};

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}
