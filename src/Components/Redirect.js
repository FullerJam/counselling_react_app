import React from 'react'
import { Route, Redirect, useLocation } from "react-router-dom";


let initAttemptedRoute = "/";

function RedirectRoute({ authenticated, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !authenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: initAttemptedRoute,
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
export default RedirectRoute