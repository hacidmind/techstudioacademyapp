import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import techimage from "../Icons&Images/TechStudioImages/Image129.png";
import Button from "../components/buttons/Button";
import { FaChevronDown } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      window.addEventListener("scroll", () => {
        let { clientHeight } = this.$refs.nav.$el;
        window.scrollY > clientHeight
          ? (this.fixed = true)
          : (this.fixed = false);

        window.scrollY > 1000
          ? this.$refs.topButton.$el.classList.remove("d-none")
          : this.$refs.topButton.$el.classList.add("d-none");
      });
    });
  });

  return (
    <nav className="navbar navbar-expand-lg bg-blue">
      <div className="container py-3 px-7 px-xl-3">
        <Link className="navbar-brand" to="/">
          <div className="d-flex align-items-center gap-2">
            <img className="logo" src={techimage} alt="logo" />
            <span className="fs-md fw-bold text-white">Techstudio Academy</span>
          </div>
        </Link>

        <HiOutlineMenuAlt4
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler text-white fs-6xl border-0"
        />

        <div
          className="collapse navbar-collapse d-lg-flex justify-content-between ms-lg-10 ms-xl-24"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav align-items-center text-center gap-8 fs-sm">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              to="/about-us"
            >
              About Us
            </Link>
            <div className="dropdown">
              <div
                className="dropdown-toggle btn fs-sm text-white border-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
                <FaChevronDown className="ms-2 fs-sm" />
              </div>
              <ul className="dropdown-menu mt-5">
                <li className="my-2">
                  <Link className="dropdown-item fs-sm py-2" to="/frontend">
                    Frontend
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="dropdown-item fs-sm py-2" to="/data-science">
                    Data Science
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="dropdown-item fs-sm py-2" to="/fullstack">
                    Fullstack
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    className="dropdown-item fs-sm py-2"
                    to="/mobile-development"
                  >
                    Mobile Development
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="dropdown-item" to="/ui-ux">
                    UI/UX
                  </Link>
                </li>
              </ul>
            </div>
            <Link className="nav-link text-white" to="/employers">
              Employers
            </Link>
            <Link className="nav-link text-white" to="/contact">
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
              type={`btn btn-outline px-8 border-0 text-white fs-sm`}
              height={`40px`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
