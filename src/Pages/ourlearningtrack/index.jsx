
import React from 'react';
import { Link } from 'react-router-dom';
import OltFrontend from '../../components/OltFrontend';
import OltGraphics from '../../components/OltGraphics';
import OltUiUx from '../../components/OltUiUx';
const Olt = () => {
    return (
        <div className='m-t-150 m-b-165' >
                <div class="container m-b-37">
                    <h2 className='text-blue f-s-32 f-w-800'>Our Learning Tracks</h2>

                    <p className='f-s-14'>Select any of our courses to get started on your tech journey</p>
                    <br />
                    {/* <!-- Nav pills --> */}
                    <ul className="nav nav-pills m-t-56" role="tablist">
                        <li className="nav-item">
                            <Link className="nav-link active" data-bs-toggle="pill" to="#home">UI/UX Design</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-blue " data-bs-toggle="pill" to="#menu1">Graphics Design</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" data-bs-toggle="pill" to="#menu2">Android Development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-bs-toggle="pill" to="#menu3"> Front End Development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" data-bs-toggle="pill" to="#menu4">Back End Development</Link>
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