import React from "react";
import { Link } from "react-router-dom";
import logo from "../resources/logo192.png";

const MainNavigationBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Sorinel Piticu
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  Item1
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  Item2
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  Item3
                </div>
              </li>
            </ul>
            <Link to="/login">
              <button className="btn btn-outline-success" type="submit">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigationBar;
