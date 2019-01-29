import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import RootRoute from './components/routes/RootRoute';

// Page Components
import TopPage from './components/TopPage';

export const enum PATH {
  ROOT          = '/',
  MAIN          = '/main',
}

const contentRoute =
  <Switch>
    <Route exact path={PATH.ROOT} component={TopPage} />
  </Switch>

export default (
  <HashRouter>
    <RootRoute content={contentRoute} />
  </HashRouter>
)
