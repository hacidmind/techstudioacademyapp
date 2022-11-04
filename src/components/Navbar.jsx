import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import techimage from "../Icons&Images/TechStudioImages/Image129.png";
import Button from "./buttons/Button";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-blue fixed-top">
    <div className="container py-3">
      <Link className="navbar-brand" to="/">
        <div className="d-flex align-items-center gap-2">
          <img src={techimage} alt="logo" />
          <span className="fs-lg fw-bold text-white">Techstudio Academy</span>
        </div>
      </Link>

      <HiOutlineMenuAlt4
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler text-white fs-7xl border-0"
      />

      <div
        className="collapse navbar-collapse d-lg-flex justify-content-between"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav text-center gap-12 ms-lg-40 fs-sm">
          <Link
            className="nav-link active text-white"
            aria-current="page"
            to="/"
          >
            About Us
          </Link>
          <Link className="nav-link text-white" to="/about">
            Courses
          </Link>
          <Link className="nav-link text-white" to="/about">
            Employers
          </Link>
          <Link className="nav-link text-white" to="/about">
            Contact Us
          </Link>
        </div>
        <div className="d-flex gap-3 justify-content-center my-10 my-lg-0">
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
