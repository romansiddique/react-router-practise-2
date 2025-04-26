import React, { useContext } from 'react';
import Special from './Special';
import { AssetContext } from './FamilyTree';

const Myself = () => {

  const asset = useContext(AssetContext)
  console.log(asset)
  return (
    <div>
      <h1>Myself</h1>
      <Special asset={asset}></Special>
    </div>
  );
};

export default Myself;