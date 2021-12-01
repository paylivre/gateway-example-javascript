import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import Routes from "./routes";
import ForceReloadDataProvider from "./contexts/forceReloadData";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ForceReloadDataProvider>
      <Routes history={history} />
    </ForceReloadDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
