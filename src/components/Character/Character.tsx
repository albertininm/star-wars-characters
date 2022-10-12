import React from 'react';
import { People as CharacterProps } from 'types';
import './Character.scss';
import Avatar from '../Avatar/Avatar';
import WorldInfo from './WorldInfo/WorldInfo';
import SpeciesInfo from './SpeciesInfo/SpeciesInfo';

const Character: React.FC<CharacterProps> = ({
  name,
  homeworld,
  species,
}) => {
  return (
    <div className="character">
      <Avatar name={name} />
      <div className="info">
        <div className="name truncate">{name}</div>
        <SpeciesInfo species={['Humani', 'German']} />
        <WorldInfo name="Earth" population="120.000" />
      </div>
    </div>
  );
};

export default Character;
