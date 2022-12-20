import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";

import "../../scss/sidebar.scss";
import { Icons, Images } from "../../Icons&Images";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const sideBarItems = [
    {
      name: "Dashboard",
      icon: Icons.dashboard,
      path: "/username/dashboard",
    },
    {
      name: "Classes",
      icon: Icons.classes,
      path: "/username/classes",
    },
    {
      name: "Messages",
      icon: Icons.messages,
      path: "/username/messages",
    },
  ];
  return (
    <>
      <nav className="mobile-nav">
        <article>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
        </article>
        {toggle && (
          <section onClick={() => setToggle(!toggle)}>
            <motion.div
              whileInView={{ x: [-80, 0] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="column-flex"
            >
              <section className="app__flex">
                <img src={Images.logo} alt="logo" />
              </section>
              <article className="column-flex">
                {sideBarItems.map((item, index) => (
                  <NavLink
                    activeclassname="active"
                    to={item.path}
                    className="column-flex"
                    style={{ gap: "19px" }}
                    key={index}
                  >
                    <div>
                      <img src={item.icon} alt="icon" />
                    </div>
                    <p>{item.name}</p>
                  </NavLink>
                ))}
              </article>
            </motion.div>
          </section>
        )}
      </nav>
      <nav className="side-nav column-flex">
        <section className="app__flex">
          <img src={Images.logo} alt="logo" />
        </section>
        <article className="column-flex">
          {sideBarItems.map((item, index) => (
            <NavLink
              activeclassname="active"
              to={item.path}
              className="column-flex"
              style={{ gap: "19px" }}
              key={index}
            >
              <div>
                <img src={item.icon} alt="icon" />
              </div>
              <p>{item.name}</p>
            </NavLink>
          ))}
        </article>
      </nav>
    </>
  );
};

export default Sidebar;
