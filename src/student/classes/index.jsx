import React from 'react';

import '../../scss/classes.scss';
import User from '../../components/User';

const Classes = () => {
  return (
    <main className='classes'>
        <section className='classes__section1 app__flex-2'>
            <h1>Classes</h1>
            <User />
        </section>
    </main>
  )
}

export default Classes;