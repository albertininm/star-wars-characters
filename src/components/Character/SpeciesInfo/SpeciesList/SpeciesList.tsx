import React from 'react';
import SpecieItem from '../SpecieItem/SpecieItem';
import './SpeciesList.scss';

interface SpeciesList {
  speciesUrls: string[];
}

const SpeciesList: React.FC<SpeciesList> = ({speciesUrls = []}) => (
  <div className="list">
    {speciesUrls.length > 0 ?
      (speciesUrls.map(specieUrl => <SpecieItem key={specieUrl} url={specieUrl} />)) : (<SpecieItem.Unknown />)}
  </div>
);


export default SpeciesList;