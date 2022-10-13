import Globe from 'components/Globe/Globe';
import React from 'react';
import './WorldInfo.scss';

interface WorldInfoProps {
  name: string;
  population: string;
}

const WorldInfo: React.FC<WorldInfoProps> = ({name, population}) => {
  const formattedPopulation = `${population} hab`;

  return (
    <div className="home-world">
      <div className="title">Home Planet:</div>
      <div className="content" title="Home planet">
        <Globe />
        <span className="world-name truncate" title={name}>{name}</span>
        <span className="world-population truncate" title={formattedPopulation}>{formattedPopulation}</span>
      </div>
    </div>
  );
};

export default WorldInfo;