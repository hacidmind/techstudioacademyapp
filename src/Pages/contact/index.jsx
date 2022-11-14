import React from "react";
import { Images } from "../../Icons&Images";

const Contact = () => {
  return (
    <div>
      <div className="bg-contact text-white">
        <header className="d-flex justify-content-center py-md-5 text-center">
          <div className="row align-items-center">
            <h1 className="text-bold contact-h1"> We'd love to hear from you</h1>
            <p>
              Whether you have a question about our classes, pricing or anything
              else, our team is ready to answer all your
              <br /> questions
            </p>
          </div>
        </header>
      </div>

      {/* Second Component */}
      <div className="container m-b-20">
        <div className="row">
          <div className="col-md-5">
          <div className="container">
            <form className=" m-5 p-5 shadow-lg p-3 mb-5 bg-body rounded lh-lg" method="">
              <div class="m-5 pt-5">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Firstname Lastname"
                />
              </div>
              <div class="m-5">
                <label for="exampleFormControlInput1" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="email@email.com"
                />
              </div>
              <div className="m-5">
                <label for="exampleFormControlInput1" class="form-label">
                  Subject
                </label>
                <select className="form-select" aria-label="Default select ">
                  <option selected>Training Programs</option>
                  <option value="1">Web Dev</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="m-5">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message or Questions
                </label>
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Type your message questions or inquiries here"
                ></textarea>
              </div>
              <div className="text-center m-t-20 m-b-30">
                <button className="btn btn-primary sm">Send Message</button>
              </div>
            </form>
            </div>
          </div>

          <div className="col-md-6 contact-component-3 text-sm-center text-md-start">
            <div className="w-md-75 contact-container ">
              <h2 className="contact-h2 blue">Our Office Location</h2>
              <p>Where the magic happens</p>
              <div className="row">
                <div className="col-md-3 text-sm-center">
                  <img src={Images.nig} alt="" />
                </div>
                <div className="col-md-9  contact-component-3">
                  <p className="contact-p">Lagos, Nigeria</p>
                  <p>
                    3 Ogunlesi Street <br />
                    Onipanu, Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
