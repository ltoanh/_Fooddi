import React from "react";
import "./navbar.css";
// =============== assets =======================
import imgLogo from "../../assets/logo/logo.svg";

// =============== router ======================
import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";

function index() {
  const user = {
    uid: '12334'
  };

  return (
    <nav id="navbar">
      <div className="container">
        <img id="nav-logo" height="40" src={imgLogo} alt="logo fooddi" />
        <div className="nav-menu">
          <ul className="nav__menu">
            <li className="nav__menu--link">
              <NavLink className="nav__menu--link-item" to={PATHS.HOMEPAGE}>
                {" "}
                Trang chủ{" "}
              </NavLink>
            </li>
            <li className="nav__menu--link">
              <NavLink className="nav__menu--link-item" to={PATHS.SHOP}>
                {" "}
                Cửa hàng{" "}
              </NavLink>
            </li>
          </ul>
          <ul className="nav__menu">
            <li className="nav__menu--link">
              <NavLink className="nav__menu--link-item" to={PATHS.CART}>
                <span id="nav-menu__cart-icon"><i class="nav-icon ri-shopping-cart-line"></i></span>
              </NavLink>
            </li>
            <li className="nav__menu--link">
              {user ? (
                <NavLink
                  className="nav__menu--link-item"
                  to={{
                    pathname: `/user/${user.uid}`
                  }}
                  exact
                >
                  <i class="nav-icon ri-user-fill"></i>
                </NavLink>
              ) : (
                <NavLink className="nav__menu--link-item" to={PATHS.LOGIN}>
                  Đăng nhập
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default index;
