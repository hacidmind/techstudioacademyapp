import React from "react";

import "../css/about.css";
import { Images } from "../Icons&Images";

const About = () => {
  const values = [
    {
      icon: Images.IconClock,
      head: "Flexibility",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      icon: Images.IconWorkSpace,
      head: "Condusive Environment",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      icon: Images.IconTuition,
      head: "Affordable tuition fees",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      icon: Images.IconLearning,
      head: "Learning & Development",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      icon: Images.IconColleague,
      head: "Great Colleaggues",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      icon: Images.IconInsurance,
      head: "Certificates",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
  ];
  return (
    <main class="container text-center mt-5 about">
      <section className="row about__section-1">
        <article className="col section1-article1">
          <h6>KNOW US MORE</h6>
          <h3>About Techstudio</h3>
          <p>
            Techstudio is an academy focused putting youth and adult on track in
            the tech world. Our systems designed to inspire focused learning,
            creativity and collaboration. Our space is equipped with
            state-of-the-art learning equipments with no more than 10 students
            per class.
            <br />
            <br />
            Learn in an environment that puts you in direct contact with
            professional web developers and software engineer.
            <br />
            <br />
            You’ll be provided with constant power and internet supply to make
            you focus on the job at hand
          </p>
        </article>
        <article className="col section1-article2">
          <div className="image-eclipse">
            <img src={Images.ellipse} alt="alt" />
          </div>
          <div className="image-desc">
            <img src={Images.mask} alt="mask" />
          </div>
        </article>
      </section>
      <section className="about__section-2">
        <div>
          <img src={Images.repeatGrid} alt="repeatgrid" />
        </div>
        <div>
          <img src={Images.aboutShowCase1} alt="about1" />
        </div>
        <div>
          <img src={Images.aboutShowCase2} alt="about2" />
        </div>
        <div>
          <img src={Images.aboutShowCase3} alt="about3" />
        </div>
        <div>
          <img src={Images.aboutShowCase4} alt="about4" />
        </div>
      </section>
      <section className="about__section-3">
        <h3>Driven by our core values</h3>
        <p>
          We do the things we do out of love for growth, progress and <br />{" "}
          change oil the tech space
        </p>
        <article>
          {values.map((value) => (
            <div key={value.head}>
              <div>
                <img src={value.icon} alt="icon" />
              </div>
              <p>{value.head}</p>
              <span>{value.text}</span>
            </div>
          ))}
        </article>
      </section>
      <section className="about__section-4">
        <div>
            <img src={Images.team} alt="team" />
        </div>
      </section>
      <section className="about__section-5">
        <article>
            <p>Try TechStudio</p>
            <h5>Get started with Techstudio</h5>
            <button>Get Started</button>
        </article>
        <article>
            <div>
                <img src={Images.aboutSmile} alt="about smile" />
            </div>
        </article>
      </section>
    </main>
  );
};

export default About;
