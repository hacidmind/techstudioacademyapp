import React from "react";

import { Images } from "../Icons&Images";
import Courses from "../components/Courses";

const MobileDev = () => {
  const courseIcons = [
    Images.java,
    Images.android01,
    Images.IJ,
    Images.android,
    Images.android2,
    Images.android3,
  ];

  const courseDescription = (
    <p>
      Whether you want to pursue a career as a Mobile App Developer, a
      <br />
      Freelancer, or an Entrepreneur, this program prepares you adequately
      <br />
      for that.
    </p>
  );

  const courseCurriculum = [
    {
      title: "Fundamentals",
      desc: "The first weeks of this bootcamp is to help you appreciate the fundamentals of mobile app development using Dart and Flutter. You’ll be comfortable writing pure Dart codes. You’ll also be introduced to Object Oriented Programming (OOP) in Dart to encapsulate both data and functionality. You’ll create, access, and modify objects to have a strong foundation for OOP.",
    },
    {
      title: "Version Control",
      desc: "You’ll learn to use the Git version control system, collaborate with other team members and push your projects to GitHub using Git",
    },
    {
      title: "Introduction to Flutter",
      desc: "After mastering the fundamentals of Dart, the focus shifts towards Flutter. You’ll learn about widgets and its importance to creating hybrid mobile applications. You’ll learn when different types of widgets and when to use them. You’ll be introduced to design concepts and common design patterns across different mobile devices.",
    },
    {
      title: "Routing and Navigation",
      desc: "You’ll learn what routing is and why it’s one of the core concepts of mobile application development. You’ll learn how to navigate from one page to the other, how to use named routes and using push and pop methods.",
    },
    {
      title: "FireBase Integration",
      desc: "Modern mobile applications need querying real-time data for interactivity. You’ll spend considerable time learning Flutter integration with FireBase. You’ll be exposed to querying the database to perform the CRUD functions - Create, Read, Update and Delete resources.",
    },
    {
      title: "Production Deployment",
      desc: "You’ll be taught how to deploy your production ready mobile app to the Android and iOS app stores to be accessed by everyone in the mobile community.",
    },
  ];

  return (
    <main>
      <Courses
        courseTitle="Mobile Development (IOS & Android)"
        courseDescription={courseDescription}
        courseIcons={courseIcons}
        courseCurriculum={courseCurriculum}
      />
    </main>
  );
};

export default MobileDev;
