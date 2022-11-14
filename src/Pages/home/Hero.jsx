import React from "react";
import { Link } from "react-router-dom";
// import Button from "../../components/buttons/Button";

const Hero = () => {
  return (
    <div
      style={{ height: `calc(100vh - 60px)` }}
      className="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center gap-10 justify-content-lg-between container"
    >
      <div className="text-white text-center text-lg-start">
        <h1 className="fs-5xl fw-bold f-s-44 f-w-800">
          Your Dream Tech <br /> Career Starts Here
        </h1>
        <p className="my-8 f-s-16 f-w-400 m-b-50">
          Techstudio offers graduates a path to a fulfilling career in the world
          of tech
        </p>
        <div className="gap-10 d-flex justify-content-center justify-content-lg-start my-20 my-lg-0">
          {/* <Button name={`Take a course`} type={`btn btn-primary px-7 py-2_5 f-s-16`} /> */}
          {/* <Button
            name={`Log In`}
            type={`btn btn-outline text-white border border-white px-7 f-s-16 hero-btn-2`}
          /> */}
          <Link
            to="/olt"
            className="btn btn-primary p-t-13 p-b-13 p-l-27 p-r-27 py-2_5 f-s-16"
          >
            Take a course
          </Link>
          <Link
            to="/"
            className="btn btn-outline p-t-13 p-b-13 p-l-27 p-r-27 text-white border border-white f-s-16 hero-btn-2"
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
