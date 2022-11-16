import React from 'react';
import { Images } from '../Icons&Images';

const OltGraphics = () => {
    return (
        <div className='container'>
            <div className="row pt-7 bg-white pb-20 olt-container">
                <div className="col-lg-3 col-sm-12 olt-img">
                    <img src={Images.ui} alt="" className='olt-img-ui' />
                </div>
                <div className="col-lg-9 col-sm-12 text-cyan olt-comp ps-10">
                    <h4 className='f-w-600 f-s-22 olt-h4'>Graphics Design</h4>
                    <p className='f-s-14 p-t-10 olt-p olt-p mt-3 text-cyan'>
                        You’ll participate in a wide-range of design projects where you’ll gain hands-on experience with
                        the fundamentals of design methodology. You will gain industry knowledge on how to create
                        illustrations, edit images using tools like Adobe illustrator, photoshop and Corel Draw
                    </p>
                    <div className="row mt-6 olt-comp-3">
                        <div className="col-xl-2 col-md-6 text-md-start">
                            <img src={Images.cal} alt="" width={21} className="img-fluid mb-2" /> <span >10 Weeks</span>
                        </div>
                        <div className="col-xl-4 col-md-6 ">
                            <img src={Images.IconClock} alt="" width={21} className="img-fluid mb-1" /> <span >Starting August 2021</span>
                        </div>
                    </div>
                    <div className="row m-t-40 olt-comp-4">
                        <div className="col-md-6 text-md-start"><h4 className='fw-bold fs-20 mt-4'>&#8358;150,000.00</h4></div>
                        <div className="col-md-6 text-md-end olt-comp-4-b "><button type="button" class="btn btn-another-blue text-white btn-enroll">Enroll</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OltGraphics;
