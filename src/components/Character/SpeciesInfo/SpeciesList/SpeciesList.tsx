import React from 'react';
import SpecieItem from '../SpecieItem/SpecieItem';
import './SpeciesList.scss';

interface SpeciesList {
  speciesUrls: string[];
}

const SpeciesList: React.FC<SpeciesList> = ({speciesUrls = []}) => {
  if(speciesUrls.length === 0) {
    return <SpecieItem.Unknown />;
  }

  return (
    <div className="list">
      {speciesUrls.map(specieUrl => <SpecieItem key={specieUrl} url={specieUrl} />)}
    </div>
  );
};

export default SpeciesList;