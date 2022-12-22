import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { CgAdd } from "react-icons/cg";
import { ImAttachment } from "react-icons/im";
import { motion } from "framer-motion";

import "../../scss/classes.scss";
import User from "../../components/User";
import { Icons, Images } from "../../Icons&Images";

const Classes = () => {
  const [showLive, setShowLive] = useState(true);
  const [showRecorded, setShowRecorded] = useState(false);
  const [toggleAssignment, setToggleAssignment] = useState(false);

  const handleShowLive = () => {
    setShowLive(true);
    setShowRecorded(false);
  };

  const handleShowRecorded = () => {
    setShowRecorded(true);
    setShowLive(false);
  };

  const StudentClass = [
    {
      img: Images.classStudent,
      title: "Becoming a UX Designer from Scratch: Things to look out for",
      name: "Emma Gannon",
      author: "Author",
      profession: "Broadcaster",
      time: "9 AM",
    },
    {
      img: Images.classStudent,
      title: "Becoming a UX Designer from Scratch: Things to look out for",
      name: "Emma Gannon",
      author: "Author",
      profession: "Broadcaster",
      time: "9 AM",
    },
    {
      img: Images.classStudent,
      title: "Becoming a UX Designer from Scratch: Things to look out for",
      name: "Emma Gannon",
      author: "Author",
      profession: "Broadcaster",
      time: "9 AM",
    },
    {
      img: Images.classStudent,
      title: "Becoming a UX Designer from Scratch: Things to look out for",
      name: "Emma Gannon",
      author: "Author",
      profession: "Broadcaster",
      time: "9 AM",
    },
    {
      img: Images.classStudent,
      title: "Becoming a UX Designer from Scratch: Things to look out for",
      name: "Emma Gannon",
      author: "Author",
      profession: "Broadcaster",
      time: "9 AM",
    },
    {
      img: Images.classStudent,
      title: "Becoming a UX Designer from Scratch: Things to look out for",
      name: "Emma Gannon",
      author: "Author",
      profession: "Broadcaster",
      time: "9 AM",
    },
    {
      img: Images.classStudent,
      title: "Becoming a UX Designer from Scratch: Things to look out for",
      name: "Emma Gannon",
      author: "Author",
      profession: "Broadcaster",
      time: "9 AM",
    },
  ];

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
          // whileInView={{ x: [1000, 0] }}
          // transition={{ duration: 1, ease: "easeInOut" }}
          className="app__flex-5 assignment-modalContainer"
        >
          <section className="assignment-modal">
            <article>
              <div className="app__flex-2">
                <h3>Submit Assignment</h3>
                <HiX onClick={() => setToggleAssignment(!toggleAssignment)} />
              </div>
              <h5>Fundamentals of Design</h5>
              <h6>Description</h6>
              <div className="description-input">
                <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
              </div>

              <h6 className="attachment">Attachments</h6>
              <article className="app__flex-3">
                <div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="file-upload"
                    onChange=""
                  />
                  <label className="app__flex" htmlFor="file">
                    <ImAttachment />
                    Browse files or drag and drop here
                  </label>
                </div>
                <button>Add</button>
              </article>
            </article>

            <div className="modal-btns app__flex">
              <button className="submit">submit</button>
              <button
                onClick={() => setToggleAssignment(!toggleAssignment)}
                className="cancel"
              >
                Cancel
              </button>
            </div>
          </section>
        </motion.main>
      )}
      <main className="classes">
        <section className="classes__section1 app__flex-2">
          <h1>Classes</h1>
          <User />
        </section>
        <section className="classes__section2">
          <article className="classes__section2-article1 app__flex-3">
            <p
              onClick={handleShowLive}
              className={showLive ? "active app__flex" : "app__flex"}
            >
              LIVE
            </p>
            <p
              style={{ borderLeft: "1px solid #0000001F" }}
              onClick={handleShowRecorded}
              className={showRecorded ? "active app__flex" : "app__flex"}
            >
              RECORDED
            </p>
          </article>
          <article className="classes__section2-article2 app__flex-2">
            <div>
              {StudentClass.map((item, index) => (
                <div key={index} className="app__flex-2">
                  <div className="article2-user app__flex">
                    <img src={item.img} alt="user" />
                  </div>
                  <div className="article2-details app__flex-2">
                    <div className="column-flex">
                      <h6>{item.title}</h6>
                      <div className="app__flex-2">
                        <p>
                          {item.name}, {item.author}, {item.profession}
                        </p>
                        <div className="app__flex">
                          <div className="app__flex">
                            <img src={Icons.clock} alt="clock" />
                          </div>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button>start</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
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
          </article>
        </section>
      </main>
    </>
  );
};

export default Classes;
