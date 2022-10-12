import React from 'react';
import { People as PeopleProps } from 'types';
import './People.scss';
import Avatar from '../Avatar/Avatar';
import Badge from 'components/Badge/Badge';

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
              species.map((specie, i) => <Badge key={i} className="specie" content={specie} />)
            }
          </div>
        )}
        <div className="homeworld"><Badge content={homeworld}/></div>
      </div>
    </div>
  );
};

export default People;
