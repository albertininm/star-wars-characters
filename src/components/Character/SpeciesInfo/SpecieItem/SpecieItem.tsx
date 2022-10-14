import Badge from 'components/Badge/Badge';
import useDataContext from 'contexts/DataContext/useDataContext';
import {useFetch} from 'hooks';
import React from 'react';
import { Specie } from 'types';

interface SpecieItemProps {
  url: string;
}

interface SpecieItemInterface extends React.FC<SpecieItemProps> {
  Unknown: typeof UnknownSpecie;
}

const UnknownSpecie = () => <Badge content="Unknown" color="gray" />;

const SpecieItem: SpecieItemInterface = ({url}) => {
  const {species, setSpecie} = useDataContext();

  console.log('Specie to fetch', url);
  
  const cachedSpecie = species[url];
  
  console.log('Cached Specie', cachedSpecie);

  const {loading, data} = useFetch<Specie>({url, options: {
    skip: Boolean(cachedSpecie),
    onRequestFinish: (specie) => {
      if(!cachedSpecie) {
        setSpecie({specie, url});
      }
    },
  }});

  if(loading) {
    return <Badge.Skeleton />;
  }

  return <Badge content={cachedSpecie?.name || data?.name} />;
};

SpecieItem.Unknown = UnknownSpecie;

export default SpecieItem;