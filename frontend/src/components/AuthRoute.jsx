import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

// eslint-disable-next-line react/prop-types
const AuthRoute = ({ children, ...rest }) => {
  const authToken = useSelector((state) => state.authToken);

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={() => (authToken !== '' ? children : <Redirect to="/login" />)}
    />
  );
};

export default AuthRoute;
