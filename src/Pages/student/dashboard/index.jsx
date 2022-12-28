import React from "react";
import { Icons } from "../../../Icons&Images";

import Dashboard from "../../../components/user/dashboard";

const StudentDashboard = () => {
  const userName = "Tomiwa";
  const userIntroduction =
    "You can be the best you can on this platform. Learn anytime and boost your skills";
  const taskInfo = [
    {
      icon: Icons.TotalTask,
      title: "Total Tasks",
      no: 24,
      bg: "#ECEAFE",
    },
    {
      icon: Icons.PendingTask,
      title: "Pending Tasks",
      no: 12,
      bg: "#D9EDFF",
    },
    {
      icon: Icons.submittedTask,
      title: "Tasks submitted",
      no: 12,
      bg: "#EBF0E6",
    },
    {
      icon: Icons.timeLapse,
      title: "Weeks Remaining",
      no: "07",
      bg: "#E000171A",
    },
  ];

  const userOption = (
    <>
      <div className="app__flex">
        <img src={Icons.download} alt="download icon" />
      </div>
      <p className="download">Download</p>
    </>
  );
  return (
    <Dashboard
      userName={userName}
      userIntroduction={userIntroduction}
      taskInfo={taskInfo}
      userOption={userOption}
    />
  );
};

export default StudentDashboard;
