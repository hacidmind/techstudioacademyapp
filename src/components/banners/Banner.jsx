import React from "react";

const Banner = ({ children }) => {

  return (
    <div

      className="w-100 position-relative bg-blue d-flex align-items-center justify-content-center bannerI"
    >
      <img
        className="position-absolute top-0 start-0 my-10 mx-16 d-none d-lg-block"
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476114/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Repeat_Grid_38_ipl0tv.png"
        alt="img"
      />
      {children}
      <img
        className="position-absolute bottom-0 end-0 my-10 mx-16 d-none d-lg-block"
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476113/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Rectangle_7475_gijnxw.png"
        alt="img"
      />
    </div>
  );
};

export default Banner;
