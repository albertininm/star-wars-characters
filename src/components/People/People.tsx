import React from 'react';
import { People as PeopleProps } from 'types';
import './People.scss';
import Avatar from '../Avatar/Avatar';
import WorldInfo from './WorldInfo/WorldInfo';
import SpeciesInfo from './SpeciesInfo/SpeciesInfo';

const People: React.FC<React.PropsWithChildren<PeopleProps>> = ({
  name,
  homeworld,
  species,
}) => {
  return (
    <div className="people">
      <Avatar name={name} />
      <div className="info">
        <div className="name truncate">{name}</div>
        <SpeciesInfo species={['Human', 'Specie of Yoda`s']} />
        <WorldInfo name="Earth" population="120.000" />
      </div>
    </div>
  );
};

export default People;
