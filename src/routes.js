/* eslint-disable import/no-duplicates */
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import App from "./app";
import PaylivreDev from "./app";

const BrowserRouter = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:environment" component={PaylivreDev} />
        <Route path="*" component={App} />
      </Switch>
    </Router>
  );
};

export default BrowserRouter;
