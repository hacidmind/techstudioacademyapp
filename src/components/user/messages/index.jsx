import React, { useEffect, useMemo, useState } from "react";

import "../../../scss/messages.scss";
import User from "../../User";
import { Images } from "../../../Icons&Images";


const Messages = () => {
  const [active, setActive] = useState({
    activeObject: null,
    objects: [],
  });
  const [displayMessages, setDisplayMessages] = useState({});

  const messageList = useMemo(
    () => [
      {
        id: 1,
        icon: Images.user,
        sender: "Olawunmi Williams",
        email: "Olawunmiwilliams@company.com",
        date: "Oct 23, 2020",
        message:
          "Hey, can you share me new design course? Because I do not have this one. Thanks!",
        time: "Now",
        occupation: "Design student",
      },
      {
        id: 2,
        icon: Images.user,
        sender: "Elizabeth Oteje",
        message:
          "Hey, can you share me new design course? Because I do not have this one. Thanks!",
        email: "Olawunmiwilliams@company.com",
        date: "Oct 23, 2020",
        time: "3:52 PM",
        occupation: "Design student",
      },
      {
        id: 3,
        icon: Images.user,
        sender: "Olawunmi Williams",
        message:
          "Hey, can you share me new design course? Because I do not have this one. Thanks!",
        email: "Olawunmiwilliams@company.com",
        date: "Oct 23, 2020",
        time: "3:52 PM",
        occupation: "Design student",
      },
      {
        id: 4,
        icon: Images.user,
        sender: "Olawunmi Williams",
        message:
          "Hey, can you share me new design course? Because I do not have this one. Thanks!",
        email: "Olawunmiwilliams@company.com",
        date: "Oct 23, 2020",
        time: "3:52 PM",
        occupation: "Design student",
      },
    ],
    []
  );

  useEffect(() => {
    setActive((prev) => ({ ...prev, objects: messageList }));
  }, [messageList]);

  const toggleActive = (i) => {
    setActive({ ...active, activeObject: active.objects[i] });
    setDisplayMessages(active.objects[i]);
  };

  const toggleActiveClassName = (i) => {
    if (active.objects[i] === active.activeObject) {
      return "active app__flex-3";
    } else {
      return "app__flex-3";
    }
  };

  const renderComponent = active.objects.map((item, index) => (
    <div
      onClick={(e) => toggleActive(index)}
      key={index}
      className={toggleActiveClassName(index)}
    >
      <div className="body-user img-size">
        <img src={item.icon} alt="sender" />
      </div>
      <div className="body-snippet">
        <div className="app__flex-2">
          <h6>{item.sender}</h6>
          <span className="app__flex">2</span>
          <p>{item.time}</p>
        </div>
        <p>{item.message}</p>
      </div>
    </div>
  ));

  return (
    <main className="messages app__flex-2">
      <section className="messages__list">
        <article className="messages__list-head">
          <div className="app__flex-3 head-header">
            <h1>Messages</h1> <span className="app__flex">10</span>
          </div>
          <div className="head-search app__flex">
            <input type="text" placeholder="search by chats or keywords" />
          </div>
        </article>
        <article className="messages__list-body">{renderComponent}</article>
      </section>
      <section className="messages__info">
        <article className="messages__info-header">
          <div className="header-user app__flex-5">
            <User />
          </div>
          <div className="header-messenger app__flex-3">
            <div className="messenger-icon img-size">
              <img src={displayMessages.icon} alt="user" />
            </div>
            <div className="messenger-details">
              <h4>{displayMessages.sender}</h4>
              <div className="app__flex-2">
                <p>{displayMessages.occupation}</p>
                <p>{displayMessages.email}</p>
                <div className="app__flex-2" style={{gap: '5px'}}>
                  <p>{displayMessages.time}</p>
                  <p>{displayMessages.date}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="messages__info-body">
            <div className="body-message">
                <h5>I need the new design files!</h5>
                <p>Hey, can you share me new design course? Because I do not have this one. Thanks! 
                    <br />
                    <br />
                    Stock Options: Pursuant to the Company’s Equity Incentive Plan (the “Plan”), you will be granted an option to purchase 0 shares of the Company’s common stock at an exercise price equal to the fair market value of those shares on the date of grant. Your stock option will be subject to and governed by the terms and conditions of the Plan and the Company’s standard form of stock option agreement, which you will be required to sign as a condition of your stock option grant. 
                    <br />
                    <br />
                    At-Will Employment: Your employment with the Company is “at will,” and thus you or Company may terminate our employment relationship at any time, with or without cause or advance notice.</p>
                    <button>Reply</button>
            </div>
            <div className="body-message">
                <h4>Olawunmi williams</h4>
                <p>Manager should be able to copy an external person Manager should be able to…</p>
            </div>
            <div className="body-message">
                <h4>You</h4>
                <p>Manager should be able to copy an external person Manager should be able to…</p>
            </div>
        </article>
      </section>
    </main>
  );
};

export default Messages;
