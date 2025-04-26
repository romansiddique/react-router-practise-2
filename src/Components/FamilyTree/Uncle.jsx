import React from 'react';
import Cousine from './Cousine';

const Uncle = () => {
  return (
    <div>
      <h1>Uncle</h1>
      <section className='flex'>
        <Cousine name={'Roshid'}></Cousine>
        <Cousine name={'Bilkiss'}></Cousine>
      </section>
    </div>
  );
};

export default Uncle;