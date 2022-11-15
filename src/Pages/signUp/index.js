import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../../Icons&Images';
import "../../scss/signup.scss"

const SignUp = () => {
    return (
            <div className="container-fluid">
                <div className="row signup">
                    <div className="col-lg-6">
                        <img src={Images.signinImage} alt="sign up" className='img-flui signup-image' />
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <form class="row g-5 m-5 p-5 shadow-lg p-3 mb-5 bg-body rounded lh-lg mt-10 pb-10" method="">
                                <h1 className='fs-24 text-blue fw-bold mt-10'>One last step, let’s get to know you</h1>
                                <p className='mb-12'>Create an account with Us</p>
                                <div class="col-md-6">
                                    <label for="firstName" class="form-label text-grey">First Name</label>
                                    <input type="text" class="form-control py-2" id="firstName" placeholder='First Name' />
                                </div>
                                <div class="col-md-6">
                                    <label for="lastName" class="form-label text-grey">Last Name</label>
                                    <input type="text" class="form-control py-2" id="lastName" placeholder='Last Name' />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label text-grey">Your Phone Number</label>
                                    <input type="tel" class="form-control py-2" id="phone" placeholder='User Type' />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label text-grey">Time Schedule</label>
                                    <select class="form-select py-2 text-cyan" aria-label="Default select example">
                                        <option selected>Weekday Classes</option>
                                        <option value="1">Weekend Classes</option>
                                        <option value="2">Online</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="emailAddress" class="form-label text-grey">Email Address</label>
                                    <input type="email" class="form-control py-2" id="email" placeholder="Sherifolat@gmail.com" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label text-grey">Password</label>
                                    <input type="password" class="form-control py-2" id="password" placeholder="Password" />
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                        <label class="form-check-label" for="gridCheck">
                                            Send me alerts and Weekly Newsletters
                                        </label>
                                    </div>
                                </div>


                                <div class="d-grid gap-2 col-6 mx-auto mt-20">
                                    <button class="btn btn-primary" type="button">Get Started</button>
                                </div>

                                <div class="text-center mt-12">
                                    <p>Do you have an account already? <Link to="/signin">Sign in here</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SignUp;
