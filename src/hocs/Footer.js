
import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import techimage from "../Icons&Images/TechStudioImages/Image129.png";
import fb from "../Icons&Images/TechStudioIcons/facebook.png"
import twitter from "../Icons&Images/TechStudioIcons/twitter.png"
import linkedin from "../Icons&Images/TechStudioIcons/linkedin.png"


const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-lg-3 col-md-4 mb-3">
              <img src={techimage} alt="" />{" "}
              <span className="text-white">Techstudio Academy</span>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>Courses</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/frontend" className="nav-link p-0 text-white">  Frontend Development</Link></li>
                <li className="nav-item mb-2"><Link to="/mobile-development" className="nav-link p-0 text-white">Andriod Development</Link></li>
                <li className="nav-item mb-2"><Link to="/ui-ux" className="nav-link p-0 text-white">UI/UX Design</Link></li>
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white ">Backend Development</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 mb-3">
              <h5><Link to="/about-us" className="nav-link p-0 text-white">About Us</Link></h5>
              <h5><Link to="contact" className="nav-link p-0 text-white">Contact</Link> </h5>
            </div>
            <div className="col-lg-3 col-md-12">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2 div-move">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control input-tag"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary btn-move" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-end py-4 my-4 border-top">
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <Link className="link-light" to="/">
                  <img src={twitter} alt="" />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-light" to="/">
                <img src={fb} alt="" />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-light" to="/">
                <img src={linkedin} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;