import React from 'react';
import Myself from './Myself';
import Brother from './Brother';

const Dad = () => {
  return (
    <div>
      <h1>Dad</h1>
      <section className='flex'>
      <Myself></Myself>
      <Brother></Brother>
      </section>
    </div>
  );
};

export default Dad;