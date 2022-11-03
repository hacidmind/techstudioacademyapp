import React from "react";

const Banner = ({ children }) => {
  const style = {
    height: `25.25rem`,
  };

  return (
    <div
      style={style}
      className="w-100 position-relative bg-blue rounded-5 d-flex align-items-center justify-content-center"
    >
      <img
        className="position-absolute top-0 start-0 my-10 mx-16"
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476114/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Repeat_Grid_38_ipl0tv.png"
        alt="img"
      />
      {children}
      <img
        className="position-absolute bottom-0 end-0 my-10 mx-16"
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476113/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Rectangle_7475_gijnxw.png"
        alt="img"
      />
    </div>
  );
};

export default Banner;
