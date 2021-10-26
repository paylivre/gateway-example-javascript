import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import Routes from "./routes";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Routes history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);
