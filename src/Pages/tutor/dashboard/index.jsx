import React, { useState } from "react";
import { RiDeleteBin5Line } from 'react-icons/ri';

import { Icons } from "../../../Icons&Images";
import Dashboard from "../../../components/user/dashboard";

const TutorDashboard = () => {
    const [showFileUploadModal, setshowFileUploadModal] = useState(false);
    const tutor = true;
  const userName = "Rafiu";
  const userIntroduction =
    "Welcome to your techstudio dashboard. Time to pass knowledge down to Your students.";
  const taskInfo = [
    {
      icon: Icons.TotalTask,
      title: "Enrolled Students",
      no: 24,
      bg: "#ECEAFE",
    },
    {
      icon: Icons.PendingTask,
      title: "Tasks assigned",
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
      <div className="app__flex tutor">
        <RiDeleteBin5Line />
      </div>
    </>
  );
  return (
    <Dashboard
      userName={userName}
      userIntroduction={userIntroduction}
      taskInfo={taskInfo}
      userOption={userOption}
      tutor={tutor}
      showFileUploadModal={showFileUploadModal}
      setshowFileUploadModal={setshowFileUploadModal}
    />
  );
};

export default TutorDashboard;
