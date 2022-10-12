import Badge from 'components/Badge/Badge';
import React from 'react';
import './SpeciesList.scss';

interface SpeciesList {
  species: string[];
}

const SpeciesList: React.FC<SpeciesList> = ({species = []}) => {
  return (
    species.length > 0 ? (
      <div className="list">
        {species.map(specie => <Badge key={specie} content={specie} />)}
      </div>
    ) : (<Badge content="Unknown" color="gray" />)
  );
};

export default SpeciesList;