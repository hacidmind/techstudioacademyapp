import React from "react";
import { Outlet } from "react-router-dom";

import TutorSidebar from "./sidebar";

const TutorLayout = () => {
  return (
    <div className="app__flex-3 outlet">
      <div style={{ width: "6%", height: "100%" }}>
        <TutorSidebar />
      </div>
      <div className="outlet" style={{ width: "94%", height: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default TutorLayout;