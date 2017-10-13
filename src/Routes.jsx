import React, {
  PropTypes
} from 'react';
import {
  browserHistory as history,
  Router
} from 'react-router';

const propTypes = {
  store: PropTypes.object.isRequired
};

function Routes() {
  return (
    <Router history={history} />
  );
}

Routes.propTypes = propTypes;

export default Routes;
