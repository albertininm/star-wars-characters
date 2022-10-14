import React, { MouseEventHandler } from 'react';
import './Character.scss';
import Avatar from '../Avatar/Avatar';
import WorldInfo from './WorldInfo/WorldInfo';
import SpeciesInfo from './SpeciesInfo/SpeciesInfo';

interface CharacterProps {
  name: string;
  homeWorldUrl: string;
  onClick?: MouseEventHandler | undefined;
  speciesUrls: string[];
}

const Character: React.FC<CharacterProps> = ({
  name,
  homeWorldUrl,
  onClick,
  speciesUrls,
}) => {
  return (
    <div className="character" onClick={onClick}>
      <Avatar name={name} />
      <div className="info">
        <div className="name truncate" title={name}>{name}</div>
        <SpeciesInfo speciesUrls={speciesUrls} />
        <WorldInfo url={homeWorldUrl} />
      </div>
    </div>
  );
};

export default Character;
