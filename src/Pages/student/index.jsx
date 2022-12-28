import React from "react";
import { Outlet } from "react-router-dom";

import StudentSidebar from "./sidebar";

const StudentLayout = () => {
  return (
    <div className="app__flex-3 outlet">
      <div style={{ width: "6%", height: "100%" }}>
        <StudentSidebar />
      </div>
      <div className="outlet" style={{ width: "94%", height: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
