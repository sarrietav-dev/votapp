import React from 'react';
import { Redirect, Route } from 'react-router';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, authToken, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={() => (authToken ? children : <Redirect to="/login" />)}
  />
);

export default PrivateRoute;
