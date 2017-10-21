import React from "react";
import { Switch, Route } from "react-router-dom";

import asyncComponent from './AsyncComponent.hoc';

const AsyncAdmin = asyncComponent(() => import('./Admin.page.js'));
const AsyncHome = asyncComponent(() => import('./Home.page.js'));
const AsyncNotFound = asyncComponent(() => import('./NotFound.page.js'));

const Routes = () => (
  <Switch>
    <Route path="/admin" exact component={AsyncAdmin} />
    <Route path="/" exact component={AsyncHome} />
    <Route component={AsyncNotFound} />
  </Switch>
);

export default Routes;
