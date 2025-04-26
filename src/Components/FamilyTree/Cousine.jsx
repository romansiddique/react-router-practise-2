import React, { useContext } from 'react';
import Special from './Special';
import { AssetContext } from './FamilyTree';

const Cousine = ({ name }) => {
  const asset = useContext(AssetContext)
  return (
    <div>
      <h1>{name}</h1>
      
      {
        name == 'Jaky' && <Special asset={asset}></Special>
      }
    </div>
  );
};

export default Cousine;