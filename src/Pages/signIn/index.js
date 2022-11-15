import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../../Icons&Images';
import "../../scss/signup.scss"

const SignIn = () => {
    return (
            <div className="container-fluid">
                <div className="row signin">
                    <div className="col-lg-6">
                        <img src={Images.signinImage} alt="sign up" className=' signup-image' />
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <form class="row g-5 m-5 p-5 shadow-lg p-3 mb-5 bg-body rounded lh-lg mt-10 pb-10" method="">
                                <h1 className='fs-24 text-blue fw-bold mt-10'>Welcome Back</h1>
                                <p className='mb-12 text-blackish'>Let’s continue from where we stopped</p>
                                
                                <div class="col-12">
                                    <label for="emailAddress" class="form-label text-grey">Email Address</label>
                                    <input type="email" class="form-control py-2" id="email" placeholder="Sherifolat@gmail.com" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label text-grey">Password</label>
                                    <input type="password" class="form-control py-2" id="password" placeholder="Password" />
                                </div>
                                <div class="col-12">
                                    <Link to='/'>Forgot Password?</Link>
                                </div>


                                <div class="d-grid gap-2 col-6 mx-auto mt-20 mb-10">
                                    <button class="btn btn-primary" type="button">Login</button>
                                </div>

                                <div class="text-center mt-12 mb-28">
                                    <p><span className='text-blackish'> Do you have an account already?</span> <Link to="/signup">Sign up here</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SignIn;
