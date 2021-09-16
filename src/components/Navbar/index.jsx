import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";

function index() {
  return (
    <navbar>
      <ul>
        <li>
          <NavLink to={PATHS.HOMEPAGE}> Home </NavLink>
        </li>
        <li>
          <NavLink to={PATHS.SHOP}> Shop </NavLink>
        </li>
      </ul>
    </navbar>
  );
}

export default index;
