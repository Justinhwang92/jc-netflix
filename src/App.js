import React from "react";
// Routes
import { BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./Constants/routes";
// Pages
import { Home, Browse, Signin, Signup } from "./Pages";
// Helpers
import { IsUserRedirect, ProtectedRoute } from "./Helpers/Route";

export default function App() {
  const user = null;

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
    </Router>
  );
}
