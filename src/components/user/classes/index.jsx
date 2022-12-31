import React from "react";

import "../../../scss/classes.scss";
import User from "../../../components/User";
import ClassesList from "../../ClassesList";
import Assignment from "../../Assignment";
import StartClass from "../../StartClass";

const Classes = ({ tutor }) => {
  return (
    <div className="classes">
      <section className="classes__section1 app__flex-2">
        <h1>Classes</h1>
        <User />
      </section>
      <section className="classes__section2 app__flex-2">
        <article className="classes__section2-article1">
          <ClassesList />
        </article>
        <article className="classes__section1-article2">
          {tutor ? <StartClass /> : <Assignment />}
        </article>
      </section>
    </div>
  );
};

export default Classes;
