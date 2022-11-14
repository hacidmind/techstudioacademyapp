
import React from 'react';
import { Link } from 'react-router-dom';
import OltFrontend from '../../components/OltFrontend';
import OltGraphics from '../../components/OltGraphics';
import OltUiUx from '../../components/OltUiUx';
const Olt = () => {
    return (
        <div className='m-t-150 m-b-165' >
            <div class="container m-b-37 olt-comp-1">
                <h2 className='text-blue f-s-32 f-w-800 m-b-19'>Our Learning Tracks</h2>
                <p className='f-s-14'>Select any of our courses to get started on your tech journey</p>
                {/* <!-- Nav pills --> */}
                <ul className="nav nav-pills m-t-56 olt-ul" role="tablist">
                    <li className="nav-item">
                        <Link className="nav-link olt-link active m-3 py-3" data-bs-toggle="pill" to="#home">UI/UX Design</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link random olt-link m-3 py-3" data-bs-toggle="pill" to="#menu1">Graphics Design</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled olt-link m-3 py-3" data-bs-toggle="pill" to="#menu2">Android Development</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link olt-link m-3 d-block-md py-3" data-bs-toggle="pill" to="#menu3"> Front End Development</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled olt-link m-3 py-3" data-bs-toggle="pill" to="#menu4">Back End Development</Link>
                    </li>
                </ul>
            </div>

            {/* <!-- Tab panes --> */}
            <div className="tab-content olt-bg-blue">
                <div id='home' className="container tab-pane active">
                    <OltUiUx />
                </div>
                <div id="menu1" className="container tab-pane fade"><br />
                    <OltGraphics />
                </div>
                <div id="menu2" className="container tab-pane fade"><br />
                    {/* Android Development */}
                </div>
                <div id="menu3" className="container tab-pane fade"><br />
                    <OltFrontend />
                </div>
            </div>
        </div>

    )
}

export default Olt;