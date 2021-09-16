/**
 * user authenticated access page not auth
 * if logged in:
 * redirect to homepage
 * else:
 * redirect to page
 */

import React from "react";
// ====================== route =======================
import { Redirect, Route } from "react-router-dom";
import { PATHS } from "../paths";

function AuthenticatedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuth) {
          return <Redirect to={PATHS.HOMEPAGE} />;
        } else {
          return <Component />;
        }
      }}
    ></Route>
  );
}

export default AuthenticatedRoute;
