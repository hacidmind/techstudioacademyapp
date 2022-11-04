import React from "react";

import { Images } from "../Icons&Images";
import Courses from "../components/Courses";

const Frontend = () => {
  const courseIcons = [
    Images.HTML,
    Images.CSS,
    Images.Javascript,
    Images.VUE,
    Images.Angular,
    Images.React,
  ];

  const courseDescription = (
    <p>
      {" "}
      Let’s help you become a professional frontend web developer. You’ll
      <br />
      learn all you need to know to become a Frontend Developer and build
      <br />
      interesting portfolios while learning the fundmentals of HTML, CSS,
      <br />
      JavaScript and React.
    </p>
  );

  const courseCurriculum = [
    {
      title: "Fundamentals",
      desc: "The first phase of this bootcamp is to help you appreciate the fundamentals of web development, understanding structure, design and getting comfortable coding in HTML, CSS and Sass.",
    },
    {
      title: "Using Boostrap",
      desc: "You’ll learn speedup your development and layout mobile-ready webpages using the most popular CSS Framework - Boostrap 4. You’ll understand how to automatically create responsive websites that render perfectly on all display platforms.",
    },
    {
      title: "JavaScript Basics",
      desc: "After mastering the fundamentals, the focus shifts towards frontend programming where you learn the basics of JavaScript. In this section, you’ll be introduced to data structures, data types, control structures and conditionals.",
    },
    {
      title: "JavaScript and the DOM",
      desc: "After taking care of the fundamentals, you’ll learn to interact with the Document Object Model (DOM), listen to user interactions and add change the contents of a webpage.",
    },
    {
      title: "Object-Oriented JavaScript",
      desc: "You’ll learn to build real-life applications using object-oriented JavaScript techniques. You’ll also learn the major improvements of JavaScript in the form of ES6.",
    },
    {
      title: "React Library",
      desc: "You’ll be introduced to the most popular JavaScript library - the REACT library. You’ll learn to build a React application from scratch, utilizing the react components to manage the user interface.",
    },
    {
      title: "Developer Tools & Testing",
      desc: "You’ll be introduced to the Chrome Developers’ Tool and how to use it to debug and maintain your application. Learn to use testing to help build app features.",
    },
    {
      title: "Version Control",
      desc: "You’ll learn to use the Git version control system, collaborate with other team members and push your projects to GitHub using Git",
    },
  ];

  return (
    <main>
      <Courses
        courseTitle="Frontend Web Development"
        courseDescription={courseDescription}
        courseIcons={courseIcons}
        courseCurriculum={courseCurriculum}
      />
    </main>
  );
};

export default Frontend;
