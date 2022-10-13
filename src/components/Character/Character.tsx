import React from 'react';
import './Character.scss';
import Avatar from '../Avatar/Avatar';
import WorldInfo from './WorldInfo/WorldInfo';
import SpeciesInfo from './SpeciesInfo/SpeciesInfo';

interface CharacterProps {
  name: string;
  homeWorldUrl: string;
  speciesUrls: string[];
}

const Character: React.FC<CharacterProps> = ({
  name,
  homeWorldUrl,
  speciesUrls,
}) => {
  return (
    <div className="character">
      <Avatar name={name} />
      <div className="info">
        <div className="name truncate" title={name}>{name}</div>
        <SpeciesInfo speciesUrls={speciesUrls} />
        <WorldInfo name="Earth" population="120.000" />
      </div>
    </div>
  );
};

export default Character;
