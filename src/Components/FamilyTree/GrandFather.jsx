import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';
const GrandFather = () => {
  return (
    <div>
      <h1>GrandFather</h1>
      
      <section className='flex'>
      <Dad></Dad>
      <Uncle></Uncle>
      <Aunt></Aunt>
    </section>
      
    </div>
  );
};

export default GrandFather;