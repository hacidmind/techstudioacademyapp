import React from 'react';
import { Images } from '../Icons&Images';

const OltFrontend = () => {
    return (
        <div>
        <div className='container '>
            <div className="row gx-1 bg-white p-t-36 olt-container">
                <div className="col-lg-3 col-sm-12">
                    <img src={Images.graphic} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-9 col-sm-12 text-cyan olt-comp">
                    <div className="p-t-10 ">
                        <h4 className='f-w-600 f-s-22'>Graphics Design</h4>
                        <p className='f-s-14 p-t-10 olt-p'>
                        You’ll participate in a wide-range of projects where you’ll gain hands-on experience with<br />
                         the fundamentals of development. This program is designed to equip professionals with the <br />
                          competencies required to enable you sail through the tech space and take you through a <br />
                           hands-on learning experience to build platforms.
                        </p>
                        <div className="row m-t-30 olt-comp-3">
                            <div className="col-md-2">
                                <img src={Images.cal} alt="" width={21} className="img-fluid m-b-5" /> <span className='f-s-14 '>10 Weeks</span>
                            </div>
                            <div className="col-md-4">
                                <img src={Images.IconClock} alt="" width={21} className="img-fluid m-b-5" /> <span className='f-s-14'>Starting August 2021</span>
                            </div>
                        </div>
                        <div className="row m-t-40 olt-comp-4 m-b-36">
                            <div className="col-md-6 text-md-start"><h4 className='f-w-700 f-s-20'>&#8358;400,000.00</h4></div>
                            <div className="col-md-6 text-md-end olt-comp-4-b"><button type="button" class="btn btn-another-blue text-white btn-enroll f-s-16">Enroll</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default OltFrontend;
