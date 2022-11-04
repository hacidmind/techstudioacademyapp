import React from 'react';
import nig from "../Icons&Images/TechStudioImages/nigeria.png";
import "../css/Contact.css";

const Contact = () => {
    return (
        <div>

            <div className="bg-contact text-light pb-5">
                <header className="text-center container-lg  py-md-5">
                    <div className="">
                        <h1 className="font32px Bold"> We'd love to hear from you</h1>

                        <p>
                            Whether you have a question about our classes, pricing or anything
                            else, our team is ready to answer all your
                            <br /> questions
                        </p>
                    </div>
                </header>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form className=" border p-md-4 m-3 shadow-lg p-3 mb-5 bg-body rounded">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Firstname Lastname" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@email.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Subject</label>
                                <select className="form-select" aria-label="Default select ">
                                    <option selected>Training Programs</option>
                                    <option value="1">Web Dev</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message or Questions</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Type your message questions or inquiries here"></textarea>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary sm">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="w-md-75 contact-container ">
                            <h1 className="contact-h1 ">Our Office Location</h1>
                            <p>Where the magic happens</p>
                            <div className="row">
                                <div className="col-md-3"><img src={nig} alt="" /></div>
                                <div className="col-md-9 text-start">
                                    <p className="contact-p">Lagos, Nigeria</p>
                                    <p>3 Ogunlesi Street <br />
                                        Onipanu, Lagos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Contact;
