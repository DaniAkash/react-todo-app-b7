import "./styles.css";

import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const $appRoot = document.querySelector("#app");

ReactDom.render(
  <App/>,
  $appRoot
)