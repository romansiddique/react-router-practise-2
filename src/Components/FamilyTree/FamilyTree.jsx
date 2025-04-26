import React, { createContext } from 'react';
import GrandFather from './GrandFather';
import './FamilyTree.css'

export const AssetContext = createContext('')
const FamilyTree = () => {

  const asset = 'diamond'
  return (
    <div className='familyTree'>
      <h1>This Family Tree</h1>
      <AssetContext.Provider value={asset}>
        <GrandFather></GrandFather>
      </AssetContext.Provider>
    </div>
  );
};

export default FamilyTree;