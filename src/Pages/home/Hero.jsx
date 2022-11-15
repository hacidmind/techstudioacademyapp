import React from "react";
import { Link } from "react-router-dom";
// import Button from "../../components/buttons/Button";

const Hero = () => {
  return (
    <div
      style={{ height: `calc(100vh - 60px)` }}
      className="d-flex flex-column-reverse flex-xl-row align-items-center justify-content-center justify-content-lg-between container px-sm-7 px-xl-3"
    >
      <div className="text-white text-center text-xl-start">
        <h1 className="fw-bolder">
          Your Dream Tech <br className="d-none d-xl-block" /> Career Starts
          Here
        </h1>
        <p className="my-8">
          Techstudio offers graduates a path to a fulfilling career in the world
          of tech
        </p>
        <div className="gap-5 gap-lg-10 d-flex flex-column flex-md-row justify-content-center justify-content-xl-start">
          <Link to="/olt" className="btn btn-primary py-3 px-10">
            Take a course
          </Link>
          <Link
            to="/"
            className="btn btn-outline text-white border border-white py-3 px-10"
          >
            Log In
          </Link>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center hero_img">
        <img
          className="cc-img-fluid"
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476079/samples/techstudio/Icons%20and%20Images/Tech%20Studio%20images/Group_25358_ehga5i.png"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
