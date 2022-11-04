import React from "react";

import { Images } from "../Icons&Images";
import Courses from "../components/Courses";

const Fullstack = () => {
  const courseIcons = [
    Images.aws,
    Images.React,
    Images.node,
    Images.mongo,
    Images.Javascript,
    Images.heroku,
  ];

  const courseDescription = (
    <p>
      Let’s help you become a professional frontend web developer. You’ll learn
      all you need to know to become a Frontend Developer and build interesting
      portfolios while learning the fundmentals of HTML, CSS, JavaScript and
      React.
    </p>
  );

  const courseCurriculum = [
    {
      title: "Fundamentals",
      desc: "The first phase of this bootcamp is to help you appreciate the fundamentals of software development, understanding programming fundamentals to launching full-stack web apps.",
    },
    {
      title: "JavaScript",
      desc: "You’ll be taught to build smart, data-driven web applications using JavaScript and it’s backend counterpart - PHP",
    },
    {
      title: "MySQL",
      desc: "Work with the famous web-based SQL database MySQL to integrate data into your project; connect with other third-party applications using API calls.",
    },
    {
      title: "Work with a team",
      desc: "And finally, you’ll learn the fundamentals of working as a team; collaborate with other group members of the class to build, change, maintain, and secure an application. Track your team development process using Version Control Systems.",
    },
  ];

  return (
    <main>
      <Courses
        courseTitle="Fullstack Web Development"
        courseDescription={courseDescription}
        courseIcons={courseIcons}
        courseCurriculum={courseCurriculum}
        courseThread={Images.thread2}
      />
    </main>
  );
};

export default Fullstack;
