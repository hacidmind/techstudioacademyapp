import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar";

const StudentLayout = () => {
  return (
    <div className="app__flex-3">
      <div style={{width: '5%', height: '100%'}}>
        <Sidebar />
      </div>
      <div style={{width: '95%', height: '100%'}}>
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
