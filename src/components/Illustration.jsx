import React from "react";

const Illustration = ({ size, img, title, desc }) => {
  return (
    <div style={{ width: size }} className="mx-auto illustration_3">
      <div>
        <img src={img} alt="illustration" />
      </div>
      <h4 className="fs-lg fw-bold text-dark my-5">{title}</h4>
      <p style={{ letterSpacing: `1px` }} className="fs-sm px-20 px-lg-0">
        {desc}
      </p>
    </div>
  );
};

export default Illustration;
