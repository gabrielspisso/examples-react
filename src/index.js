import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import App2 from "./App2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App2 titulo="hola flavio" pepe="jose" />
  </React.StrictMode>,
  rootElement
);
