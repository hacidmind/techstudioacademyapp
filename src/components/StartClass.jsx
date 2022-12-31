import React from "react";
import { Icons, Images } from "../Icons&Images";

import '../scss/startclass.scss';

const StartClass = () => {
    const Participants = [Images.participant1, Images.tutor, Images.classStudent];
  return (
    <article className="start-class">
      <section className="class-tutor app__flex">
        <div className="app__flex">
          <div className="img-size">
            <img src={Images.classStudent} alt="tutor" />
          </div>
          <div>
            <p>Becoming a UX Designer from Scratch: Things to look out for</p>
            <span>Emma Gannon, Author, Broadcaster</span>
          </div>
        </div>
      </section>
      <section className="class-participants app__flex-3">
        <p>Participants:</p>
        <div className="app__flex">
          <div className="app__flex">
            {Participants.map((item, index) => (
              <div
                key={index}
                className={`img-size participants participant-${index}`}
              >
                <img src={item} alt="participant" />
              </div>
            ))}
          </div>
          <p>+30 joined the class</p>
        </div>
      </section>
      <section className="class-schedule">
        <div className="app__flex-3">
          <div className="img-size icon">
            <img src={Icons.clock} alt="" />
          </div>
          <div className="column-flex">
            <p>55 mins</p>
            <span>Time</span>
          </div>
        </div>
        <div className="app__flex-3">
          <div className="img-size icon">
            <img src={Icons.calendar} alt="" />
          </div>
          <div className="column-flex">
            <p>17 Jan, 2021</p>
            <span>Duration</span>
          </div>
        </div>
        <div className="app__flex-3">
          <div className="img-size icon">
            <img src={Icons.share} alt="" />
          </div>
          <div className="column-flex">
            <p>Live Class</p>
            <span>Class Type</span>
          </div>
        </div>
      </section>
      <section className="startClass-btn app__flex-3">
        <button>Start Class</button>
      </section>
    </article>
  );
};

export default StartClass;
