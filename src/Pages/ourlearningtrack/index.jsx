
// import React from 'react';
// import { Images } from "../../Icons&Images";
// import '../../scss/olt.scss';
// import '../../scss/helper.scss';
// const Olt = () => {
//     return (
//         <div>
//         <div className='p-l-150 small p-t-26'>
//             <img src={Images.logo} alt="" width={40} />
//             <h4 className='mycolor f-w-800 f-s-32 p-t-63'>Our Learning Tracks</h4>
//             <p className='text-grey f-s-14 p-t-20 f-w-500'>Select any of our courses to get started on your tech journey</p>
//         </div>
//         {/* <ul class="dropdown-menu d-lg-none">
//                 <li><a class="dropdown-item" href="#">Regular link</a></li>
//                 <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
//                 <li><a class="dropdown-item" href="#">Another link</a></li>
//         </ul> */}
//         <div className='w-70 p-l-150 small m-t-67' >

//         <ul className="nav nav-pills mb-3 justify-content-lg-between " id="pills-tab" role="tablist">
//             <li className="nav-item" role="presentation">
//                 <button className="nav-link active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">UI/UX Design</button>
//             </li>
//             <li className="nav-item" role="presentation">
//                 <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Graphics Design</button>
//             </li>
//             <li className="nav-item" role="presentation">
//                 <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" disabled>Android Development</button>
//             </li>
//             <li className="nav-item" role="presentation">
//             <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Front End Development</button>
//             </li>
//             <li className="nav-item" role="presentation">
//             <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" disabled>Back End Development</button>
//             </li>
//         </ul>
//         </div>
//             <div className="container-fluid main-bg m-t-37 ">
//             <div className="tab-content p-t-65 p-b-165" id="pills-tabContent">
//             <div className="tab-pane fade show active w-70 m-l-150 small bg-white box-wrapper p-l-30 p-r-30 p-t-30 p-b-60 " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
//             <div class="container px-4 ">
//             <div class="row gx-1">
//                 <div class="col-lg-4 col-sm-12">
//                 <div class="p-3  "><img src={Images.ui} alt="" className='w-90' /></div>
//                 </div>
//                 <div class="col-lg-8 col-sm-12">
//                 <div class="p-3 small ">
//                 <h4 className='text-color f-w-700'>User Interface and User Experience Design</h4>
//                 <p className='f-s-12 text-grey p-t-10'>
//                 You’ll participate in a wide-range of design projects where you’ll gain hands-on experience with the fundamentals of design 
//                 methodology. You’ll identify the problems, develop solutions, and create prototypes and wireframes using 
//                 standard design tools including Figma and Balsamiq.
//                 </p>
//                 <div className='m-t-35 '>
//                     <span className=''>
//                     <img src={Images.cal} alt=""width={18} /><span className='p-l-10 f-s-14 f-w-600'>10 weeks</span>
//                     </span>
//                 <span className=''>
//                 <img src={Images.IconClock} alt="" width={18} className='m-l-30'/><span className='p-l-10 f-s-14 f-w-600'>Starting august 2021</span>
//                 </span>


//                 </div>
//                 <div className="row m-t-40">
//                     <div className="col"><h4 className='f-w-700 text-lg-start text-center'>&#8358;150,000.00</h4></div>
//                     <div className="col"><button type="button" class="btn btn-enroll text-white">Enroll</button></div>
//                 </div>


//                 </div>
//                 </div>
//             </div>
//             </div>

//             </div>
//             <div className="tab-pane fade  w-70 m-l-150 bg-white box-wrapper p-l-30 p-r-30 p-t-30 p-b-60" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
//             <div class="container px-4 ">
//             <div class="row gx-1">
//                 <div class="col-lg-4 col-sm-12">
//                 <div class="p-3  "><img src={Images.graphic} alt="" className='w-90' /></div>
//                 </div>
//                 <div class="col-lg-8 col-sm-12">
//                 <div class="p-3 ">
//                 <h4 className='text-color f-w-700'>Graphics Design</h4>
//                 <p className='f-s-12 text-grey p-t-10'>
//                 You’ll participate in a wide-range of design projects 
//                 where you’ll gain hands-on experience with the fundamentals
//                  of design methodology. You will gain industry knowledge on how to
//                   create illustrations, edit images using tools like Adobe illustrator,
//                    photoshop and Corel Draw
//                 </p>
//                 <div className='m-t-35'>
//                 <img src={Images.cal} alt=""width={18} /><span className='p-l-10 f-s-14 f-w-600'>10 weeks</span>
//                 <img src={Images.IconClock} alt="" width={18} className='m-l-30'/><span className='p-l-10 f-s-14 f-w-600'>Starting august 2021</span>

