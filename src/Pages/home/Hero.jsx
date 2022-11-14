import React from "react";
import { Link } from "react-router-dom";
// import Button from "../../components/buttons/Button";

const Hero = () => {
  return (
    <div
      style={{ height: `calc(100vh - 60px)` }}
      className="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center gap-10 justify-content-lg-between container px-7 px-xl-3"
    >
      <div className="text-white text-center text-lg-start ">
        <h1 className="fs-4xl fw-bold">
          Your Dream Tech <br /> Career Starts Here
        </h1>
        <p className="my-8 m-b-50">
          Techstudio offers graduates a path to a fulfilling career in the world
          of tech
        </p>
        <div className="gap-10 d-flex justify-content-center justify-content-lg-start my-20 my-lg-0">
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
      <div className="d-flex align-items-center justify-content-center">
        <img
          className="hero_img"
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476079/samples/techstudio/Icons%20and%20Images/Tech%20Studio%20images/Group_25358_ehga5i.png"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
