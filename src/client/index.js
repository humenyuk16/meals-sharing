import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker.js";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
