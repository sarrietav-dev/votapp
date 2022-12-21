/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = ({ children, ...rest }) => {
  const authToken = useSelector((state) => state.auth.authToken);

  return (
    <Route
      {...rest}
      render={() => (authToken !== '' ? children : <Redirect to="/login" />)}
    />
  );
};

export default AuthRoute;
