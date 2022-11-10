import React from 'react';
import { Images } from '../Icons&Images';

const OltUiUx = () => {
    return (
        <div className='container '>
            <div className="row gx-1 bg-white pt-4 p-b-71 olt-container">
                <div className="col-lg-3 col-sm-12">
                    <img src={Images.ui} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-9 col-sm-12 text-cyan olt-comp">
                    <div className="p-t-10 ">
                        <h4 className='f-w-600 f-s-22'>User Interface and User Experience Design</h4>
                        <p className='f-s-14 p-t-10 olt-p'>
                            You’ll participate in a wide-range of design projects where you’ll gain hands-on experience with <br />
                            the fundamentals of design methodology. You’ll identify the problems, develop solutions, and <br />
                            create prototypes and wireframes using standard design tools including Figma and Balsamiq.
                        </p>
                        <div className="row m-t-30 olt-comp-3">
                            <div className="col-md-2">
                                <img src={Images.cal} alt="" width={21} className="img-fluid m-b-5" /> <span className='f-s-14 '>10 Weeks</span>
                            </div>
                            <div className="col-md-4">
                                <img src={Images.IconClock} alt="" width={21} className="img-fluid m-b-5" /> <span className='f-s-14'>Starting August 2021</span>
                            </div>
                        </div>
                        <div className="row m-t-40 olt-comp-4">
                            <div className="col-md-6 text-md-start"><h4 className='f-w-700 f-s-20'>&#8358;150,000.00</h4></div>
                            <div className="col-md-6 text-md-end olt-comp-4-b"><button type="button" class="btn btn-another-blue text-white btn-enroll f-s-16">Enroll</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OltUiUx;
