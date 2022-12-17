import React from 'react';

import '../../scss/sidebar.scss';
import { Images } from '../../Icons&Images';

const Sidebar = () => {
  return (
    <nav className='side-nav column-flex'>
        <section className='app__flex'>
            <img src={Images.logo} alt="logo" />
        </section>
    </nav>
  )
}

export default Sidebar;