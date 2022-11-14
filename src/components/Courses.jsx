import React from "react";

import { Images } from "../Icons&Images";
import GetStarted from "./GetStarted";

const Courses = ({
  courseIcons,
  courseTitle,
  courseDescription,
  courseCurriculum,
  courseThread,
}) => {
  return (
    <main className="container courses m-t-50">
      <section className="courses__section-1">
        <article>
          <h2>{courseTitle}</h2>
          {courseDescription}
        </article>

        <article>
          <div>
            {courseIcons.map((icon) => (
              <div className="course-icon" key={icon}>
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
          <img src={courseThread} alt="thread" />
        </article>
        <article>
          {courseCurriculum.map((item) => (
            <div className="article-content pb-2" key={item.title}>
              <p>{item.title}</p>
              <span>{item.desc}</span>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Courses;
