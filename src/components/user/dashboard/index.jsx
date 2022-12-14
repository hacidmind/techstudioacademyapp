import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLaptopWindows } from "react-icons/md";

import "../../../scss/dashboard.scss";
import { Icons, Images } from "../../../Icons&Images";
import User from "../../User";
import UploadModal from "../../UploadModal";

const Dashboard = ({
  userName,
  userIntroduction,
  taskInfo,
  userOption,
  tutor,
  setshowFileUploadModal,
  showFileUploadModal,
}) => {
  const [showPdf, setShowPdf] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const handleShowPDF = () => {
    setShowPdf(true);
    setShowVideo(false);
  };

  const handleShowVideo = () => {
    setShowVideo(true);
    setShowPdf(false);
  };

  const books = [
    {
      icon: Icons.pdf,
      title: "Design and Insights.pdf",
    },
    {
      icon: Icons.excel,
      title: "Design Methodology.xslx",
    },
    {
      icon: Icons.powerPoint,
      title: "Application for Leave.ppt",
    },
    {
      icon: Icons.docs,
      title: "Working with colours.docx",
    },
    {
      icon: Icons.docs,
      title: "Tools and tips.docx",
    },
    {
      icon: Icons.docs,
      title: "Presenting your design.docx",
    },
    {
      icon: Icons.docs,
      title: "Portfolio.docx",
    },
    {
      icon: Icons.docs,
      title: "Portfolio.docx",
    },
    {
      icon: Icons.docs,
      title: "Portfolio.docx",
    },
  ];

  const videos = [
    {
      icon: Icons.video,
      title: "Design and Insights.mp4",
    },
    {
      icon: Icons.video,
      title: "Design Methodology.mp4",
    },
    {
      icon: Icons.video,
      title: "Application for Leave.mp4",
    },
    {
      icon: Icons.video,
      title: "Working with colours.mp4",
    },
    {
      icon: Icons.video,
      title: "Tools and tips.mp4",
    },
    {
      icon: Icons.video,
      title: "Presenting your design.mp4",
    },
    {
      icon: Icons.video,
      title: "Portfolio.mp4",
    },
  ];

  return (
    <main className="studentDashboard app__flex-2">
      <section className="studentDashboard__section1">
        <article className="studentDashboard__section1-article1 app__flex-2">
          <h4>Dashboard</h4>
          <div>
            <input type="text" placeholder="Search for task and more" />
          </div>
          <article className="mobile app__flex">
            <User />
          </article>
          {tutor && (<article className="article1-button">
            <button onClick={() => navigate('/tutor/classes/create-class')}>Create class</button>
          </article>)}
        </article>
        <article className="studentDashboard__section1-article2">
          <h1>Hello {userName}!</h1>
          <p>{userIntroduction}</p>
          <div>
            <img src={Images.intro} alt="dashoard" />
          </div>
        </article>
        <article className="studentDashboard__section1-article3 app__flex-2">
          {taskInfo.map((item, index) => (
            <div key={index} className="app__flex-3">
              <div className="app__flex" style={{ backgroundColor: item.bg }}>
                <img src={item.icon} alt="icon" />
              </div>
              <div>
                <h6>{item.title}</h6>
                <p>{item.no}</p>
              </div>
            </div>
          ))}
        </article>
        <article className="studentDashboard__section1-article4 app__flex-2">
          <div>
            <h5 className="app__flex-2">
              Resources{" "}
              {tutor && (
                <span onClick={() => setshowFileUploadModal(true)}>
                  Upload New file
                </span>
              )}
            </h5>
            <div className="app__flex-3">
              <p
                onClick={handleShowPDF}
                className={showPdf ? "active app__flex" : "app__flex"}
              >
                PDF
              </p>
              <p
                style={{ borderLeft: "1px solid #0000001F" }}
                onClick={handleShowVideo}
                className={showVideo ? "active app__flex" : "app__flex"}
              >
                VIDEO
              </p>
              <p
                className="app__flex"
                style={{ borderLeft: "1px solid #0000001F" }}
              >
                AUDIO
              </p>
            </div>
            {showPdf && (
              <article className="column-flex">
                {books.map((item, index) => (
                  <div key={index} className="app__flex-2">
                    <div className="app__flex-2">
                      <div className="app__flex">
                        <img src={item.icon} alt="logo" />
                      </div>
                      <p>{item.title}</p>
                    </div>
                    <div className="app__flex-2">{userOption}</div>
                  </div>
                ))}
              </article>
            )}
            {showVideo && (
              <article className="column-flex">
                {videos.map((item, index) => (
                  <div key={index} className="app__flex-2">
                    <div className="app__flex-2">
                      <div className="app__flex">
                        <img src={item.icon} alt="logo" />
                      </div>
                      <p>{item.title}</p>
                    </div>
                    <div className="app__flex-2">
                      <div className="app__flex">
                        <img src={Icons.download} alt="download icon" />
                      </div>
                      <div className="app__flex">
                        <img src={Icons.play} alt="play" />
                      </div>
                    </div>
                  </div>
                ))}
              </article>
            )}
          </div>
          <div className="column-flex">
            <div>
              <h5>
                20 <span>Hours spent last week</span>
              </h5>
            </div>
            <div>
              <div className="tutor-head app__flex-2">
                <h6>{tutor ? "Your inbox" : "Tutor's Feedbacks"}</h6>
                <Link style={{ textDecoration: "underline" }} to="">
                  View all
                </Link>
              </div>
              <div className="tutor-body app__flex-2">
                <div className="app__flex">
                  <img src={Images.tutor} alt="tutor" />
                </div>
                <span>
                  I am so glad to hear plenty of answers from you during class.
                  Keep doing great!
                </span>
              </div>
              <div className="tutor-footer app__flex-3">
                <span className={tutor ? "tutor-name" : "name"}>
                  Sorunke Sherif
                </span>
                <span className="date">May 3, 2021</span>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="studentDashboard__section2">
        <article className="studentDashboard__section2-article1 app__flex">
          <User />
        </article>
        <article className="studentDashboard__section2-article2"></article>
        <article className="studentDashboard__section2-article3">
          <span>Today, 28th March, 2021</span>
          <h6>Design Process</h6>
          <p>
            The course is highly interactive with projects, Checklists &
            actionable lectures built into???
          </p>
          <div style={{ marginBottom: "20px" }} className="app__flex-3">
            <div>
              <AiOutlineClockCircle />
            </div>
            <div>
              <p>55 mins</p>
              <span>Duration</span>
            </div>
          </div>
          <div className="app__flex-3">
            <div>
              <MdLaptopWindows />
            </div>
            <div className="column-flex">
              <p>Live Class</p>
              <span>Lecture Type</span>
            </div>
          </div>
        </article>
        <article className="studentDashboard__section2-article4 app__flex-2">
          <button>Start class</button>
          {tutor && <button onClick={() => navigate('/tutor/classes/reschedule')} className="reschedule-btn">Reschedule</button>}
        </article>
      </section>
      {showFileUploadModal && (
        <section className="tutor-upload-modal">
          <UploadModal setshowFileUploadModal={setshowFileUploadModal} />
        </section>
      )}
    </main>
  );
};

export default Dashboard;
