import React from "react";
import Button from "../buttons/Button";

const Hero = () => {
  return (
    <div
      style={{ height: `calc(100vh - 60px)` }}
      className="d-flex align-items-center justify-content-between container"
    >
      <div className="text-white">
        <h1 className="fs-5xl fw-bold">
          Your Dream Tech <br /> Career Starts Here
        </h1>
        <p className="my-8">
          Techstudio offers graduates a path to a fulfilling career in the{" "}
          <br />
          world of tech
        </p>
        <div className="gap-10 d-flex">
          <Button name={`Take a course`} type={`btn btn-primary px-7 py-2_5`} />
          <Button
            name={`Take a course`}
            type={`btn btn-outline text-white border border-white px-7`}
          />
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476079/samples/techstudio/Icons%20and%20Images/Tech%20Studio%20images/Group_25358_ehga5i.png"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
