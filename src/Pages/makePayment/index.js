import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../../Icons&Images';
import "../../scss/signup.scss"

const MakePayment = () => {
    return (
        <div className="container-fluid text-cyan">
            <div className="row payment">
                <div className="col-lg-6">
                    <img src={Images.signinImage} alt="sign up" className='signup-image' />
                </div>
                <div className="col-lg-6">
                    <div>
                        <form class="row g-5 m-5 p-5 shadow-lg p-3 mb-5 bg-body rounded lh-lg mt-10 pb-10" method="">
                            <h1 className='fs-24 text-blue fw-bold mt-10'>Make Payment</h1>
                            <p className='mb-12'>It gets easy from here.</p>
                            <div className="text-center">

                                <img src={Images.smileyFacePayment} alt="paymentImage" className=' payment-img' />
                            </div>

                            <p>Make a transfer to any of these accounts, payment will be confirmed Within 12 hours or visit our office @ 3, Ogunlesi street, Onipanu, Lagos.</p>


                            <div class="col-12">
                               <p><span className='fw-bold'>GTBANK:</span> 0144093702</p>
                               <p><span className='fw-bold'>ACCESS:</span> 7654567876</p>
                               <p><span className='fw-bold'>FIDELITY:</span> 3476545677</p>
                            </div>


                            <div class="d-grid gap-2 col-6 mx-auto mt-20">
                                <button class="btn btn-primary" type="button">Payment made</button>
                            </div>

                            <div class="text-center mt-12">
                                <p>Do you have an account with us already? <Link to="/signin">Sign in here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MakePayment;
