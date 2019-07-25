import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { Provider } from "../src/Components/Context";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
