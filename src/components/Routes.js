import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route path="/" render={() => <div>Hello world</div>} />
  </Switch>
);

export default Routes;
