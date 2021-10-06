import React from "react";
import "./navbar.css";
//========================== library ======================
import $ from "jquery";

// =============== assets =======================
import imgLogo from "../../assets/logo/logo-white.svg";

// =============== router ======================
import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";

function index() {
  const user = {
    uid: '12334'
  };

  // =========================== event ==========================
  $(window).scroll(() => {
    if($(window).scrollTop()){
      $("#navbar").addClass("black-bg");
    } else {
      $("#navbar").removeClass("black-bg");
      
    }
  })

  return (
    <nav id="navbar">
      <div className="container">
        <img id="nav-logo" height="40" src={imgLogo} alt="logo fooddi" />
        <div className="nav-menu">
          <ul className="nav__menu">
            <li className="nav__menu--link">
              <NavLink className="nav__menu--link-item" to={PATHS.HOMEPAGE}>
                Homepage
              </NavLink>
            </li>
            <li className="nav__menu--link">
              <NavLink className="nav__menu--link-item" to={PATHS.SHOP}>
                Shop
              </NavLink>
            </li>
            <li className="nav__menu--link">
              <NavLink className="nav__menu--link-item" to="">
                About
              </NavLink>
            </li>
            <li className="nav__menu--link">
              <NavLink className="nav__menu--link-item" to="">
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="nav__menu">
            <li className="nav__menu--link">
              <NavLink className="nav__menu--link-item" to={PATHS.CART}>
                <span id="nav-menu__cart-icon"><i className="nav-icon ri-shopping-cart-line"></i></span>
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
                  <i className="nav-icon ri-user-fill"></i>
                </NavLink>
              ) : (
                <NavLink className="nav__menu--link-item" to={PATHS.LOGIN}>
                  Login
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
