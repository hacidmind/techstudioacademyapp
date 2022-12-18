import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../scss/sidebar.scss';
import { Icons, Images } from '../../Icons&Images';

const Sidebar = () => {
  const sideBarItems = [
    {
      name: 'Dashboard',
      icon: Icons.dashboard,
      path: '/username/dashboard'
    },
    {
      name: 'Classes',
      icon: Icons.classes,
      path: '/username/classes'
    },
    {
      name: 'Messages',
      icon: Icons.messages,
      path: '/username/messages'
    }
  ]
  return (
    <nav className='side-nav column-flex'>
        <section className='app__flex'>
            <img src={Images.logo} alt="logo" />
        </section>
        <article className='column-flex'>
          {sideBarItems.map((item) => (
            <NavLink activeclassname="active" to={item.path} className='column-flex' style={{gap: '19px'}}>
              <div>
                <img src={item.icon} alt="icon" />
              </div>
              <p>{item.name}</p>
            </NavLink>
          ))}
        </article>
    </nav>
  )
}

export default Sidebar;