//                 </div>
//                 <div className="row m-t-40">
//                     <div className="col"><h4 className='f-w-700 '>&#8358;150,000.00</h4></div>
//                     <div className="col"><button type="button" class="btn btn-enroll text-white">Enroll</button></div>
//                 </div>


//                 </div>
//                 </div>
//             </div>
//             </div>
//              </div>
//             <div className="tab-pane fade  w-70 m-l-150 bg-white box-wrapper p-l-30 p-r-30 p-t-30 p-b-60" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
//             <div class="container px-4 ">
//             <div class="row gx-1">
//                 <div class="col-lg-4 col-sm-12">
//                 <div class="p-3  "><img src={Images.front} alt="" className='w-90' /></div>
//                 </div>
//                 <div class="col-lg-8 col-sm-12">
//                 <div class="p-3 ">
//                 <h4 className='text-color f-w-700'>Front End Development</h4>
//                 <p className='f-s-12 text-grey p-t-10'>
//                 You’ll participate in a wide-range of projects where you’ll 
//                 gain hands-on experience with the fundamentals of development.
//                  This program is designed to equip professionals with the competencies
//                   required to enable you sail through the tech space and take you 
//                   through a hands-on learning experience to build platforms.
//                 </p>
//                 <div className='m-t-35'>
//                 <img src={Images.cal} alt=""width={18} /><span className='p-l-10 f-s-14 f-w-600'>10 weeks</span>
//                 <img src={Images.IconClock} alt="" width={18} className='m-l-30'/><span className='p-l-10 f-s-14 f-w-600'>Starting august 2021</span>

//                 </div>
//                 <div className="row m-t-40">
//                     <div className="col"><h4 className='f-w-700 '>&#8358;150,000.00</h4></div>
//                     <div className="col"><button type="button" class="btn btn-enroll text-white">Enroll</button></div>
//                 </div>


//                 </div>
//                 </div>
//             </div>
//             </div>
//             </div>
//             <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
//             </div>
//             </div>

//     </div>
//     );
// }

// export default Olt;





import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from "../../Icons&Images";
// import '../../scss/olt.scss';
import '../../scss/helper.scss';
const Olt = () => {
    return (

        <div className='m-t-100 m-b-200' >

            <div class="mt-3">
                <div class="container">
                    <h2>Our Learning Tracks</h2>

                    <p>Select any of our courses to get started on your tech journey</p>
                    <br />
                    {/* <!-- Nav pills --> */}
                    <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item">
                            <Link className="nav-link active" data-bs-toggle="pill" to="#home">UI/UX Design</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-bs-toggle="pill" to="#menu1">Graphics Design</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-bs-toggle="pill" to="#menu2">Android Development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-bs-toggle="pill" to="#menu3"> Front End Development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-bs-toggle="pill" to="#menu4">Back End Development</Link>
                        </li>
                    </ul>
                </div>

                {/* <!-- Tab panes --> */}
                <div className="tab-content olt-bg-blue">
                    <div id="home" className="container tab-pane active"><br />
                        <div className="">
                            hello
                        </div>

                        <div class="row gx-1">
                            <div class="col-lg-4 col-sm-12">
                                <div class="p-3  "><img src={Images.front} alt="" className='w-90' /></div>
                            </div>
                            <div class="col-lg-8 col-sm-12">
                                <div class="p-3 ">
                                    <h4 className='text-color f-w-700'>Front End Development</h4>
                                    <p className='f-s-12 text-grey p-t-10'>
                                        You’ll participate in a wide-range of projects where you’ll
                                        gain hands-on experience with the fundamentals of development.
                                        This program is designed to equip professionals with the competencies
                                        required to enable you sail through the tech space and take you
                                        through a hands-on learning experience to build platforms.
                                    </p>
                                    <div className='m-t-35'>
                                        <img src={Images.cal} alt="" width={18} /><span className='p-l-10 f-s-14 f-w-600'>10 weeks</span>
                                        <img src={Images.IconClock} alt="" width={18} className='m-l-30' /><span className='p-l-10 f-s-14 f-w-600'>Starting august 2021</span>

                                    </div>
                                    <div className="row m-t-40">
                                        <div className="col"><h4 className='f-w-700 '>&#8358;150,000.00</h4></div>
                                        <div className="col"><button type="button" class="btn btn-enroll text-white">Enroll</button></div>
                                    </div>


                                </div>


                            </div>
                            <div id="menu1" className="container tab-pane fade"><br />
                                <h3>Menu 1</h3>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div id="menu2" className="container tab-pane fade"><br />
                                <h3>Menu 2</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                            <div id="menu3" className="container tab-pane fade"><br />
                                <h3>Menu 2</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Olt;