import React from 'react';
import SpeciesList from './SpeciesList/SpeciesList';
import './SpeciesInfo.scss';

interface SpeciesInfoProps {
  species: string[];
}

const SpeciesInfo: React.FC<SpeciesInfoProps> = ({species}) => {
  return (
    <div className="species">
      <div className="title">
        Species:
      </div>
      <div className="content">
        <SpeciesList species={species} />
      </div>
    </div>
  );
};

export default SpeciesInfo;