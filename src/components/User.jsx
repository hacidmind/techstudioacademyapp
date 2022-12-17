import React from 'react';

import '../scss/user.scss';
import { Images } from '../Icons&Images';

const User = () => {
  return (
    <div id='user'>
        <img src={Images.user} alt="user" />
    </div>
  )
}

export default User;