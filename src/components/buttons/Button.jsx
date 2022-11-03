import React from "react";

const PrimaryBtn = ({ name, height, type }) => {
  return (
    <button style={{ height: `${height}` }} className={type}>
      {name}
    </button>
  );
};

export default PrimaryBtn;
