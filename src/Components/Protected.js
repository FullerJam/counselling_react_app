import React from 'react'
import { Route, Redirect, useLocation } from "react-router-dom";


function Protected({ authenticated, children, ...rest }) {
  initAttemptedRoute = useLocation().pathname;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default Protected

