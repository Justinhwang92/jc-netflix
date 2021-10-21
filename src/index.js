import React from "react";
import { render } from "react-dom";
import App from "./app";
// Styles
import { GlobalStyles } from "./GlobalStyles";
import "normalize.css";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
