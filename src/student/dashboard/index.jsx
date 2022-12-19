import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdLaptopWindows } from 'react-icons/md';

import "../../scss/dashboard.scss";
import { Icons, Images } from "../../Icons&Images";
import User from "../../components/User";


const Dashboard = () => {
  const [showPdf, setShowPdf] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const handleShowPDF = () => {
    setShowPdf(true);
    setShowVideo(false);
  };

  const handleShowVideo = () => {
    setShowVideo(true);
    setShowPdf(false);
  };

  const taskInfo = [
    {
      icon: Icons.TotalTask,
      title: "Total Tasks",
      no: 24,
      bg: '#ECEAFE'
    },
    {
      icon: Icons.PendingTask,
      title: "Pending Tasks",
      no: 12,
      bg: '#D9EDFF'
    },
    {
      icon: Icons.submittedTask,
      title: "Tasks submitted",
      no: 12,
      bg: '#EBF0E6'
    },
    {
      icon: Icons.timeLapse,
      title: "Weeks Remaining",
      no: '07',
      bg: '#E000171A'
    },
  ];

  const books = [
    {
      icon: Icons.pdf,
      title: 'Design and Insights.pdf'
    },
    {
      icon: Icons.excel,
      title: 'Design Methodology.xslx'
    },
    {
      icon: Icons.powerPoint,
      title: 'Application for Leave.ppt'
    },
    {
      icon: Icons.docs,
      title: 'Working with colours.docx'
    },
    {
      icon: Icons.docs,
      title: 'Tools and tips.docx'
    },
    {
      icon: Icons.docs,
      title: 'Presenting your design.docx'
    },
    {
      icon: Icons.docs,
      title: 'Portfolio.docx'
    },
  ]

  return (
    <main className="studentDashboard app__flex-2">
      <section className="studentDashboard__section1">
        <article className="studentDashboard__section1-article1 app__flex-2">
          <h4>Dashboard</h4>
          <div>
            <input type="text" placeholder="Search for task and more" />
          </div>
        </article>
        <article className="studentDashboard__section1-article2">
          <h1>Hello Tomiwa!</h1>
          <p>
            Welcome to your techstudio dashboard. Learn anytime and boost your
            skills
          </p>
          <div>
            <img src={Images.intro} alt="dashoard" />
          </div>
        </article>
        <article className="studentDashboard__section1-article3 app__flex-2">
          {taskInfo.map((item) => (
            <div className="app__flex-3">
              <div className="app__flex" style={{backgroundColor: item.bg}}>
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
              <h5>Resources</h5>
              <div className="app__flex-3">
                <p onClick={handleShowPDF} className={showPdf && 'active'}>PDF</p>
                <p style={{borderLeft: "1px solid #FFFFFF"}}>VIDEO</p>
                <p style={{borderLeft: "1px solid #FFFFFF"}}>AUDIO</p>
              </div>
              {showPdf && (
              <article>
                {books.map((item) => (
                  <div>okay</div>
                ))}
              </article>
              )}
            </div>
            <div className="column-flex">
              <div>
                <h5>20 <span>Hours spent last week</span></h5>
              </div>
              <div>
                <div className="tutor-head app__flex-2">
                  <h6>Tutors Feedbacks</h6>
                  <Link style={{textDecoration: 'underline'}} to=''>View all</Link>
                </div>
                <div className="tutor-body app__flex-2">
                  <div className="app__flex">
                    <img src={Images.tutor} alt="tutor" />
                  </div>
                  <span>I am so glad to hear plenty of answers from you during class. Keep doing great!</span>
                </div>
                <div className="tutor-footer app__flex-3">
                  <span className="name">Sorunke Sherif</span>
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
        <article className="studentDashboard__section2-article2">

        </article>
        <article className="studentDashboard__section2-article3">
            <span>Today, 28th March, 2021</span>
            <h6>Design Process</h6>
            <p>The course is highly interactive with projects, Checklists & actionable lectures built into…</p>
            <div style={{marginBottom: '20px'}} className="app__flex-3">
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
        <article className="studentDashboard__section2-article4">
          <button>Get started</button>
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
