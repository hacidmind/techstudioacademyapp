import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";
import { Images } from "../Icons&Images";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container" id="nav-container">
      <Link className="navbar-brand" to="/">
        <div className="logo">
          <div>
            <img src={Images.logo} alt="logo" />
          </div>
          <p>Techstudio Academy</p>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/about-us">
            About Us
          </Link>
          <div className="dropdown">
            <button
              className="dropdown-toggle btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Courses
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/frontend">
                  Frontend
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/data-science">
                  Data Science
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/fullstack">
                  Fullstack
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/mobile-development">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/ui-ux">
                  UI/UX
                </Link>
              </li>
            </ul>
          </div>
          <Link className="nav-link" to="/">
            Employers
          </Link>
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </div>
        <div className="auth-button">
          <button>sign up</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
