import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink
      to="/"
      className="navbar-brand"
    >
      Car Market
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink
                to="/buy"
                className="dropdown-item"
              >
                Buy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sell"
                className="dropdown-item"
              >
                Sell
              </NavLink>
              {/* <a className="dropdown-item" href="/sell">Sell</a> */}
            </li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink
            to="/carmarket"
            className="nav-link"
          >
            About Car Market
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to="/contact"
            className="nav-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Nav;
