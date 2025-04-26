import React from 'react';
import Cousine from './Cousine';

const Aunt = () => {
  return (
    <div>
      <h1>Aunt</h1>
      <section className='flex'>
        <Cousine name={'jamshed'}></Cousine>
        <Cousine name={'Jaky'}></Cousine>
      </section>
    </div>
  );
};

export default Aunt;