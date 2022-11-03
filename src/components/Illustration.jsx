import React from "react";

const Illustration = ({ size, img, title, desc }) => {
  return (
    <div style={{ width: size }} className="mx-auto">
      <img src={img} alt="illustration" />
      <h4 className="fs-lg fw-bold text-dark my-5">{title}</h4>
      <p style={{ letterSpacing: `1px` }} className="fs-sm">
        {desc}
      </p>
    </div>
  );
};

export default Illustration;
