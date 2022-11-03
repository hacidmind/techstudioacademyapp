import React from "react";
import { Link } from "react-router-dom";
import techimage from "../Icons&Images/TechStudioImages/Image129.png";
import Button from "./buttons/Button";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-transparent">
    <div className="container py-3">
      <Link className="navbar-brand" to="/">
        <div className="d-flex align-items-center gap-2">
          <img src={techimage} alt="logo" />
          <span className="fs-lg fw-bold">Techstudio Academy</span>
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
      <div
        className="collapse navbar-collapse d-lg-flex justify-content-between"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav text-center gap-12 ms-lg-40 fs-sm">
          <Link className="nav-link active" aria-current="page" to="/">
            About Us
          </Link>
          <Link className="nav-link" to="/about">
            Courses
          </Link>
          <Link className="nav-link" to="/about">
            Employers
          </Link>
          <Link className="nav-link" to="/about">
            Contact Us
          </Link>
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <Button
            name="Sign In"
            type={`btn btn-primary px-8 fs-sm`}
            height={`40px`}
          />
          <Button
            name="Sign Up"
            type={`btn btn-outline px-8 border-0 fs-sm`}
            height={`40px`}
          />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
