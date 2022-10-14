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
        {/* <hr className="separator" /> */}
        <SpeciesInfo speciesUrls={speciesUrls} />
        <WorldInfo name="Earth" population="120.000" homeWorldUrl={homeWorldUrl} />
      </div>
    </div>
  );
};

export default Character;
