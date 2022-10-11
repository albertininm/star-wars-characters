import React from 'react';
import { People as PeopleProps } from 'types';
import './People.scss';
import Avatar from '../Avatar/Avatar';

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
        {species.length > 0 && (
          <div className="species">
            {
              [...species, ...species].map((specie, i) => <div key={i} className="specie">{specie}</div>)
            }
          </div>
        )}
        <div className="homeworld">{homeworld}</div>
      </div>
    </div>
  );
};

export default People;
