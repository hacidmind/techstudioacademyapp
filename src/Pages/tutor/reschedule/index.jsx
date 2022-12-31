import React from "react";
import Fileupload from "../../../atoms/fileupload/Fileupload";
import User from "../../../components/User";
import { Icons, Images } from "../../../Icons&Images";

import "../../../scss/reschedule.scss";

const Reschedule = () => {
  const Participants = [Images.participant1, Images.tutor, Images.classStudent];
  return (
    <main className="reschedule">
      <section className="reschedule__headers app__flex-2">
        <article>
          <h1>Schedule a lesson</h1>
          <p>Set new time and date for the scheduled class.</p>
        </article>
        <User />
      </section>
      <section className="reschedule__body app__flex-2">
        <article className="reschedule__body-form">
          <form>
            <div className="app__flex-2 form-body">
              <label>Topic</label>
              <div>
                <input type="text" placeholder="Placeholder Text" />
              </div>
            </div>
            <div className="app__flex-2 form-body">
              <label>Date</label>
              <div>
                <input type="date" name="" id="" />
              </div>
            </div>
            <div className="app__flex-2 form-body">
              <label>Time</label>
              <div>
                <input type="time" name="" id="" />
              </div>
            </div>
            <div className="app__flex-2 form-body">
              <label>Resources</label>
              <div>
                <Fileupload />
              </div>
            </div>
            <article className="btns app__flex-5">
              <button className="save">Save Changes</button>
              <button className="cancel">Cancel</button>
            </article>
          </form>
        </article>
        <article className="reschedule__body-class">
          <section className="class-tutor app__flex">
            <div className="app__flex">
              <div className="img-size">
                <img src={Images.classStudent} alt="tutor" />
              </div>
              <div>
                <p>
                  Becoming a UX Designer from Scratch: Things to look out for
                </p>
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
        <section className="reschedule__body-btn app__flex-3">
          <button>Start Class</button>
        </section>
        </article>
      </section>
    </main>
  );
};

export default Reschedule;
