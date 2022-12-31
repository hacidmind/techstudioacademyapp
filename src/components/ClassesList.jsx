import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icons, Images } from "../Icons&Images";

import "../scss/classeslist.scss";

const ClassesList = () => {
  const [showLive, setShowLive] = useState(true);
  const [showRecorded, setShowRecorded] = useState(false);
  const navigate = useNavigate();

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
  return (
    <section className="classesList">
      <article className="classesList-article1 app__flex-3">
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
      <article className="classesList-article2 column-flex">
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
                <button
                  onClick={() => navigate("/student/classes/slugs/videocall")}
                >
                  Start Class
                </button>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default ClassesList;
