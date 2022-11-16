import React from 'react';
import { Images } from '../Icons&Images';

const OltFrontend = () => {
    return (
        <div className='container'>
            <div className="row pt-7 bg-white pb-20 olt-container">
                <div className="col-lg-3 col-sm-12 olt-img">
                    <img src={Images.front} alt="" className='olt-img-ui' />
                </div>
                <div className="col-lg-9 col-sm-12 text-cyan olt-comp ps-10">
                    <h4 className='f-w-600 fs-22 olt-h4'>User Interface and User Experience Design</h4>
                    <p className='f-s-14 p-t-10 olt-p olt-p mt-3 text-cyan'>
                        You’ll participate in a wide-range of projects where you’ll gain hands-on experience with the
                        fundamentals of development. This program is designed to equip professionals with the
                        competencies required to enable you sail through the tech space and take you through a
                        hands-on learning experience to build platforms.
                    </p>
                    <div className="row mt-6 olt-comp-3">
                        <div className="col-xl-2 col-md-6 text-md-start">
                            <img src={Images.cal} alt="" width={21} className="img-fluid mb-2" /> <span className=''>10 Weeks</span>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <img src={Images.IconClock} alt="" width={21} className="img-fluid mb-1" /> <span className=''>Starting August 2021</span>
                        </div>
                    </div>
                    <div className="row mt-10 olt-comp-4">
                        <div className="col-md-6 text-md-start"><h4 className='fs-20 fw-bold mt-4'>&#8358;150,000.00</h4></div>
                        <div className="col-md-6 text-md-end olt-comp-4-b"><button type="button" class="btn btn-another-blue text-white btn-enroll">Enroll</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OltFrontend;
