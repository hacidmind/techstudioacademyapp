import React from 'react';

import Sidebar from '../../../components/user/sidebar';
import { Icons } from '../../../Icons&Images';

const StudentSidebar = () => {
    const sideBarItems = [
        {
          name: "Dashboard",
          icon: Icons.dashboard,
          path: "/student/dashboard",
        },
        {
          name: "Classes",
          icon: Icons.classes,
          path: "/student/classes",
        },
        {
          name: "Messages",
          icon: Icons.messages,
          path: "/student/messages",
        },
      ];

  return (
    <Sidebar sideBarItems={sideBarItems} />
  )
}

export default StudentSidebar;