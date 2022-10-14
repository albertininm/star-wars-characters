import React from 'react';
import SpeciesList from './SpeciesList/SpeciesList';
import './SpeciesInfo.scss';

interface SpeciesInfoProps {
  speciesUrls: string[];
}

const SpeciesInfo: React.FC<SpeciesInfoProps> = ({speciesUrls}) => {
  return (
    <div className="species">
      <div className="title">
        Species
      </div>
      <div className="content">
        <SpeciesList speciesUrls={speciesUrls} />
      </div>
    </div>
  );
};

export default SpeciesInfo;