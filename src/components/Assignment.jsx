import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import { motion } from "framer-motion";

import { Icons } from "../Icons&Images";
import AssignmentModal from "./AssignmentModal";
import "../scss/assignment.scss";

const Assignment = () => {
  const [toggleAssignment, setToggleAssignment] = useState(false);

  const scheduler = [
    {
      date: "Today, 28th March, 2021",
      schedule: [
        {
          icon: Icons.video,
          notification: "New video has been uploaded",
          sender: "By Sorunke Sherif",
        },
        {
          icon: Icons.messages,
          notification: "Your tutor sent you a message",
          sender: "2:00 pm",
        },
        {
          icon: Icons.docs,
          notification: "New Resources has been uploaded",
          sender: "By Sorunke Sherif",
        },
      ],
    },
    {
      date: "Today, 27th March, 2021",
      schedule: [
        {
          icon: Icons.video,
          notification: "New video has been uploaded",
          sender: "By Sorunke Sherif",
        },
        {
          icon: Icons.messages,
          notification: "Your tutor sent you a message",
          sender: "2:00 pm",
        },
        {
          icon: Icons.docs,
          notification: "New Resources has been uploaded",
          sender: "By Sorunke Sherif",
        },
      ],
    },
  ];
  return (
    <>
      {toggleAssignment && (
        <motion.main
          //   whileInView={{ x: [1000, 0] }}
          //   transition={{ duration: 1, ease: "easeInOut" }}
          className="app__flex-5 assignment-modalContainer"
        >
          <AssignmentModal
            toggleAssignment={toggleAssignment}
            setToggleAssignment={setToggleAssignment}
          />
        </motion.main>
      )}
      <div className="assignment-component">
        <h3>Assignments</h3>
        <section className="article-details">
          <article className="detail-item app__flex-2">
            <div
              onClick={() => setToggleAssignment(true)}
              className="app__flex-2"
            >
              <CgAdd />
              <p>Add new</p>
            </div>
            <div className="app__flex">
              <img src={Icons.search} alt="search" />
            </div>
          </article>
          <article className="detail-schedule">
            {scheduler.map((item, index) => (
              <section key={index}>
                <p>{item.date}</p>
                <article>
                  {item.schedule.map((item, index) => (
                    <div key={index} className="app__flex-3">
                      <div className="app__flex">
                        <img src={item.icon} alt="" />
                      </div>
                      <div>
                        <h6>{item.notification}</h6>
                        <p>{item.sender}</p>
                      </div>
                    </div>
                  ))}
                </article>
              </section>
            ))}
          </article>
        </section>
      </div>
    </>
  );
};

export default Assignment;
