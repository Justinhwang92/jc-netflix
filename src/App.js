import React from "react";
// Routes
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./Constants/routes";
// Pages
import { Home, Browse, Signin, Signup } from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
