import React from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import history from '../history';
import routes from '../constants/routes';
import Home from '../components/Home';

const propTypes = { };

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={routes.ROOT} component={Home} />
      </Switch>
    </Router>
  );
}

Routes.propTypes = propTypes;

export default Routes;
