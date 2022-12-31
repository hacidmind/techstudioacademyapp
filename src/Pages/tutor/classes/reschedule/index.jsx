import React from "react";

import Fileupload from "../../../../atoms/fileupload/Fileupload";
import StartClass from "../../../../components/StartClass";
import User from "../../../../components/User";
import "../../../../scss/reschedule.scss";

const Reschedule = () => {
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
          <StartClass />
        </article>
      </section>
    </main>
  );
};

export default Reschedule;
