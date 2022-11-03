import React from "react";

import { Images } from "../Icons&Images";
import Courses from "../components/Courses";

const DataScience = () => {
  const courseIcons = [
    Images.python,
    Images.sql,
    Images.rail,
    Images.datascience,
    Images.plus,
    Images.git,
  ];

  const courseDescription = (
    <p>
      Get your hands dirty working with complex data. Dive into the Python
      <br />
      programming language, understand data analysis and statistical
      <br />
      modeling using Python, after which you move into machine learning
      <br />
      and algorithms.
    </p>
  );

  const courseCurriculum = [
    {
      title: "Python Programming",
      desc: "You learn to write programs in one of the most popular programming language for data science and analysis - Python. You’ll be taught the fundamental components of programming - data structures, functions, conditionals and loops, error handling, Object-Oriented programming, and how to import and use different packages.",
    },
    {
      title: "Web Scraping",
      desc: "You’ll learn to scrap websites, using bots to mine data, in order to manipulate and analyze them. You’ll learn to use the browser automation tool - Selenium to craw into sites, pull data from web forums and social media for analysis.",
    },
    {
      title: "SQL With Python",
      desc: "You’ll learn the fundamentals of SQL - most programming popular language used to query relational databases. Understand SQL and its Syntax, learn to use SQL statements and perform the CRUD operations on Postgres database. You’ll connect the Postgres database to Python with performing the CRUD operation on it using Python.",
    },
    {
      title: "Data Analysis And Visualization",
      desc: "You make use of Python most popular data analysis library - Pandas to analyse, organise, clean, sort, filter, and aggregate data. You’ll learn to perform Exploratory Data Analysis(EDA) with Pandas. You’ll setup data visualization using Matplotlib.",
    },
    {
      title: "Introduction To Machine Learning",
      desc: "Understand the basics of Machine Learning and Machine Learning Algorithms, learn to create supervised and unsupervised models and how to Preprocess for accurate analysis.",
    },
    {
      title: "Final Project",
      desc: "In order to complete your Data Science Immersive with Python certification, you’ll create a real-world project that’ll give you hands-on experience, and more importantly start your career as a data scientist/analyst.",
    },
  ];

  return (
    <main>
      <Courses
        courseTitle="Data Science Immersive With Python"
        courseDescription={courseDescription}
        courseIcons={courseIcons}
        courseCurriculum={courseCurriculum}
      />
    </main>
  );
};

export default DataScience;
