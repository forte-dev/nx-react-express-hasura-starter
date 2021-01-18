import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

export function LoginRedirect() {
  const location = useLocation();
  const authentication = useSelector((store) => store.authentication);
  const authenticated = useSelector(
    (store) => store.authentication.authenticated
  );

  if (authenticated) {
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
          state: { referrer: location, ...authentication },
        }}
      />
    );
  }
  return null;
}

export default LoginRedirect;
