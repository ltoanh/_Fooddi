/**
 * protect route have to login
 * if logged in:
 * redirect to page
 * else:
 * redirect to login page
 */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PATHS } from "../paths";

function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuth) {
          return <Component />;
        } else {
          return <Redirect to={PATHS.LOGIN} />;
        }
      }}
    ></Route>
  );
}

export default ProtectedRoute;
