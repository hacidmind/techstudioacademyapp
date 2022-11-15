import React from "react";

const Profile = () => {
  const style = {
    height: `6rem`,
    width: `6rem`,
  };

  return (
    <div className="d-flex gap-5 align-items-end">
      <div
        style={style}
        className="overflow-hidden border border-secondary border-4 rounded-circle"
      >
        <img
          className="cc-img-fluid"
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476103/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Mask_Group_45_azkyby.png"
          alt="avatar"
        />
      </div>
      <div className="text-start">
        <h5 className="text-info fs-xl fw-bold">Sherif Sorunke</h5>
        <p className="text-white fs-sm">Product Designer, Smartace</p>
      </div>
    </div>
  );
};

export default Profile;
