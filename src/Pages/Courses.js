import React from "react";

import { Images } from "../Icons&Images";
import "../css/Courses.css";
import GetStarted from "../components/GetStarted";

const Courses = () => {
  const courseIcons = [
    Images.HTML,
    Images.CSS,
    Images.Javascript,
    Images.VUE,
    Images.Angular,
    Images.React,
  ];
  return (
    <main className="container courses">
      <section className="courses__section-1">
        <article>
          <h2>
            Frontend Web
            <br />
            Development
          </h2>
          <p>
            Let’s help you become a professional frontend web developer. You’ll
            <br />
            learn all you need to know to become a Frontend Developer and build
            <br />
            interesting portfolios while learning the fundmentals of HTML, CSS,
            <br />
            JavaScript and React.
          </p>
        </article>
        <article>
          <div>
            {courseIcons.map((icon) => (
              <div className="course-icon">
                <img src={icon} alt="html" />
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="courses__section-2">
        <h2>Our Process</h2>
        <article>
          <div>
            <div className="icon-holder">
              <img src={Images.icon01} alt="alt" />
              <span>01</span>
            </div>
            <p>
              We teach the important skills required to jumpstart your career as
              a web developer. With 5 straight weeks of web training, you learn
              to think and build like frontend developers.
            </p>
          </div>
          <div>
            <div className="icon-holder">
              <img src={Images.icon02} alt="alt" />
              <span>02</span>
            </div>
            <p>
              You move from understanding web basics to launching Single Page
              Applications (SPAs). You’ll be taught to build smart SPAs using
              vanilla JavaScript that interacts with user inputs.
            </p>
          </div>
          <div>
            <div className="icon-holder">
              <img src={Images.icon03} alt="alt" />
              <span>03</span>
            </div>
            <p>
              And finally, you’ll learn the fundamentals of working as a team;
              collaborate with other group members of the class to build,
              change, maintain, and secure an application. Track your team
              development process using Version Control Systems.
            </p>
          </div>
        </article>
      </section>
      <section>
        <GetStarted />
      </section>
      <section className="courses__section-4">
        <article>
          <img src={Images.thread} alt="thread" />
        </article>
        <article>
          <div className="article-content pb-2">
            <p>Fundamentals</p>
            <span>
              The first phase of this bootcamp is to help you appreciate the
              fundamentals of web development,
              <br />
              understanding structure, design and getting comfortable coding in
              HTML, CSS and Sass.
            </span>
          </div>
          <div className="article-content pb-4">
            <p>Using Boostrap</p>
            <span>
              You’ll learn speedup your development and layout mobile-ready
              webpages using the most popular
              <br />
              CSS Framework - Boostrap 4. You’ll understand how to automatically
              create responsive websites that
              <br />
              render perfectly on all display platforms.
            </span>
          </div>
          <div className="article-content pt-1 pb-1">
            <p>JavaScript Basics</p>
            <span>
              After mastering the fundamentals, the focus shifts towards
              frontend programming where you learn
              <br />
              the basics of JavaScript. In this section, you’ll be introduced to
              data structures, data types, control
              <br />
              structures and conditionals.
            </span>
          </div>
          <div className="article-content pt-4 pb-5">
            <p>JavaScript and the DOM</p>
            <span>
              After taking care of the fundamentals, you’ll learn to interact
              with the Document Object Model (DOM),
              <br />
              listen to user interactions and add change the contents of a
              webpage.
            </span>
          </div>
          <div className="article-content pt-5">
            <p>Object-Oriented JavaScript</p>
            <span>
              You’ll learn to build real-life applications using object-oriented
              JavaScript techniques. You’ll also learn
              <br />
              the major improvements of JavaScript in the form of ES6.
            </span>
          </div>
          <div className="article-content pt-2">
            <p>React Library</p>
            <span>
              You’ll be introduced to the most popular JavaScript library - the
              REACT library. You’ll learn to build
              <br />a React application from scratch, utilizing the react
              components to manage the user interface.
            </span>
          </div>
          <div className="article-content">
            <p>Developer Tools & Testing</p>
            <span>
              You’ll be introduced to the Chrome Developers’ Tool and how to use
              it to debug and maintain your
              <br />
              application. Learn to use testing to help build app features.
            </span>
          </div>
          <div className="article-content pt-2">
            <p>Version Control</p>
            <span>
              You’ll learn to use the Git version control system, collaborate
              with other team members and push your
              <br />
              projects to GitHub using Git
            </span>
          </div>
          <div className="article-content">
            <p>Production Deployment</p>
            <span>
              You’ll be taught how to deploy your production ready project to a
              public web server to be accessed by
              <br />
              everyone in the online community.
            </span>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Courses;
