import React from 'react';

import Sidebar from '../../../components/user/sidebar';
import { Icons } from '../../../Icons&Images';

const TutorSidebar = () => {
    const sideBarItems = [
        {
          name: "Dashboard",
          icon: Icons.dashboard,
          path: "/tutor/dashboard",
        },
        {
          name: "Classes",
          icon: Icons.classes,
          path: "/tutor/classes",
        },
        {
          name: "Messages",
          icon: Icons.messages,
          path: "/tutor/messages",
        },
        {
          name: "Tasks",
          icon: Icons.messages,
          path: "/tutor/tasks",
        },
      ];

  return (
    <Sidebar sideBarItems={sideBarItems} />
  )
}

export default TutorSidebar;