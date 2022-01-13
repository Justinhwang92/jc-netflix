import React from "react";
import { render } from "react-dom";
import App from "./App";
// Styles
import { GlobalStyles } from "./GlobalStyles";
import "normalize.css";
// Firebase
import { firebase } from "./Lib/Firebase.prod";
// Context
import { FirebaseContext } from "./Context/Firebase";

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
