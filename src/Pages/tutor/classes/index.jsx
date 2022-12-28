import React from "react";
import { IoClose } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";

import "../../../scss/createclass.scss";
import User from "../../../components/User";

const CreateClass = () => {
  return (
    <main className="createClass">
      <section className="app__flex-2 createClass__header">
        <h1>Create Class</h1>
        <div>
          <User />
        </div>
      </section>
      <section className="createClass__subtext">
        <p>Set new time and date for the scheduled class.</p>
      </section>
      <form className="createClass__form">
        <div className="app__flex-2 form-container">
          <label>Topic</label>
          <div className="form-input">
            <input type="text" />
          </div>
        </div>
        <div className="app__flex-2 form-container">
          <label>Date</label>
          <div className="form-input">
            <input type="date" name="" id="" />
          </div>
        </div>
        <div className="app__flex-2 form-container">
          <label>Time</label>
          <div className="form-input">
            <input type="datetime" name="" id="" />
          </div>
        </div>
        <div className="app__flex-2 form-container-2">
          <label>Prefence</label>
          <div className="form-input-2 app__flex-3 checkbox">
            <div className="app__flex-2">
              <input type="checkbox" name="" id="" />
              <label>Online</label>
            </div>
            <div className="app__flex-2">
              <input type="checkbox" name="" id="" />
              <label>Offline</label>
            </div>
            <div className="app__flex-2">
              <input type="checkbox" name="" id="" />
              <label>Both</label>
            </div>
          </div>
        </div>
        <div className="app__flex-2 form-container-2">
          <label>Resources</label>
          <div className="form-input-2 upload">
            <article className="app__flex-3">
              <div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="file-upload"
                  onChange=""
                />
                <label className="app__flex" htmlFor="file">
                  <ImAttachment />
                  Browse files or drag and drop here
                </label>
              </div>
              <button>Add</button>
            </article>
            <div>
              <p className="app__flex-3">
                Files Added <span className="app__flex">3</span>
              </p>
              <div className="app__flex-2">
                <div className="app__flex-2">
                  <span>Design Fundamentals…</span>
                  <span>
                    <IoClose />
                  </span>
                </div>
                <div className="app__flex-2">
                  <span>Design Fundamentals…</span>
                  <span>
                    <IoClose />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app__flex-2 form-container-2">
          <label>About Course</label>
          <div className="form-input-2">
            <textarea cols="30" rows="10" placeholder="Placeholder Text" />
          </div>
        </div>
      </form>
    </main>
  );
};

export default CreateClass;
