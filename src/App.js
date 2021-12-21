import React from "react";
// Routes
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./Constants/routes";
// Pages
import { Home, Browse, Signin, Signup } from "./Pages";
// Helpers
import { IsUserRedirect, ProtectedRoute } from "./Helpers/Route";
// Hooks
import { useAuthListener } from "./Hooks";

export default function App() {
  const user = useAuthListener();

  return (
    <Router>
      <Switch>
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
        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exaxt
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
